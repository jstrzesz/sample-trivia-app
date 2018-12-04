import React, { Component } from 'react';

export default class PageTracker extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'pageTracker')
    this.state = {
      questions: props.info.questions,
      question: props.info.questions[0]
    }
    console.log(this.state, 'line 11')
    this.goToPreviousQuestion = this.goToPreviousQuestion.bind(this);
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
  }
  goToPreviousQuestion() {
    const newIndex = this.state.question.id - 1;
    this.setState({ question: this.state.questions[newIndex] }, () => {})
  }

  goToNextQuestion() {
    console.log('clicked')
    const newIndex = this.state.question.id + 1;
    this.setState({ question: this.state.questions[newIndex] }, () => {})
  }

  redirectToSummary() {
    this.props.history.push('/gameOver');
  }

  render() {
    return (
      <nav>
				<ul className="pagination">
					<li className="page-item">
            <button  className="page-link" 
                href="#" 
                onClick={this.goToPreviousQuestion} 
                disabled={this.state.question.id === 0}>Previous</button>
					</li>
					<li className="page-item">
            <button  className="page-link" 
                href="#" 
                onClick={this.goToNextQuestion} 
                disabled={this.state.question.id === this.state.questions.length - 1}>Next</button>
					</li>
				</ul>
			</nav> 
    )
  }
}