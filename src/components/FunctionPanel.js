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
import UserService from "../services/UserService"
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import grey from "@material-ui/core/colors/grey";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Paper from "@material-ui/core/Paper";

const useStyles = theme => ({
  root: {
    flexGrow: 1,

  },
  title: {
    flexGrow: 1,

  },

  card: {
    paddingTop: 20

  },
  button: {

    fontSize: 20,
    marginLeft: theme.spacing(2),

  },
  icon: {
    width: 50,
    height: 50,
  },
  bigAvatar: {

    width: 80,
    height: 80,
    fontSize: 40

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
  buttonLogin: {
    fontSize: 15,
    backgroundColor: grey[600],

  }

});

class FunctionPanel extends React.Component {

  gameService = GameService.getInstance()
  userService = UserService.getInstance()

  constructor(props) {
    super(props)

    this.state = {
      results: [],
      reNav: '',
      reNavSearch: '/searching',
      name: "Guest",
      userLoginText: "LOG IN",
      userId: "",
      gameList: [],
    }

  }

  componentDidMount() {

    this.gameService.getFeaturedGames(20).then(response => {
          this.setState({

            results: response.results

          })
        }
    )
    if (typeof (this.props.userId) == 'undefined') {

    } else {
      this.userService.findUserById(this.props.userId).then(user => {
        this.setState({
          name: user.name,
          reNav: "/profile/" + user.id,
          userLoginText: "LOG OUT",
          reNavSearch: "/user/" + user.id + "/searching",
          userId: "/user/" + user.id,
          gameList: user.games,


        })
      })



    }

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
                  <Link to={'/login'}>
                    <Button className={classes.buttonLogin} variant="contained"
                            color="primary">
                      {this.state.userLoginText}
                    </Button>
                  </Link>


                </Toolbar>
              </AppBar>
            </div>




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

              <Avatar
                  className={classes.bigAvatar}>{this.state.name.match(
                  /\b\w/g)
              }</Avatar>

              <Typography variant={"h1"} className={classes.helloWord}>
                {
                  "Welcome," + this.state.name + "!"
                }
              </Typography>


              <Grid
                  container
                  direction="row"


                  className={classes.card}>


                <Link to={this.state.reNavSearch}>
                  <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      startIcon={<VideogameAssetIcon className={classes.icon}/>}
                  >
                    games
                  </Button>
                </Link>

                <Link to={this.state.reNav}>
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
                  justify="flex-start"
                  alignItems="flex-start"
                  className={classes.card}

              >

                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"

                >

                  <Typography variant={"h3"} className={classes.helloWord}>
                    My Games
                  </Typography>
                </Grid>


                {
                  this.state.gameList.map((game, index) => (

                      <Grow key={game.id} in={true}
                            style={{transformOrigin: '0 0 0'}}
                            {...({timeout: 1000 + index * 50})}>
                        <a href={this.state.userId + '/detail/' + game.gameId}>


                          <img src={game.imageUrl}
                               className={classes.img}/>




                        </a>
                      </Grow>
                  ))
                }
              </Grid>

              <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  className={classes.card}

              >

                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"

                >

                  <Typography variant={"h3"} className={classes.helloWord}>
                    Featured Games
                  </Typography>
                </Grid>


                {
                  this.state.results.map((game, index) => (
                      <Grow key={game.id} in={true}
                            style={{transformOrigin: '0 0 0'}}
                            {...({timeout: 1000 + index * 50})}>
                        <a href={this.state.userId + '/detail/' + game.id}>
                        <img src={game.background_image}
                             className={classes.img}/>
                        </a>
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

