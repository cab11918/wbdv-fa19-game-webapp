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
import DeleteIcon from '@material-ui/icons/Delete';
import grey from "@material-ui/core/colors/grey";
import UserService from "../services/UserService";

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
    width: 60,
    height: 60,
    fontSize: 25
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
    paddingTop: 20
  },
  th: {
    fontSize: 15
  },
  tr: {
    fontSize: 13
  },
  img: {
    width: 60,
    height: 40,
    marginRight: 20,
    borderRadius: 5

  },
  trashLogo:{
    width:20,
    height:20
  }


}));

class ProfileForm extends React.Component {
  userService = UserService.getInstance()

  constructor(props) {

    super(props);
    this.state = {
      results: [],
      game: [],
      videoUrl: "",
      tags: [],
      name: "",
      username: "",
      password: "",
      dob: "",
      gender: "select",
      email: "",
      gameList: []
    }

    this.userService.findUserById(this.props.userId).then(user => {
      this.setState({
            name: user.name,
            username: user.username,
            password: user.password,
            dob: user.birth_day,
            gender: user.gender,
            email: user.email,
            gameList: user.games
          }
      )

    })

  }

  deleteGame(userId, gameId) {
    this.userService.deleteGameForUser(userId, gameId).then(gameList => {
      this.setState({
        gameList: gameList
      })

    })

  }


  render() {
    const {classes} = this.props;

    return (

        <div className={classes.root}>


          <Paper className={classes.paper}>

            <Link to={'/user/' + this.props.userId}>

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

              <Grid item xs={4}>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >

                  <Avatar
                      className={classes.bigAvatar}>{this.state.name.match(
                      /\b\w/g)
                  }</Avatar>

                  <Typography variant={"h4"} className={classes.name}>
                    {this.state.name}
                  </Typography>


                </Grid>

                <TextField
                    disabled
                    id="standard-disabled"
                    label="Username"
                    value={this.state.username}
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
                    disabled
                    id="standard-disabled"
                    label="Password"
                    type="password"
                    value={this.state.password}
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
                    disabled
                    id="standard-disabled"
                    label="Date of Birth"
                    type="date"
                    value={this.state.dob}
                    className={classes.textField}
                    margin="normal"
                    InputProps={{classes: {root: classes.inputRoot}}}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                      }
                    }}
                />

                <FormControl disabled
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


                <TextField
                    disabled
                    id="standard-disabled"
                    label="Email"
                    type="email"
                    value={this.state.email}
                    className={classes.textField}
                    margin="normal"
                    InputProps={{classes: {root: classes.inputRoot}}}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                      }
                    }}
                />


              </Grid>

              <Grid item xs={8}>

                <Typography variant={"h2"}>
                  Game List
                </Typography>
                <Divider/>

                <Table className={classes.table} aria-label="simple table">
                  <TableHead className={classes.th}>
                    <TableRow>
                      <TableCell>
                        <div className={classes.th}></div>
                      </TableCell>

                      <TableCell>
                        <div className={classes.th}></div>
                      </TableCell>


                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {

                      this.state.gameList.map(game => (
                          <TableRow key={game.id}>

                            <TableCell component="th" scope="row">

                              <div className={classes.tr}>
                                <img src={game.imageUrl}
                                     className={classes.img}/>
                                <a>{game.name}</a>
                              </div>

                            </TableCell>

                            <TableCell>
                              <IconButton   key={game.id} aria-label="delete"
                                          onClick={(event) => {
                                            this.deleteGame(this.props.userId,
                                                game.id)
                                          }}>
                                <DeleteIcon className={classes.trashLogo}/>
                              </IconButton>
                            </TableCell>


                          </TableRow>
                      ))

                    }
                  </TableBody>
                </Table>

              </Grid>


            </Grid>


          </Paper>


        </div>

    );
  }

}

export default withStyles(useStyles)(ProfileForm)
