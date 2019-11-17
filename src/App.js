import React from 'react';
import './App.css';
import LandingPage from './containers/LandingPage';
import {createStore} from "redux";
import {Provider} from "react-redux"
import DataTableReducer from './reducers/DataTableReducer'
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import SearchingPage from "./containers/SearchingPage";
import LoginPage from "./containers/LoginPage";


const store = createStore(DataTableReducer)

function App() {
  return (

      <Router>
        <Provider store={store}>


        <Switch>
          <LoginPage exact path='/' />
          <LandingPage exact path='/landing'/>
          <SearchingPage exact path='/searching'/>

        </Switch>


  </Provider>
      </Router>



  );
}

export default App;
