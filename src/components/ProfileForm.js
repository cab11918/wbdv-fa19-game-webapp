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
import AddIcon from '@material-ui/icons/Add';
import grey from "@material-ui/core/colors/grey";
import UserService from "../services/UserService";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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
    width: '80%',
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
    fontSize: 13,

  },
  img: {
    width: 60,
    height: 40,
    marginRight: 20,
    borderRadius: 5

  },
  trashLogo: {
    width: 20,
    height: 20
  },
  eachTable: {
    paddingTop: 30,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },

  buttonLogin: {
    fontSize: 15,
    backgroundColor: grey[600],
  },
  profileGrid: {
    maxHeight: 500
  },
  tableAvatar: {
    width: 40,
    height: 40,
    fontSize: 20
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
      gameList: [],
      reviews: [],
      canEdit: true,
      updateText: "Update profile",
      users: [],
      friends: []
    }

    this.userService.findUserById(this.props.userId).then(user => {
      this.setState({
            name: user.name,
            username: user.username,
            password: user.password,
            dob: user.birth_day,
            gender: user.gender,
            email: user.email,
            gameList: user.games,
            reviews: user.reviews,
            friends: user.friends
          }
      )

    })

    this.userService.findAllUsers().then(users => {
      this.setState({
        users: users
      })
    })

  }

  deleteGame(userId, gameId) {
    this.userService.deleteGameForUser(userId, gameId).then(gameList => {
      this.setState({
        gameList: gameList
      })

    })

  }

  deleteFriend(userId, friendId) {
    this.userService.deleteFriend(userId, friendId).then(friends => {
      this.setState({
        friends: friends
      })

    })

  }



  updateProfile() {

    if (this.state.canEdit) {
      this.setState({
        updateText: "Done",
        canEdit: false
      })

    } else {
      this.userService.updateProfile(this.props.userId, {
        name: this.state.name,
        password: this.state.password,
        birthday: this.state.dob,
        gender: this.state.gender,
        email: this.state.email,
        reviews: this.state.reviews,
        games: this.state.gameList
      })
      this.setState({
        updateText: "Update Profile",
        canEdit: true
      })

    }

  }

  addFriend(userId, user) {
    this.userService.addFriend(userId, user).then
    (
        friends => {
          this.setState({
            friends: friends
          })
        }
    )
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


              <Grid container
                    direction="row"
              >
                <Grid container xs={3} className={classes.profileGrid}>


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

                  <Grid

                      direction="row"
                      xs={12}

                  >

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
                  </Grid>

                  <Grid

                      direction="row"
                      xs={12}


                  >

                    <TextField
                        disabled={this.state.canEdit}
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
                        onChange={(event) => this.setState({
                          password: event.target.value
                        })}
                    />
                  </Grid>
                  <Grid

                      direction="row"
                      xs={12}


                  >
                    <TextField
                        disabled={this.state.canEdit}
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
                        onChange={(event) => this.setState({
                          dob: event.target.value
                        })}
                    />
                  </Grid>

                  <Grid

                      direction="row"
                      xs={12}

                  >

                    <FormControl disabled={this.state.canEdit}
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

                  <Grid

                      direction="row"
                      xs={12}

                  >

                    <TextField
                        disabled={this.state.canEdit}
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
                        onChange={(event) => this.setState({
                          email: event.target.value
                        })}
                    />


                  </Grid>


                  <Button className={classes.buttonLogin} variant="contained"
                          onClick={() => {
                            this.updateProfile()
                          }}
                          color="primary">
                    {this.state.updateText}
                  </Button>


                </Grid>


                <Grid item xs={6}
                      className={classes.eachTable}>


                  <Typography variant={"h3"}>
                    My Games
                  </Typography>


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
                                  <a href={"/user/" + this.props.userId
                                  + "/detail/" + game.gameId}>{game.name}</a>
                                </div>

                              </TableCell>

                              <TableCell style={{textAlign: 'right'}}>
                                <IconButton key={game.id} aria-label="delete"
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


                <Grid item xs={3}
                      className={classes.eachTable}>

                  <Typography variant={"h3"}>
                    My Friends
                  </Typography>


                  <Table className={classes.table} aria-label="simple table">
                    <TableHead className={classes.th}>
                      <TableRow>
                        <TableCell>
                          <div className={classes.th}></div>
                        </TableCell>

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

                        this.state.friends.map(friend => (
                            <TableRow key={friend.id}>

                              <TableCell component="th" scope="row">

                                <div className={classes.tr}>
                                  <Avatar
                                      className={classes.tableAvatar}>{friend.username.match(
                                      /\b\w/g)
                                  }</Avatar>


                                </div>
                              </TableCell>

                              <TableCell component="th" scope="row">


                                <div className={classes.tr}>

                                  <a href={"/user/" + this.props.userId
                                  + "/detail/"
                                  + friend.id}>{friend.username}</a>
                                </div>

                              </TableCell>

                              <TableCell style={{textAlign: 'right'}}>
                                <IconButton key={friend.id} aria-label="delete"
                                            onClick={(event) => {
                                              this.deleteFriend(
                                                  this.props.userId, friend.id)
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


              <Grid contianer xs={3}
                    className={classes.eachTable}>

                <Typography variant={"h3"}>
                  Users
                </Typography>


                <Table className={classes.table} aria-label="simple table">
                  <TableHead className={classes.th}>
                    <TableRow>
                      <TableCell>
                        <div className={classes.th}></div>
                      </TableCell>

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

                      this.state.users.map(
                          user => (user.id != this.props.userId ?
                                  <TableRow key={user.id}>

                                    <TableCell component="th" scope="row">

                                      <div className={classes.tr}>
                                        <Avatar
                                            className={classes.tableAvatar}>{user.name.match(
                                            /\b\w/g)
                                        }</Avatar>


                                      </div>


                                    </TableCell>

                                    <TableCell component="th" scope="row">

                                      <div className={classes.tr}>

                                        <a href={"adsadsa"}>{user.username}</a>

                                      </div>


                                    </TableCell>


                                    <TableCell style={{textAlign: 'right'}}>
                                      <IconButton key={user.id}
                                                  aria-label="delete"
                                                  onClick={() => this.addFriend(
                                                      this.props.userId, {
                                                        username: user.username,
                                                        reviews: [],
                                                        games: []

                                                      })}>
                                        <AddCircleOutlineIcon
                                            className={classes.trashLogo}/>
                                      </IconButton>
                                    </TableCell>


                                  </TableRow> : <span></span>
                          ))

                    }
                  </TableBody>
                </Table>

              </Grid>


              <Grid container xs={9}

                    className={classes.eachTable}>
                <Typography variant={"h3"}>
                  My Reviews
                </Typography>

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

                      this.state.reviews.map(review => (
                          <TableRow key={review.id}>

                            <TableCell component="th" scope="row">

                              <div className={classes.tr}>
                                {review.gameName}
                              </div>

                            </TableCell>

                            <TableCell className={classes.tr}
                            >
                              <a href={"/user/" + this.props.userId
                              + "/detail/"
                              + review.gameId}>
                                {review.review}
                              </a>
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
