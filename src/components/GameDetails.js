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
    marginRight: 'auto'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 12,

  },
  fab: {
    backgroundColor: grey[600]
  },
  backIcon: {
    fontSize: 25,
  }

}));

function createMarkup(data) {
  return {__html: data};
}

class GameDetails extends React.Component {

  service = GameService.getInstance()

  componentDidMount() {

    this.service.getDetails(this.props.gameId).then(response =>
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

  }

  constructor(props) {

    super(props);
    this.state = {
      results: [],
      game: [],
      videoUrl: "",
      tags: []
    }

  }



  render() {
    const {classes} = this.props;

    return (

        <div className={classes.root}>



          <Paper className={classes.paper}>

            <Link to={'/searching'}>

              <Fab className={classes.fab}  color="primary" aria-label="add"
              >
                <ArrowBackIcon className={classes.backIcon} />
              </Fab>

            </Link>

            <Card className={classes.card}>


              <CardContent>


                <Typography variant="h3">
                  {this.state.game.name}

                </Typography>
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


                <Paper className={classes.review}>

                  <InputBase
                      className={classes.input}
                      placeholder="Write review"
                      inputProps={{'aria-label': 'Write review'}}

                  />
                  <IconButton className={classes.iconButton} aria-label="review"

                  >
                    <RateReviewIcon/>
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
