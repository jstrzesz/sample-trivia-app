import React, { Component } from 'react';

export default class QuestionCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3>Question {this.props.index + 1}</h3>
        </div >
        <br />
        <div className="card bg-default">
          <h5 className="card-header">{this.props.question.category}</h5>
          <div className="card-body">
            <p className="card-text">{this.props.question.question}</p>
          </div>
          <div className="card-footer">
            <button className="button-true">True</button>
            <button className="button-false">False</button>
          </div>
        </div>
      </div>
      // <br />
      // <button type="button" className="btn btn-md btn-info active btn-block" onClick={this.redirectToGamePage}>Begin</button>
    )
  }
}