import React from 'react';
import './App.css';
import GamePlatform from './containers/GamePlatform';
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


const store = createStore(DataTableReducer)

function App() {
  return (



  <Provider store={store}>
    <GamePlatform />
  </Provider>



  );
}

export default App;
