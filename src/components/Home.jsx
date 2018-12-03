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
    this.redirectToGamePage = this.redirectToGamePage.bind(this);
  }

  componentDidMount() {
    axios.get('/trivia')
      .then(result => result.json())
      .then(questions => console.log(questions, 'line 19'))
  }
  // serverTest() {
  //   fetch('/south_park')
  //   // axios.get('/south_park')
  //     .then(result => result.json())
  //     .then(name => this.setState({ name: name.name }))
  // }
  redirectToGamePage() {
    this.props.history.push('/gamePage');
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="page-header">
              <h3>Welcome to Trivia Insanity! <small>A Trivia Game</small></h3>
            </div>
            <br />
            <div class="card bg-default">
              <h5 class="card-header">
                You will answer 10 insanely hard True or False questions.
              </h5>
              <div class="card-body">
                <p class="card-text">
                  You are not expected to pass.
                </p>
              </div>
              <div class="card-footer">
                Are you ready?
              </div>
            </div>
            <br />
            <button type="button" class="btn btn-md btn-info active btn-block" onClick={this.redirectToGamePage}>Begin</button>
          </div>
        </div>
      </div>
    )
  }
}