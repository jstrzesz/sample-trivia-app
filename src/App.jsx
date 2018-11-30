import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" render={props => <Home {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
