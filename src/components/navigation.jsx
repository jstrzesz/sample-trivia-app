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
            {/* <navs className="navbar navbar-light bg-light">

              <button className="navbar-toggler" type="button" data-toggle="collapse">
                <span className="navbar-toggler-icon"></span>
              </button> <a className="navbar-brand" href="#">Trivia Game</a>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/gameCreation">Create Game</Link>
                  </li>
                </ul>
              </div>
            </nav> */}
          </div>
        </div>
      </div>
    )
  }
}