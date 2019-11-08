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
import Chip from '@material-ui/core/Chip';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LabelIcon from '@material-ui/icons/Label';
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Grid from "@material-ui/core/Grid";
import GameTable from "./GameTable";

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
    width: 300,
    marginBottom: '5px',
  },

  card: {
    marginBottom: '15px',
    marginTop: '15px'
  },
  chip: {
    fontSize: 10,
    marginBottom: '1px',
    marginTop: '1px',
    marginLeft: '1px',
    marginRight: '1px'
  }

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
          <Typography variant="h1">
            Details
          </Typography>

          <Paper className={classes.paper}>

            <Typography variant="h3">
              {this.props.game.name}

            </Typography>


            <Card className={classes.card}>

              <CardContent>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                >

                  <Grid item xs={6}>

                    <img src={this.props.game.background_image}
                         className={classes.img}/>


                  </Grid>

                  <Grid item xs={6}>
                    {this.props.tags.splice(0, 5).map(tag => (
                        <Chip size="small" color="primary" icon={<LabelIcon/>}
                              label={tag.name} className={classes.chip}/>

                    ))}


                  </Grid>

                </Grid>

                <Video key={this.props.videoUrl} autoPlay loop muted
                       controls={['PlayPause', 'Seek', 'Time', 'Volume',
                         'Fullscreen']}
                       poster={this.props.game.background_image}
                       onCanPlayThrough={() => {
                         // Do stuff
                       }}>
                  <source src={this.props.videoUrl} type="video/webm"/>
                  <track label="English" kind="subtitles" srcLang="en"
                         src="http://source.vtt" default/>
                </Video>
              </CardContent>
            </Card>


            <Typography variant="h4">
              Description

            </Typography>

            <Divider/>
            <Typography variant="h6">
              <div dangerouslySetInnerHTML={createMarkup(
                  this.props.game.description)}/>

            </Typography>


          </Paper>


        </div>

    );
  }

}

export default withStyles(useStyles)(GameDetails)