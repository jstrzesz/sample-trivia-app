import React, { Component } from 'react';

export default class QuestionList extends Component {

  checkAnswer() {
    if (this.props.result === 'Correct') {
      return <div className="card-footer" style={{background: 'green'}}>Correct</div>
    } else {
      return <div className="card-footer" style={{background: 'red'}}>Incorrct</div>
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <h5 className="card-header">Question {this.props.questionNumber}: {this.props.question}</h5>
              <div className="card-body">
                <p className="card-text">{this.props.userAnswer}</p>
                <p className="card-text">{this.props.correctAnswer}</p>
              </div>
              <div className="card-footer" ></div>
            </div>
          </div>
        </div>       
      </div>
    )
  }
}