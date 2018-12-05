import React, { Component } from 'react';
import axios from 'axios';
import './home.css';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
    this.fixQuestions = this.fixQuestions.bind(this);
    this.redirectToGamePage = this.redirectToGamePage.bind(this);
  }

  componentDidMount() {
    axios.get('/trivia')
      .then(result => {
        console.log(result, 'line 19')
        this.setState({ questions: result.data })
        this.fixQuestions(this.state.questions)
        console.log(this.state.questions)
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
      question.question = question.question.replace(/&Aring;/g,'Å');
      question.correct_answer = question.correct_answer.replace(/&quot;/g, '"');
      question.correct_answer = question.correct_answer.replace(/`/g, '"');
      question.correct_answer = question.correct_answer.replace(/&#039;/g, '\'');
      question.correct_answer = question.correct_answer.replace(/&amp;/g, '&');
      question.correct_answer = question.correct_answer.replace(/&eacute;/g, 'é');
      question.correct_answer = question.correct_answer.replace(/&epsilon;/g, 'Ɛ');
      question.correct_answer = question.correct_answer.replace(/&Phi;/g, 'ϕ');
      question.correct_answer = question.correct_answer.replace(/&ocirc;/g, 'ô');
      question.correct_answer = question.correct_answer.replace(/&Aring;/g, 'Å');
      newArr.push(question);
    })
    return newArr;
  }

  redirectToGamePage() {
    this.props.history.push('/gamePage', { questions: this.state.questions });
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="page-header text-center">
              <h3>Welcome to Trivia Insanity!</h3>
            </div>
            <br />
            <div className="card bg-default text-center">
              <h5 className="card-header">
                You will answer 10 insanely hard True or False questions.
              </h5>
              <div className="card-body">
                <p className="card-text">
                  You are not expected to pass.
                </p>
              </div>
              <div className="card-footer">
                Are you ready?
              </div>
            </div>
            <br />
            <button type="button" className="btn btn-md btn-info active btn-block" onClick={this.redirectToGamePage}>Begin</button>
          </div>
        </div>
      </div>
    )
  }
}