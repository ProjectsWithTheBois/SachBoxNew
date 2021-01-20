import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../src/components/Header/Header'

function App() {
  return (
    <Router>
      <Header>
      <Switch> {/*you can change the endpoint name of your ticket to be more accurate to the page*/}
        <Route exact path="/">
          <p class="text-danger">Replace this with home page component</p> {/*Example of bootstrap, need import (line 8)*/}
        </Route>
        <Route path="/about">
          <p>Replace this with about page component</p>
        </Route>
        <Route path="/gameselect">
          <p>Replace this with game select component</p>
        </Route>
        <Route path="/joingame">
          <p>Replace this with join game component</p>
        </Route>
        <Route exact path="/beachspeech"> {/*may have to create sub routes depending on how we create the game*/}
          <p>Replace this with game lobby component</p>
        </Route>
      </Switch>
      </Header>
    </Router>
  );
}

export default App;
