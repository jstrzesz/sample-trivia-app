import React, { Component } from 'react';

export default class QuestionList extends Component {

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
              <div className="card-footer"></div>
            </div>
          </div>
        </div>       
      </div>
    )
  }
}