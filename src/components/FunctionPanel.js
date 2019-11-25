import React from 'react'

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {withStyles} from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import {Typography} from "@material-ui/core";
import GameService from "../services/GameService"
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Grow from '@material-ui/core/Grow';

const useStyles = theme => ({
  root: {
    flexGrow: 1,

  },

  card: {
    paddingTop: 20

  },
  button: {

    fontSize: 20,
    marginLeft: theme.spacing(2)

  },
  icon: {
    width: 50,
    height: 50,
  },
  bigAvatar: {
    width: 100,
    height: 100,
  },
  mainGrid: {
    marginLeft: theme.spacing(2)

  },
  helloWord: {
    paddingTop: 20,
    marginLeft: theme.spacing(2)

  },
  img: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)

  }

});

class FunctionPanel extends React.Component {

  service = GameService.getInstance()

  constructor(props) {
    super(props)

    this.state = {
      results: []
    }

  }

  componentDidMount() {

    this.service.getFeaturedGames(40).then(response => {
          this.setState({

            results: response.results

          })
        }
    )
  }

  render() {
    const {classes} = this.props;

    return (

        <div>

          <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              className={classes.mainGrid}
          >

            <Grid
                container
                direction="row"


                className={classes.card}>

              <Avatar alt="Bill Gates"
                      src="http://www.gstatic.com/tv/thumb/persons/614/614_v9_bc.jpg"
                      className={classes.bigAvatar}/>

              <Typography variant={"h1"} className={classes.helloWord}>
                Welcome, Bill Gates!
              </Typography>


              <Grid
                  container
                  direction="row"


                  className={classes.card}>


                <Link to="/searching">
                  <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      startIcon={<SearchIcon className={classes.icon}/>}
                  >
                    Search
                  </Button>
                </Link>

                <Link to="/profile">
                  <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      startIcon={<AccountBoxIcon className={classes.icon}/>}
                  >
                    Profile
                  </Button>
                </Link>

              </Grid>


              <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  className={classes.card}

              >

                {
                  this.state.results.map((game, index) => (
                      <Grow in={true}
                            style={{transformOrigin: '0 0 0'}}
                            {...({timeout: 1000 + index * 100})}>
                        <img src={game.background_image}
                             className={classes.img}/>
                      </Grow>
                  ))
                }
              </Grid>


            </Grid>

            <Grid


                item xs={3} className={classes.card}>


            </Grid>


          </Grid>


        </div>

    )
  }

}

export default withStyles(useStyles)(FunctionPanel)

