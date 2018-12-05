import React, { Component } from 'react';
import QuestionList from './questionList.jsx';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      gameScore: props.location.state.score,
      gameInfo: props.location.state.savedAnswers,
      gameQuestions: props.location.state.questions,
      gameData: []
    }
    this.combineQuestionsAndAnswers = this.combineQuestionsAndAnswers.bind(this);
    this.redirectToGameStart = this.redirectToGameStart.bind(this);
  }

  componentDidMount() {
    this.combineQuestionsAndAnswers();
  }

  combineQuestionsAndAnswers() {
    let combined = [];
    this.state.gameQuestions.forEach(question => {
      for (let i = 0; i < this.state.gameInfo.length; i++) {
        if (question.id === this.state.gameInfo[i].questionId) {
          question.userAnswer = this.state.gameInfo[i].userSelectedAnswer;
          question.result = this.state.gameInfo[i].result;
        }
        if (!combined.includes(question)) {
          combined.push(question);
        }
      }
    })
    return this.setState({ gameData: combined })
  }

  redirectToGameStart() {
    this.props.history.push('/')
  }

  render() {
    return ( 
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Game Over</h2>
              <h3>Score: {this.props.location.state.score} / 10</h3>
              {this.state.gameData.map(question => {
                return (<QuestionList key={question.id}
                  questionNumber={question.id + 1}
                  question={question.question}
                  correctAnswer={question.correct_answer}
                  userAnswer={question.userAnswer}
                  result={question.result}
                />)
              })}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-block" onClick={this.redirectToGameStart}>Play Again?</button>
            </div>
          </div>
        </div>    
      </div>
    )
  }
}