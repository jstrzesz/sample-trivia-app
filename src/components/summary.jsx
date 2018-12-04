import React, { Component } from 'react';
import QuestionList from './questionList.jsx';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      gameScore: props.location.state.score,
      gameInfo: props.location.state.savedAnswers,
      gameQuestions: props.location.state.questions
    }
  }
  render() {
    return ( 
      <div>
        <h2>Game Over</h2>
        <h3>Score: {this.props.location.state.score} / 10</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  {this.state.gameQuestions.map(question => {
                    return (<QuestionList key={question.id}
                      questionNumber={question.id + 1}
                      question={question.question}
                    // correctAnswer={question.correctAnswer}
                    />)
                  })}
                </thead>
                <tbody>
                  {}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}