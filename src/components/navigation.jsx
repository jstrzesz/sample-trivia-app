import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

export default class Navigation extends Component {
  render() {
  return (
    <div className= "container" >
      <div className="row">
        <div className="col-md-12">
          <ul className="nav">
            <li className="nav-link">
              <Link to="/">Home</Link></li>
            <li className="nav-link">
              <Link to="/gamePage">Game</Link></li>
          </ul>
        </div>
      </div>
    </div>
    )
  }
}