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
    width: 60,
    height: 60,
    fontSize:25
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
  formControl:{

      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),

  },
  fab: {
    backgroundColor: grey[600],
  },
  backIcon: {
    fontSize: 25,
  },
  mainGrid:{
    paddingTop:20
  }


}));

class ProfileForm extends React.Component {

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

            <Link to={'/'}>

              <Fab className={classes.fab}  color="primary" aria-label="add"
              >
                <ArrowBackIcon className={classes.backIcon} />
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

            <Avatar className={classes.bigAvatar}>OP</Avatar>

            <Typography variant={"h4"} className={classes.name}>
              BILL GATES
            </Typography>


          </Grid>

          <TextField
              disabled
              id="standard-disabled"
              label="Username"
              defaultValue="bGates=$111"
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
              defaultValue="bGates=$111"
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
              defaultValue="2017-05-24"
              className={classes.textField}
              margin="normal"
              InputProps={{classes: {root: classes.inputRoot}}}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                }
              }}
          />

          <FormControl
              className={classes.formControl} disabled>
            <InputLabel
                className={classes.labelRoot}
                id="demo-simple-select-disabled-label">Gender</InputLabel>
            <Select
                className={classes.inputRoot}
                value={20}>
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>

            </Select>
          </FormControl>


          <TextField
              disabled
              id="standard-disabled"
              label="Email"
              type="email"
              defaultValue="b.gates@husky.neu.edu"
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

            <Grid item xs={4}>

              <Typography variant={"h2"}>
                Game List
              </Typography>
              <Divider/>

              <ul>
                <li>game</li>
                <li>game</li>
                <li>game</li>
                <li>game</li>
                <li>game</li>
                <li>game</li>
                <li>game</li>
                <li>game</li>
                <li>game</li>
              </ul>

            </Grid>

              <Grid item xs={4}>

                <Typography variant={"h2"}>
                  Friend List
                </Typography>
                <Divider/>

                <ul>
                  <li>friend</li>
                  <li>friend</li>
                  <li>friend</li>
                  <li>friend</li>
                  <li>friend</li>
                  <li>friend</li>
                  <li>friend</li>
                  <li>friend</li>
                </ul>

              </Grid>


            </Grid>


          </Paper>


        </div>

    );
  }

}

export default withStyles(useStyles)(ProfileForm)
