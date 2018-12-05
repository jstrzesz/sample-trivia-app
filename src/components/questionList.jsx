import React, { Component } from 'react';
import './questionList.css';

export default class QuestionList extends Component {

  render() {
    let resultStyle = { background: 'lightgreen' };
      if (this.props.result === 'Incorrect') {
        resultStyle = { background: '#DC143C' }
      }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card text-center">
              <h6 className="card-header">Question {this.props.questionNumber}: {this.props.question}</h6>
              <div className="card-body">
                <p className="card-text">Your Answer: {this.props.userAnswer}</p>
                <p className="card-text">Correct Answer: {this.props.correctAnswer}</p>
              </div>
              <div className="card-footer" style={resultStyle} >{this.props.result}</div>
            </div>
          </div>
        </div>       
      </div>
    )
  }
}