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
      index: 0,
      translateValue: 0
    }
    console.log(this.state.questions)
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.goToPreviousQuestion = this.goToPreviousQuestion.bind(this);
    this.redirectToSummary = this.redirectToSummary.bind(this);
  }

  goToPreviousQuestion() {
    const newIndex = this.state.question.id - 1;
    this.setState({ question: this.state.questions[newIndex] }, () => { })
  }

  goToNextQuestion() {
    console.log('clicked')
    const newIndex = this.state.question.id + 1;
    this.setState({ question: this.state.questions[newIndex] }, () => { })
    if (newIndex === this.state.questions.length) {
      this.redirectToSummary();
    }
  }

  redirectToSummary() {
    this.props.history.push('/gameOver');
  }

  cardWidth() {
    return document.querySelector('.questionCard').clientWidth
  }

  render() {
    const {questions, question} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <QuestionCard gameQuestion={question} />
            {/* {this.state.questions.map((question, index) => {
              return (<QuestionCard key={index} question={question} index={index}/>)
            })} */}
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