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
import GameTable from '../components/GameTable'
import {Typography} from "@material-ui/core";
import LandingPage from "./LandingPage";
import LoginBox from "../components/LoginBox";

class LoginPage extends React.Component {

  constructor(props) {

    super(props);

  }

  render() {
    return (

        <div>

          <LoginBox/>




        </div>

    )

  }

}

export default LoginPage