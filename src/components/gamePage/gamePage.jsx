import React, { Component } from 'react';
//import questionCard file to display game question and options on game Page
import QuestionCard from '../questionCard/questionCard.jsx';
//import pageTracker file to handle routing through questions
import PageTracker from '../pageTracker/pageTracker.jsx';

//base component for Game Page
export default class GamePage extends Component {
  constructor(props) {
    super(props);
    //assign props to state
    //question initialized as first question in questions array
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

  //function to return to last question
  goToPreviousQuestion() {
    //create a new Index to display previous question
    const newIndex = this.state.question.id - 1;
    if (this.state.score > 0) {
      //subtract 1 from score upon clicking Previous button, point may be restored when clicking Next
      this.setState({
        score: this.state.score - 1,
        result: '',
        question: this.state.questions[newIndex],
        correctAnswer: this.state.questions[newIndex].correct_answer
      })
    }
    //pass along result for summary
    this.setState({
      result: '',
      question: this.state.questions[newIndex],
      correctAnswer: this.state.questions[newIndex].correct_answer
    })
  }

  //function to advance to next question
  goToNextQuestion() {
    //add specific data to savedUserAnswers array for summary
    this.state.savedUserAnswers.push({
      userSelectedAnswer: this.state.selectedAnswer,
      correctAnswer: this.state.correctAnswer,
      questionId: this.state.question.id,
      result: this.state.result
    })
    //create a new Index to display next question
    const newIndex = this.state.question.id + 1;
    if (this.state.selectedAnswer === this.state.correctAnswer && newIndex < this.state.questions.length) {
      //add a point upon clicking next if selected answer matches correct answer and newIndex position exists
      this.setState({ 
        score: this.state.score + 1,
        question: this.state.questions[newIndex],
        correctAnswer: this.state.questions[newIndex].correct_answer
      })
    } else if (this.state.selectedAnswer !== this.state.correctAnswer && newIndex < this.state.questions.length) {
      //do not add point if selected answer does not match correct answer
      this.setState({
        question: this.state.questions[newIndex],
        correctAnswer: this.state.questions[newIndex].correct_answer
      })
    }
  }

  //function to redirect user to summary page
  redirectToSummary() {
    //add specific data to savedUserAnswers array, needed for question 10 as Next button is disabled
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
    //add score, savedUserAnswers, and questions to props
  }

  //function to set selected answer to true and result
  setAnswerTrue() {
    //set selectedAnswer to equal 'True'
    this.setState({ selectedAnswer: 'True' }, () => {
      if (this.state.selectedAnswer === this.state.correctAnswer) {
        //set result to equal 'Correct'
        this.setState({ result: 'Correct' })
      } else {
        //set result to equal 'Incorrect'
        this.setState({ result: 'Incorrect' })
      }
    })
    
  }

  //function to set selected answer to false and result
  setAnswerFalse() {
    //set selectedAnswer to equal 'False'
    this.setState({ selectedAnswer: 'False' }, () => {
      if (this.state.selectedAnswer === this.state.correctAnswer) {
        //set result to equal 'Correct'
        this.setState({ result: 'Correct' })
      } else {
        //set result to equal 'Incorrect'
        this.setState({ result: 'Incorrect' })
      }
    })
  }

  //function to update score in state
  updateScore() {
    if (this.state.selectedAnswer === this.state.correctAnswer) {
      //add one point to score
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