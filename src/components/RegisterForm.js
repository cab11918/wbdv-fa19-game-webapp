import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';

import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

import RateReviewIcon from '@material-ui/icons/RateReview';
import LabelIcon from '@material-ui/icons/Label';
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from "@material-ui/core/Fab";
import GameService from '../services/GameService'
import UserService from '../services/UserService'
import grey from "@material-ui/core/colors/grey";

const useStyles = (theme => ({

  root: {
    paddingTop: 50,
    paddingBottom: 50,
    flexGrow: 1,
    width: '98%',
    overflowX: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  bigAvatar: {
    width: 80,
    height: 80,
    fontSize: 40
  },
  name: {
    marginLeft: theme.spacing(2),
    paddingTop: 35,

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "80%",
  },
  nameTextField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  inputRoot: {
    fontSize: 25,

  },
  labelRoot: {
    fontSize: 20,

  },
  formControl: {

    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),

  },
  fab: {
    backgroundColor: grey[600],
  },
  backIcon: {
    fontSize: 25,
  },
  mainGrid: {
    paddingTop: 30,
    paddingBottom: 30
  },
  button: {
    marginRight: theme.spacing(1),
    fontSize: 15,
    backgroundColor: grey[600],

  }, grid: {},
  alertBox: {
    fontSize: 20
  },

}));

class RegisterForm extends React.Component {
  userService = UserService.getInstance()

  constructor(props) {

    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      email: "",
      dob: "",
      gender: "select",
      willAlert: false,
      alertText: "",
      reNavPath: "/register"
    }

  }

  register() {
    this.setState({
      willAlert: true
    })
    if (this.state.name === "") {
      this.setState({
        alertText: "Please fill in the name",
      })
    } else if (this.state.username === "") {
      this.setState({
        alertText: "Please fill in the username",
      })
    } else if (this.state.password === "") {
      this.setState({
        alertText: "Please fill in the password",
      })
    } else if (this.state.email === "") {
      this.setState({
        alertText: "Please fill in the Email address",
      })
    } else if (this.state.dob === "") {
      this.setState({
        alertText: "Please fill in your birthday",
      })
    } else if (this.state.gender === "select") {
      this.setState({
        alertText: "Please select your gender",
      })
    } else {
      this.setState({
        alertText: "You have been successfully signed up ! :)",
        reNavPath: "/login"
      })
      this.userService.createUser({
        name: this.state.name,
        birthday: this.state.dob,
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        gender: this.state.gender
      })
    }

  }


  render() {
    const {classes} = this.props;

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.grid}

        >


          <Grid
              container
              direction="row"
              item xs={5}
          >
            <div className={classes.root}>

              <Paper className={classes.paper}>

                <Link to={'/login'}>

                  <Fab className={classes.fab} color="primary" aria-label="add"
                  >
                    <ArrowBackIcon className={classes.backIcon}/>
                  </Fab>

                </Link>

                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"

                    className={classes.mainGrid}
                >

                  <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                  >

                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        item xs={10}
                    >

                      <Avatar
                          className={classes.bigAvatar}>{this.state.name.match(
                          /\b\w/g)
                      }</Avatar>


                      <TextField
                          label="Name"
                          className={classes.nameTextField}
                          onChange={(event) => this.setState({
                            name: event.target.value
                          })}
                          margin="normal"
                          InputProps={{classes: {root: classes.inputRoot}}}
                          InputLabelProps={{
                            classes: {
                              root: classes.labelRoot,
                            }
                          }}
                      />

                    </Grid>


                    <TextField

                        label="Username"
                        className={classes.textField}
                        margin="normal"
                        onChange={(event) => this.setState({
                          username: event.target.value
                        })}
                        InputProps={{classes: {root: classes.inputRoot}}}
                        InputLabelProps={{
                          classes: {
                            root: classes.labelRoot,
                          }
                        }}
                    />

                    <TextField

                        label="Password"
                        type="password"
                        className={classes.textField}
                        onChange={(event) => this.setState({
                          password: event.target.value
                        })}
                        margin="normal"
                        InputProps={{classes: {root: classes.inputRoot}}}
                        InputLabelProps={{
                          classes: {
                            root: classes.labelRoot,
                          }
                        }}
                    />

                    <TextField
                        label="Email"
                        type="email"
                        onChange={(event) => this.setState({
                          email: event.target.value
                        })}
                        className={classes.textField}
                        margin="normal"
                        InputProps={{classes: {root: classes.inputRoot}}}
                        InputLabelProps={{
                          classes: {
                            root: classes.labelRoot,
                          }
                        }}
                    />

                    <TextField
                        id="standard-disabled"
                        label="Date of Birth"
                        type="date"
                        defaultValue="0001-01-01"
                        className={classes.textField}
                        margin="normal"
                        onChange={(event) => this.setState({
                          dob: event.target.value
                        })}
                        InputProps={{classes: {root: classes.inputRoot}}}
                        InputLabelProps={{
                          classes: {
                            root: classes.labelRoot,
                          }
                        }}
                    />

                    <Grid container
                          direction={'row'}
                          justify={'flex-start'}
                          alignItems={'flex-start'}
                          item xs={10}>


                      <FormControl
                          className={classes.formControl}>
                        <InputLabel
                            className={classes.labelRoot}>Gender</InputLabel>
                        <Select
                            className={classes.inputRoot}
                            value={this.state.gender}

                            onChange={(event) => this.setState({
                              gender: event.target.value
                            })
                            }>
                          <MenuItem value={"select"}>Select</MenuItem>
                          <MenuItem value={"male"}>Male</MenuItem>
                          <MenuItem value={"female"}>Female</MenuItem>
                          <MenuItem value={"other"}>Other</MenuItem>

                        </Select>
                      </FormControl>

                    </Grid>


                  </Grid>

                </Grid>

                <Grid container
                      direction={'row'}
                      justify={'flex-end'}
                      alignItems={'center'}>

                  <Button
                      variant="contained" color="primary"
                      className={classes.button}
                      onClick={() => this.register()
                      }>
                    Create Account
                  </Button>



                </Grid>


              </Paper>
            </div>
          </Grid>

          <Dialog className={classes.alertBox}
                  open={this.state.willAlert}
              // onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
          >

            <DialogContent>
              <DialogContentText className={classes.alertBox}
                                 id="alert-dialog-description">
                {this.state.alertText}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Link to={this.state.reNavPath}>


                <Button
                    onClick={() =>
                        this.setState({
                          willAlert: false
                        })
                    }

                    color="primary" autoFocus className={classes.alertBox}>
                  OK
                </Button>

              </Link>
            </DialogActions>
          </Dialog>
        </Grid>

    )
  }

}

export default withStyles(useStyles)(RegisterForm)
