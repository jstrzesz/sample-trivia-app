import React, { Component } from 'react';
import QuestionCard from './questionCard.jsx';
import PageTracker from './pageTracker.jsx';

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: props.location.state.questions,
      question: props.location.state.questions[0],
      score: 0,
      selectedAnswer: '',
      correctAnswer: props.location.state.questions[0].correct_answer,
      result: '',
      savedUserAnswers: []
    }
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.goToPreviousQuestion = this.goToPreviousQuestion.bind(this);
    this.redirectToSummary = this.redirectToSummary.bind(this);
    this.setAnswerFalse = this.setAnswerFalse.bind(this);
    this.setAnswerTrue = this.setAnswerTrue.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  goToPreviousQuestion() {
    const newIndex = this.state.question.id - 1;
    if (this.state.score > 0) {
      this.setState({
        score: this.state.score - 1,
        result: '',
        question: this.state.questions[newIndex],
        correctAnswer: this.state.questions[newIndex].correct_answer
      })
    }
    this.setState({
      result: '',
      question: this.state.questions[newIndex],
      correctAnswer: this.state.questions[newIndex].correct_answer
    })
  }

  goToNextQuestion() {
    this.state.savedUserAnswers.push({
      userSelectedAnswer: this.state.selectedAnswer,
      correctAnswer: this.state.correctAnswer,
      questionId: this.state.question.id,
      result: this.state.result
    })
    const newIndex = this.state.question.id + 1;
    if (this.state.selectedAnswer === this.state.correctAnswer && newIndex < this.state.questions.length) {
      this.setState({ 
        score: this.state.score + 1,
        question: this.state.questions[newIndex],
        correctAnswer: this.state.questions[newIndex].correct_answer
      })
    } else if (this.state.selectedAnswer !== this.state.correctAnswer && newIndex < this.state.questions.length) {
      this.setState({
        question: this.state.questions[newIndex],
        correctAnswer: this.state.questions[newIndex].correct_answer
      })
    }
    if (newIndex === this.state.questions.length) {
      this.redirectToSummary();
    }
  }

  redirectToSummary() {
    this.state.savedUserAnswers.push({
      userSelectedAnswer: this.state.selectedAnswer,
      correctAnswer: this.state.correctAnswer,
      questionId: this.state.question.id,
      result: this.state.result
    })
    this.props.history.push('/gameOver', {
      score: this.state.score,
      savedAnswers: this.state.savedUserAnswers,
      questions: this.state.questions
    });
  }

  setAnswerTrue() {
    this.setState({ selectedAnswer: 'True' }, () => {
      if (this.state.selectedAnswer === this.state.correctAnswer) {
        this.setState({ result: 'Correct' })
      } else {
        this.setState({ result: 'Incorrect' })
      }
    })
    
  }

  setAnswerFalse() {
    this.setState({ selectedAnswer: 'False' }, () => {
      if (this.state.selectedAnswer === this.state.correctAnswer) {
        this.setState({ result: 'Correct' })
      } else {
        this.setState({ result: 'Incorrect' })
      }
    })
  }

  updateScore() {
    if (this.state.selectedAnswer === this.state.correctAnswer) {
      this.setState({ score: this.state.score + 1 })
    }
  }

  render() {
    const {question} = this.state;
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <QuestionCard gameQuestion={question} falseAnswer={this.setAnswerFalse} trueAnswer={this.setAnswerTrue}/>
          </div>
        </div>
        <div className="row">
            <PageTracker  prevQuestion={this.goToPreviousQuestion} 
                          nextQuestion={this.goToNextQuestion} 
                          index={this.state.question.id}
                          endGame={this.redirectToSummary}/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}