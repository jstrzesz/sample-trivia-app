import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home.jsx';
import GameCreaction from '../src/components/gameCreation.jsx';
import Navigation from './components/navigation.jsx';
import GamePage from'./components/gamePage.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact={true} path="/" render={props => <Home {...props} />} />
            <Route path="/gameCreation" render={props => <GameCreaction {...props} />} />
            <Route path="/gamePage" render={props => <GamePage {...props} />} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}
