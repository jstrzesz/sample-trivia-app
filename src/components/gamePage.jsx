import React, { Component } from 'react';
import QuestionCard from './questionCard.jsx';
import LeftArrow from './leftArrow.jsx';
import RightArrow from './rightArrow.jsx';
import PageTracker from './pageTracker.jsx';

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      questions: props.location.state.questions,
      question: props.location.state.questions[0],
      score: 0,
      selectedAnswer: '',
      correctAnswer: props.location.state.questions[0].correct_answer
    }
    console.log(this.state.questions)
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.goToPreviousQuestion = this.goToPreviousQuestion.bind(this);
    this.redirectToSummary = this.redirectToSummary.bind(this);
    this.setAnswerFalse = this.setAnswerFalse.bind(this);
    this.setAnswerTrue = this.setAnswerTrue.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  goToPreviousQuestion() {
    const newIndex = this.state.question.id - 1;
    this.setState({ question: this.state.questions[newIndex], correctAnswer: this.state.questions[newIndex].correct_answer })
  }

  goToNextQuestion() {
    console.log('clicked')
    const newIndex = this.state.question.id + 1;
    this.setState({ question: this.state.questions[newIndex], correctAnswer: this.state.questions[newIndex].correct_answer })
    if (newIndex === this.state.questions.length) {
      this.redirectToSummary();
    }
  }

  redirectToSummary() {
    this.props.history.push('/gameOver');
  }

  setAnswerTrue() {
    this.setState({ selectedAnswer: 'True' }, () => {})
  }

  setAnswerFalse() {
    this.setState({ selectedAnswer: 'False' }, () => {})
  }

  updateScore() {
    if (this.state.selectedAnswer === this.state.correctAnswer) {
      this.setState({ score: this.state.score + 1 }, () => {})
    }
  }

  render() {
    const {questions, question} = this.state;
    const { setAnswerTrue } = this.setAnswerTrue;
    const { setAnswerFalse } = this.setAnswerFalse;
    console.log(setAnswerFalse, setAnswerTrue)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <QuestionCard gameQuestion={question} falseAnswer={this.setAnswerFalse} trueAnswer={this.setAnswerTrue}/>
          </div>
        </div>
        <div className="row">
        <div className="col-md-12">
            <PageTracker prevQuestion={this.goToPreviousQuestion} nextQuestion={this.goToNextQuestion} />
        </div>
        </div>
      </div>
    )
  }
}