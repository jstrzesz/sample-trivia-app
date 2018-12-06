import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
//import necessary components for routing
import Home from './components/home/Home.jsx';
import GamePage from'./components/gamePage/gamePage.jsx';
import Summary from './components/summary/summary.jsx';

//base Component for App, also the router
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path="/" render={props => <Home {...props} />} />
            <Route path="/gamePage" render={props => <GamePage {...props} />} />
            <Route path="/gameOver" render={props => <Summary {...props} />} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}
