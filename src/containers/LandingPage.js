import React from 'react'
import SearchingPage from './SearchingPage';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import NavBar from "../components/NavBar";
import FunctionPanel from "../components/FunctionPanel";

import GameTable from '../components/GameTable'
import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LoginBox from "../components/LoginBox";

class LandingPage extends React.Component {

  constructor(props) {

    super(props);

  }

  render() {
    return (


<div>

  <NavBar/>
  <FunctionPanel/>
</div>



    )

  }

}

export default LandingPage