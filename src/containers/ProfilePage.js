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
import ProfileForm from "../components/ProfileForm";

class ProfilePage extends React.Component {

  constructor(props) {

    super(props);

  }

  render() {
    return (

        <div>
<NavBar/>
<ProfileForm userId={this.props.match.params.userId}/>

        </div>

    )

  }

}

export default ProfilePage
