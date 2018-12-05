import React, { Component } from 'react';

export default class QuestionList extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {}
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer() {
    if (this.props.result === 'Correct') {
       console.log(this.props.result, 'line 11')
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
            <div className="card text-center">
              <h6 className="card-header">Question {this.props.questionNumber}: {this.props.question}</h6>
              <div className="card-body">
                <p className="card-text">Your Answer: {this.props.userAnswer}</p>
                <p className="card-text">Correct Answer: {this.props.correctAnswer}</p>
              </div>
              <div className="card-footer">{this.props.result}</div>
            </div>
          </div>
        </div>       
      </div>
    )
  }
}