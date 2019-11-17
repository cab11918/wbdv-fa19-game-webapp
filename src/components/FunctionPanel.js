import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SteamLogo from '../images/Steam_icon_logo.svg';
import grey from '@material-ui/core/colors/grey';
import {withStyles} from "@material-ui/core/styles";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import SearchingPage from "../containers/SearchingPage";
import LandingPage from "../containers/LandingPage";
import Grid from "@material-ui/core/Grid";

const useStyles = theme => ({
  root: {
    flexGrow: 1,

  },



});

class FunctionPanel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {classes} = this.props;

    return (

        <div>

          <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
          >

          <Card className={classes.card}>
            <Link to="/searching">
            <CardActionArea>
              <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"/>

              <CardContent>
                <Typography gutterBottom variant="h2" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            </Link>


          </Card>





          </Grid>


        </div>

    )
  }

}

export default withStyles(useStyles)(FunctionPanel)

