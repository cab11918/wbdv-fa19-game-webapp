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
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from "@material-ui/core/Fab";
import GameService from '../services/GameService'
import grey from "@material-ui/core/colors/grey";

const useStyles = (theme => ({

  root: {
    paddingTop: 20,
    paddingBottom: 20,
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
    width: "60%",
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
    paddingBottom: 20
  },
  button: {
    marginRight: theme.spacing(1),
    fontSize: 15,
    backgroundColor: grey[600],

  }, grid: {}

}));

class RegisterForm extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      results: [],
      game: [],
      videoUrl: "",
      tags: [],
      name: ""
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
              item xs={6}
          >
            <div className={classes.root}>

              <Paper className={classes.paper}>

                <Link to={'/'}>

                  <Fab className={classes.fab} color="primary" aria-label="add"
                  >
                    <ArrowBackIcon className={classes.backIcon}/>
                  </Fab>

                </Link>

                <Grid
                    container
                    direction="row"

                    className={classes.mainGrid}
                >

                  <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                  >

                    <Avatar
                        className={classes.bigAvatar}>{this.state.name.match(/\b\w/g)
                    }</Avatar>


                    <TextField
                        label="Name"
                        className={classes.nameTextField}
                        onChange={(event)=>this.setState({
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
                      defaultValue="2019-01-01"
                      className={classes.textField}
                      margin="normal"
                      InputProps={{classes: {root: classes.inputRoot}}}
                      InputLabelProps={{
                        classes: {
                          root: classes.labelRoot,
                        }
                      }}
                  />

                  <Grid
                      item xs={12}
                  >

                    <FormControl
                        className={classes.formControl}>
                      <InputLabel
                          className={classes.labelRoot}>Gender</InputLabel>
                      <Select
                          className={classes.inputRoot}
                          value={10}>
                        <MenuItem value={10}>Male</MenuItem>
                        <MenuItem value={20}>Female</MenuItem>

                      </Select>
                    </FormControl>

                  </Grid>


                </Grid>
                <Button variant="contained" color="primary"
                        className={classes.button}>
                  Create Account
                </Button>


              </Paper>
            </div>
          </Grid>


        </Grid>

    );
  }

}

export default withStyles(useStyles)(RegisterForm)
