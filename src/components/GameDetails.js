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
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';

import Chip from '@material-ui/core/Chip';
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
import SnackbarContent from '@material-ui/core/SnackbarContent';

import Fab from "@material-ui/core/Fab";
import GameService from '../services/GameService'
import grey from "@material-ui/core/colors/grey";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
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
  img: {
    display: 'flex',
    width: "100%",
    alignItems: 'center',

    borderRadius: 5
  },

  card: {
    marginBottom: '5px',
    marginTop: '20px',
    marginLeft: '5px',
    marginRight: '5px',

  },
  chip: {

    fontSize: '15px',

    marginBottom: '2px',
    marginTop: '2px',
    marginLeft: '2px',
    marginRight: '2px',
  },
  div: {
    marginTop: '5px',
    marginBottom: '5px',
  },
  iconButton: {
    padding: 10,

  },
  review: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(8),
    backgroundColor: grey[500],

  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 20,

  },
  fab: {
    backgroundColor: grey[600]
  },
  backIcon: {
    fontSize: 25,
  },
  button: {

    fontSize: 15,

  },
  icon: {
    width: 30,
    height: 30,
  },
  reviewIcon: {
    width: 30,
    height: 30,
  },

  reviewBox: {
    fontSize: 15,
  },
  bigAvatar: {

    width: 40,
    height: 40,
    fontSize: 20,

  },
  reviewerName: {
    marginRight: theme.spacing(1)

  },
  reviewContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  alertBox: {
    fontSize: 20
  },

}));

function createMarkup(data) {
  return {__html: data};
}

class GameDetails extends React.Component {

  gameService = GameService.getInstance()
  userService = UserService.getInstance()

  componentDidMount() {

    this.gameService.getDetails(this.props.gameId).then(response =>
        response.clip === null ? this.setState({
              game: response,
              videoUrl: "",
              tags: response.tags
            }) :

            this.setState({
              game: response,
              videoUrl: response.clip.clip,
              tags: response.tags

            })
    )

    if (typeof (this.props.userId) == 'undefined') {

    } else {
      this.setState({
        reNav: "/user/" + this.props.userId + "/searching"

      })
    }

  }

  addGame() {
    this.setState({
      addButtonText: "Added!"
    })
    this.userService.addGameForUser(this.props.userId, {
      gameId: this.props.gameId,
      name: this.state.game.name,
      imageUrl: this.state.game.background_image
    })
  }

  constructor(props) {

    super(props);
    this.state = {
      results: [],
      game: [],
      videoUrl: "",
      tags: [],
      addButtonText: "Add to list",
      reNav: "/searching"
    }

  }

  render() {
    const {classes} = this.props;

    return (

        <div className={classes.root}>


          <Paper className={classes.paper}>

            <Link to={this.state.reNav}>

              <Fab className={classes.fab} color="primary" aria-label="add"
              >
                <ArrowBackIcon className={classes.backIcon}/>
              </Fab>

            </Link>


            <Card className={classes.card}>


              <CardContent>


                <Typography variant="h3">
                  {this.state.game.name}

                </Typography>

                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-end"

                >
                  <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      onClick={() => this.addGame()}
                      startIcon={<AddCircleOutlineIcon
                          className={classes.icon}/>}
                  >
                    {this.state.addButtonText}
                  </Button>

                </Grid>

                <Divider className={classes.div}/>


                <Grid
                    container
                    direction="row"

                >

                  <Grid item xs={8}>

                    <Card className={classes.card}>

                      <img src={this.state.game.background_image}
                           className={classes.img}/>

                    </Card>

                  </Grid>

                  <Grid item xs={4}>


                    <div className={classes.card}>
                      {this.state.tags.map(tag => (
                          <Chip size="small" icon={<LabelIcon/>}
                                label={tag.name} className={classes.chip}/>

                      ))}
                    </div>


                  </Grid>

                </Grid>

                <Typography variant="h3">
                  Description

                </Typography>

                <Divider className={classes.div}/>

                <Typography variant="h5">
                  <div dangerouslySetInnerHTML={createMarkup(
                      this.state.game.description)}/>

                </Typography>

                <Card className={classes.card}>

                  <Video key={this.state.videoUrl} autoPlay loop muted
                         controls={['PlayPause', 'Seek', 'Time', 'Volume',
                           'Fullscreen']}
                         poster={this.state.game.background_image}
                         onCanPlayThrough={() => {
                           // Do stuff
                         }}>
                    <source src={this.state.videoUrl} type="video/webm"/>

                  </Video>


                </Card>

                <Typography variant="h3">
                  Reviews

                </Typography>

                <Divider className={classes.div}/>

                // for test only

                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    className={classes.reviewContainer}
                >

                  <Grid


                  >
                    <Avatar
                        className={classes.bigAvatar}>{"MINGHAO YU".match(
                        /\b\w/g)
                    }</Avatar>

                    <Typography variant="h6" className={classes.reviewerName}>
                      Minghao Yu

                    </Typography>

                  </Grid>
                  <SnackbarContent className={classes.reviewBox}
                                   message="I love snacks."/>


                </Grid>


                <Paper className={classes.review}>


                  <InputBase
                      className={classes.input}
                      placeholder="Say something good ..."
                      inputProps={{'aria-label': 'Write review'}}

                  />
                  <IconButton className={classes.iconButton} aria-label="review"

                  >
                    <RateReviewIcon className={classes.reviewIcon}/>
                  </IconButton>

                </Paper>


              </CardContent>
            </Card>


          </Paper>


        </div>

    );
  }

}

export default withStyles(useStyles)(GameDetails)
