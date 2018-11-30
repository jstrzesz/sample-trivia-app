import React, { Component } from 'react';
import axios from 'axios';
import './home.css';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    // this.serverTest = this.serverTest.bind(this);
    this.redirectToGameCreation = this.redirectToGameCreation.bind(this);
  }

  // serverTest() {
  //   fetch('/south_park')
  //   // axios.get('/south_park')
  //     .then(result => result.json())
  //     .then(name => this.setState({ name: name.name }))
  // }
  redirectToGameCreation() {
    this.props.history.push('/gameCreation');
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <button class="btn" onClick={this.redirectToGameCreation}>Create Game</button>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    )
  }
}