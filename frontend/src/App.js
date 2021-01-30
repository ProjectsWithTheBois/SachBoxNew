import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import BSGameLobby from './components/beachspeech/BSGameLobby';
import JoinGamePage from "./components/joinGamePage/joinGamePage.js"

import Header from '../src/components/Header/Header'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse:""};
  }

  callAPI() {
    fetch("http://localhost:8080/pr")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <Router>
        <Header></Header>
        <Switch> {/*you can change the endpoint name of your ticket to be more accurate to the page*/}
          <Route exact path="/">
            <p>{this.state.apiResponse}</p> 
          </Route>
          <Route path="/about">
            <p>Replace this with about page component</p>
          </Route>
          <Route path="/gameselect">
            <p>Replace this with game select component</p>
          </Route>
          <Route path="/joingame">
            <JoinGamePage/>
          </Route>
          <Route exact path="/beachspeech"> {/*may have to create sub routes depending on how we create the game*/}
            <BSGameLobby/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
