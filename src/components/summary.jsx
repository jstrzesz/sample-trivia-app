import React, { Component } from 'react';
import QuestionList from './questionList.jsx';
import axios from 'axios';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameScore: props.location.state.score,
      gameInfo: props.location.state.savedAnswers,
      gameQuestions: props.location.state.questions,
      gameData: [],
      questions: []
    }
    this.combineQuestionsAndAnswers = this.combineQuestionsAndAnswers.bind(this);
    this.redirectToGameStart = this.redirectToGameStart.bind(this);
    this.newGame = this.newGame.bind(this);
    this.fixQuestions = this.fixQuestions.bind(this);
  }

  componentDidMount() {
    this.combineQuestionsAndAnswers();
    this.newGame();
  }

  combineQuestionsAndAnswers() {
    let combined = [];
    this.state.gameQuestions.forEach(question => {
      for (let i = 0; i < this.state.gameInfo.length; i++) {
        question.userAnswer = this.state.gameInfo[i].userSelectedAnswer;
        if (!combined.includes(question)) {
          combined.push(question);
        }
      }
    })
    return this.setState({ gameData: combined })
  }

  newGame() {
    axios.get('/trivia')
      .then(result => {
        this.setState({ questions: result.data })
        this.fixQuestions(this.state.questions)
      })
  }

  fixQuestions(array) {
    const newArr = [];
    array.forEach((question, index) => {
      question.id = index;
      question.question = question.question.replace(/&quot;/g, '"');
      question.question = question.question.replace(/`/g, '"');
      question.question = question.question.replace(/&#039;/g, '\'');
      question.question = question.question.replace(/&amp;/g, '&');
      question.question = question.question.replace(/&eacute;/g, 'é');
      question.question = question.question.replace(/&ldquo;/g, '"');
      question.question = question.question.replace(/&rsquo;/g, '\'');
      question.question = question.question.replace(/&hellip;/g, '_____');
      question.question = question.question.replace(/&rdquo;/g, ':');
      question.question = question.question.replace(/&epsilon;/g, 'Ɛ');
      question.question = question.question.replace(/&Phi;/g, 'ϕ');
      question.question = question.question.replace(/&ocirc;/g, 'ô');
      question.correct_answer = question.correct_answer.replace(/&quot;/g, '"');
      question.correct_answer = question.correct_answer.replace(/`/g, '"');
      question.correct_answer = question.correct_answer.replace(/&#039;/g, '\'');
      question.correct_answer = question.correct_answer.replace(/&amp;/g, '&');
      question.correct_answer = question.correct_answer.replace(/&eacute;/g, 'é');
      question.correct_answer = question.correct_answer.replace(/&epsilon;/g, 'Ɛ');
      question.correct_answer = question.correct_answer.replace(/&Phi;/g, 'ϕ');
      question.correct_answer = question.correct_answer.replace(/&ocirc;/g, 'ô');
      newArr.push(question);
    })
    return newArr;
  }

  redirectToGameStart() {
    this.props.history.push('/gamePage', { questions: this.state.questions })
  }

  render() {
    return ( 
      <div>
        <h2>Game Over</h2>
        <h3>Score: {this.props.location.state.score} / 10</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {this.state.gameData.map(question => {
                return (<QuestionList key={question.id}
                  questionNumber={question.id + 1}
                  question={question.question}
                  correctAnswer={question.correct_answer}
                  userAnswer={question.userAnswer}
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