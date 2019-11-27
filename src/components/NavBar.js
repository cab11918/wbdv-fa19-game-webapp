import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import grey from '@material-ui/core/colors/grey';
import {withStyles} from "@material-ui/core/styles";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import {
  Link
} from 'react-router-dom'

const useStyles = theme => ({
  root: {
    flexGrow: 1,

  },

  title: {
    flexGrow: 1,

  },
  logo: {
    width: 40,
    height: 40,
    marginRight: theme.spacing(1),

  },
  nav: {
    backgroundColor: grey[800]
  },
  searching: {
    marginRight: theme.spacing(1),

  },
  button: {
    fontSize: 15,
    backgroundColor: grey[600]

  }

});

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {classes} = this.props;

    return (

        <div>

          <div className={classes.root}>
            <AppBar className={classes.nav} position="static">
              <Toolbar>

                <SportsEsportsIcon className={classes.logo}/>
                <Typography variant="h4" className={classes.title}>
                  myGame
                </Typography>


              </Toolbar>
            </AppBar>
          </div>


        </div>

    )
  }

}

export default withStyles(useStyles)(NavBar)

