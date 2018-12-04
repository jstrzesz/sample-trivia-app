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
    // this.goToNextQuestion = this.goToNextQuestion.bind(this);
    // this.goToPreviousQuestion = this.goToPreviousQuestion.bind(this);
  }

  

  cardWidth() {
    return document.querySelector('.questionCard').clientWidth
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {this.state.questions.map((question, index) => {
              return (<QuestionCard key={index} question={question} index={index}/>)
            })}
          </div>
        </div>
        <div className="row">
        <div className="col-md-12">
            <PageTracker info={this.state} />
        </div>
        </div>
      </div>
    )
  }
}