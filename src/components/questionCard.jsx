import React from 'react';
import './questionCard.css';

const QuestionCard = ({ gameQuestion , falseAnswer, trueAnswer }) => {
  const { id, question, category } = gameQuestion;
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
    </div>
  )
}

export default QuestionCard;