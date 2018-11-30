import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.serverTest = this.serverTest.bind(this);
  }

  serverTest() {
    fetch('/south_park')
    // axios.get('/south_park')
      .then(result => result.json())
      .then(name => this.setState({ name: name.name }))
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.serverTest}>test</button>
        <h2>{this.state.name}</h2>
      </div>
    )
  }
}