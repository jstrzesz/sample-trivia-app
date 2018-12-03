import React, { Component } from 'react';

export default class PageTracker extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'pageTracker')
    this.state = {
      questionId: props.index
    }
    this.previousQuestion = this.previousQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }
  nextQuestion() {
    if (this.state.questionId === 9) {
      this.redirectToSummary();
    }
    this.setState({ questionId: this.props.index++ })
  }

  previousQuestion() {
    if (this.state.questionId === 0) {
      return null;
    }
    this.setState({ questionId: this.props.index-- })
  }

  redirectToSummary() {
    this.props.history.push('/gameOver');
  }
  
  render() {
    return (
      <nav>
				<ul className="pagination">
					<li className="page-item">
						<a className="page-link" href="#">Previous</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#" onClick={this.nextQuestion}>Next</a>
					</li>
				</ul>
			</nav> 
    )
  }
}