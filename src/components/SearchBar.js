import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SteamLogo from '../images/Steam_icon_logo.svg';
import grey from '@material-ui/core/colors/grey';
import {BrowserRouter as Router, Link} from "react-router-dom";
import CssBaseline from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import DirectionsIcon from '@material-ui/icons/Directions'
import Divider from '@material-ui/core/Divider'
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = (theme => ({

  root: {
    padding: '2px 4px',
    marginTop: '50px',
    marginBottom: '50px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 25,

  },
  iconButton: {
    padding: 10,

  },

}));

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }

  }

  render() {
    const {classes} = this.props;

    return (

        <React.Fragment>


          <Container maxWidth="sm" className={classes.container}>
            <Paper className={classes.root}>

              <InputBase
                  className={classes.input}
                  placeholder="Search game"
                  inputProps={{'aria-label': 'Search game'}}
                  onChange={(event) => this.setState({
                    search: event.target.value
                  })}
              />
              <IconButton className={classes.iconButton} aria-label="search"
                          onClick={(
                              event => this.props.action(this.state.search))}
              >
                <SearchIcon/>
              </IconButton>

            </Paper>
          </Container>
        </React.Fragment>
    )
  }

}

export default withStyles(useStyles)(SearchBar)

