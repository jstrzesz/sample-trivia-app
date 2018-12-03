import React, { Component } from 'react';
import QuestionCard from './questionCard.jsx';

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      questions: props.location.state.questions
    }
    console.log(this.state.questions)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {this.state.questions.map((question, index) => {
              return (<QuestionCard key={index} question={question} index={index}/>)
            })}
            <div className="page-header">
              <h3>Welcome to Trivia Insanity! <small>A Trivia Game</small></h3>
            </div>
            <br />
            <div className="card bg-default">
              <h5 className="card-header">
                You will answer 10 insanely hard True or False questions.
              </h5>
              <div className="card-body">
                <p className="card-text">
                  You are not expected to pass.
                </p>
              </div>
              <div className="card-footer">
                Are you ready?
              </div>
            </div>
            <br />
            <button type="button" className="btn btn-md btn-info active btn-block" onClick={this.redirectToGamePage}>Begin</button>
          </div>
        </div>
      </div>
    )
  }
}