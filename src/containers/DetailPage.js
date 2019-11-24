import React from 'react'
import SearchingPage from './SearchingPage';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { withRouter } from "react-router";

import NavBar from "../components/NavBar";
import FunctionPanel from "../components/FunctionPanel";

import GameTable from '../components/GameTable'
import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import LoginBox from "../components/LoginBox";
import GameDetails from "../components/GameDetails";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class DetailPage extends React.Component {



  constructor(props) {


    super(props);



  }



  render() {

    return (


<div>


  {  console.log(this.props.match.params.gameId) }


  <NavBar/>
  <Grid
      container
      direction="row"
      justify="center"

  >




    <Grid item xs={10}>






      <GameDetails gameId={this.props.match.params.gameId}/>

    </Grid>


  </Grid>

</div>






    )

  }

}

export default withRouter(DetailPage)
