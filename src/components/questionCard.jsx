import React, { Component } from 'react';
import './questionCard.css';
import PageTracker from './pageTracker.jsx';
import Summary from './summary.jsx';

// export default class QuestionCard extends Component {
  const QuestionCard = ({ gameQuestion }) => {
    console.log(gameQuestion) ;
  // constructor(props) {
  //   super(props);
  //   console.log(props);
  //   this.state = {
  //     questionId: props.index,
  //     currentCategory: props.question.category,
  //     currentQuestion: props.question.question,
  //     correctAnswer: props.question.correct_answer,
  //     selectedAnswer: '',
  //     score: 0
  //   }
  //   this.nextQuestion = this.nextQuestion.bind(this);
  //   this.setAnswerTrue = this.setAnswerTrue.bind(this);
  //   this.setAnswerFalse = this.setAnswerFalse.bind(this);
  //   this.updateScore = this.updateScore.bind(this);
  // }

  // nextQuestion() {
    // this.setState({ questionId: this.props.index++ })
  //   this.updateScore();
  // }

  // setAnswerTrue(e) {
  //   e.preventDefault();
  //   this.setState({ selectedAnswer: 'True' }, () => {})
  // }

  // setAnswerFalse(e) {
  //   e.preventDefault();
  //   this.setState({ selectedAnswer: 'False' }, () => {})
  // }

  // updateScore() {
  //   if (this.state.selectedAnswer === this.state.correctAnswer) {
  //     this.setState({ score: this.state.score + 1 }, () => {})
  //   }
  // }

  // render() {
    const { id, question, category } = gameQuestion;
    return (
      <div>
        <div className="page-header">
          <h3>Question {id + 1}</h3>
        </div >
        <br />
        <div className="card bg-default">
          <h5 className="card-header">{category}</h5>
          <div className="card-body">
            <p className="card-text">{question}</p>
          </div>
          <div className="card-footer">
            <button className="button-true btn-block" name="true" onClick={e => this.setAnswerTrue(e)}>True</button>
            <button className="button-false btn-block" name="false" onClick={e => this.setAnswerFalse(e)}>False</button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  // }
}

export default QuestionCard;