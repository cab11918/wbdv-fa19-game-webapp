import React from 'react'

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import grey from '@material-ui/core/colors/grey';
import {withStyles} from "@material-ui/core/styles";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import {Link} from 'react-router-dom'

const useStyles = theme => ({
  root: {
    flexGrow: 10,

  },
  textField: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',

  },

  inputRoot: {
    fontSize: 20,

  },
  labelRoot: {
    fontSize: 20,

  },
  labelFocused: {},
  logo: {
    width: 40,
    height: 40,
    marginRight: theme.spacing(1),
  },
  link: {
    paddingTop: 20,
  },
  button: {
    marginRight: theme.spacing(1),
    fontSize: 15,
    backgroundColor: grey[600]
  },
  grid: {
    minHeight: '100vh'
  }

});

class LoginBox extends React.Component {
  constructor(props) {
    super(props)
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

          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>

                    <Toolbar>

                      <SportsEsportsIcon className={classes.logo}/>

                      <Typography component="h3" variant="h3">
                        myGame
                      </Typography>


                    </Toolbar>


                    <TextField
                        id="standard-required"
                        label="Username"
                        InputProps={{classes: {root: classes.inputRoot}}}
                        InputLabelProps={{
                          classes: {
                            root: classes.labelRoot,
                            focused: classes.labelFocused
                          }
                        }}
                        className={classes.textField}
                        margin="normal"
                        variant='outlined'
                    />

                    <TextField
                        id="standard-password-input"
                        label="Password"
                        InputProps={{classes: {root: classes.inputRoot}}}
                        InputLabelProps={{
                          classes: {
                            root: classes.labelRoot,
                            focused: classes.labelFocused
                          }
                        }}
                        className={classes.textField} type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant='outlined'

                    />


                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                    >

                      <Grid container justify="flex-start" direction="row">
                        <Link to="/register" className={classes.link}>
                          Don't have an account?
                        </Link>
                      </Grid>


                      <Grid container justify="flex-end" direction="row">

                        <Link to={'/'}>
                          <Button className={classes.button}
                                  variant="contained"
                                  color="primary">
                            log in
                          </Button>
                        </Link>
                      </Grid>


                    </Grid>


                  </CardContent>

                </div>

              </Card>
            </Paper>
          </Grid>

        </Grid>

    )
  }

}

export default withStyles(useStyles)(LoginBox)

