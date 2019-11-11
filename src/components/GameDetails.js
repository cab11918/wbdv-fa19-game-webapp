import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';

import Chip from '@material-ui/core/Chip';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LabelIcon from '@material-ui/icons/Label';
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Grid from "@material-ui/core/Grid";
import GameTable from "./GameTable";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Container from "@material-ui/core/Container";

const useStyles = (theme => ({

  root: {
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
    marginTop: '5px',
    marginLeft: '5px',
    marginRight: '5px',

  },
  chip: {

    marginBottom: '1px',
    marginTop: '1px',
    marginLeft: '1px',
    marginRight: '1px',
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
    fontSize: 15,

  },

}));

function createMarkup(data) {
  return {__html: data};
}

class GameDetails extends React.Component {

  constructor(props) {

    super(props);

  }

  render() {
    const {classes} = this.props;

    return (
        <div className={classes.root}>


          <Paper className={classes.paper}>


            <Card className={classes.card}>

              <CardContent>


                <Typography variant="h3">
                  {this.props.game.name}

                </Typography>
                <Divider className={classes.div}/>


                <Grid
                    container
                    direction="row"

                >
                  <Card className={classes.card}>

                    <Video key={this.props.videoUrl} autoPlay loop muted
                           controls={['PlayPause', 'Seek', 'Time', 'Volume',
                             'Fullscreen']}
                           poster={this.props.game.background_image}
                           onCanPlayThrough={() => {
                             // Do stuff
                           }}>
                      <source src={this.props.videoUrl} type="video/webm"/>

                    </Video>


                  </Card>
                  <Grid item xs={6}>

                    <Card className={classes.card}>

                      <img src={this.props.game.background_image}
                           className={classes.img}/>

                    </Card>

                  </Grid>

                  <Grid item xs={6}>


                    <div className={classes.card}>
                      {this.props.tags.splice(0, 5).map(tag => (
                          <Chip size="small" icon={<LabelIcon/>}
                                label={tag.name} className={classes.chip}/>

                      ))}
                    </div>


                  </Grid>

                </Grid>

                <Typography variant="h4">
                  Description

                </Typography>

                <Divider className={classes.div}/>

                <Typography variant="h6">
                  <div dangerouslySetInnerHTML={createMarkup(
                      this.props.game.description)}/>

                </Typography>

                <Typography variant="h4">
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