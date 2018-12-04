import React, { Component } from 'react';
import './questionCard.css';
import PageTracker from './pageTracker.jsx';
import Summary from './summary.jsx';

// export default class QuestionCard extends Component {
  const QuestionCard = ({ gameQuestion , falseAnswer, trueAnswer }) => {
    // console.log(falseAnswer, trueAnswer) ;
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
  //   this.trueAnswer = this.trueAnswer.bind(this);
  //   this.setAnswerFalse = this.setAnswerFalse.bind(this);
  //   this.updateScore = this.updateScore.bind(this);
  // }

  // nextQuestion() {
    // this.setState({ questionId: this.props.index++ })
  //   this.updateScore();
  // }



  // render() {
    const { id, question, category } = gameQuestion;
    // const updatedScore = updateScore;
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
            <button className="button-true btn-block" name="true" onClick={trueAnswer}>True</button>
            <button className="button-false btn-block" name="false" onClick={falseAnswer}>False</button>
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