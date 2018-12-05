import React, { Component } from 'react';
import QuestionList from './questionList.jsx';
import './summary.css';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    //set state values to props
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
    //call function to combines game questions array and saved user data array
    this.combineQuestionsAndAnswers();
  }

  //function to combine game questions array and saved user data array
  combineQuestionsAndAnswers() {
    //create new array to store combined data
    let combined = [];
    this.state.gameQuestions.forEach(question => {
      for (let i = 0; i < this.state.gameInfo.length; i++) {
        if (question.id === this.state.gameInfo[i].questionId) {
          //add user's selected answer to question object in questions array
          question.userAnswer = this.state.gameInfo[i].userSelectedAnswer;
          //add user's result of question to question object in questions array
          question.result = this.state.gameInfo[i].result;
        }
        if (!combined.includes(question)) {
          //add newly modified question object to combined array
          /*the bang operator is necessary as the nested for-loop inside the forEach loop creates too many objects
          this method adds only the first newly created object for each question
          */
          combined.push(question);
        }
      }
    })
    //set gameData value in state to equal new combined array
    return this.setState({ gameData: combined })
  }

  //function to redirect user to home page, no props need to be passed
  redirectToGameStart() {
    this.props.history.push('/')
  }

  render() {
    return ( 
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
        <br />
        <div className="row">
          <div className="col-md-12">
            <button type="button" className="btn btn-block" onClick={this.redirectToGameStart}>Play Again?</button>
          </div>
        </div>
        <br />  
      </div>  
    )
  }
}