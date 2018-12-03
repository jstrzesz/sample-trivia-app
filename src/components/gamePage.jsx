import React, { Component } from 'react';
import QuestionCard from './questionCard.jsx';

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      questions: props.location.state.questions,
      score: 0
    }
    console.log(this.state.questions)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {this.state.questions.map((question, index) => {
              return (<QuestionCard key={index} question={question} index={index}/>)
            })}
          </div>
        </div>
      </div>
    )
  }
}