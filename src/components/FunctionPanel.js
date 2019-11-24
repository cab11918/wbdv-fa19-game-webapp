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
import SearchBG from '../images/searchbg.png';
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
import Chip from "@material-ui/core/Chip";
import LabelIcon from "@material-ui/core/SvgIcon/SvgIcon";

const useStyles = theme => ({
  root: {
    flexGrow: 1,

  },

  card: {
    paddingTop: '150px',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),

  },
  menutext: {
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6),
  }

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

            <Grid item xs={2} className={classes.card}>

              <Card>
                <Link to="/searching">
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"

                        image='https://skolmarketing.com/wp-content/uploads/2017/12/seo-blog-2-1.png'
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h2" component="h2"
                                  className={classes.menutext}>
                        Search
                      </Typography>

                    </CardContent>
                  </CardActionArea>
                </Link>


              </Card>


            </Grid>

            <Grid item xs={2} className={classes.card}>

              <Card>
                <Link to="/profile">
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"

                        image='https://maxcdn.icons8.com/app/uploads/2018/12/UI-design-popular-trends-1200x900.png'

                    />

                    <CardContent>
                      <Typography gutterBottom variant="h2" component="h2"
                                  className={classes.menutext}>
                        Profile
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>


              </Card>


            </Grid>


          </Grid>


        </div>

    )
  }

}

export default withStyles(useStyles)(FunctionPanel)

