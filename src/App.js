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
import DetailPage from "./containers/DetailPage";
import GameDetails from "./components/GameDetails";
import ProfilePage from "./containers/ProfilePage";
import RegisterPage from "./containers/RegisterPage";

const store = createStore(DataTableReducer)

function App() {
  return (

      <Router>
        <Provider store={store}>


          <Switch>
            <Route path={"/login"} component={LoginPage}></Route>
            <Route exact path={"/searching"} component={SearchingPage}></Route>
            <Route exact path={"/user/:userId/searching"} component={SearchingPage}></Route>
            <Route exact path={"/"} component={LandingPage}></Route>
            <Route exact path={"/user/:userId"} component={LandingPage}></Route>
            <Route exact path={"/detail/:gameId"} component={DetailPage}></Route>
            <Route exact path={"/user/:userId/detail/:gameId"} component={DetailPage}></Route>
            <Route path={"/profile/:userId"} component={ProfilePage}></Route>
            <Route path={"/register"} component={RegisterPage}></Route>
          </Switch>


        </Provider>
      </Router>

  );
}

export default App;



var customer = { name: "Foo" }
var card = { amount: 10, product: "Bar", unitprice: 100 }
var message = `Hello [CUSTOMERNAME], want to buy [CARDAMOUNT] [CARDPRODUCT] for a total of [TOTAL] bucks?`

console.log(card.amount)
