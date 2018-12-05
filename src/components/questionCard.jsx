import React from 'react';
import './questionCard.css';

const QuestionCard = ({ gameQuestion , falseAnswer, trueAnswer }) => {
  const { id, question, category } = gameQuestion;
  return (
    <div>
      <div className="page-header text-center">
        <h3>Question {id + 1}</h3>
      </div >
      <br />
      <div className="card bg-default text-center">
        <h5 className="card-header">{category}</h5>
        <div className="card-body">
          <p className="card-text">{question}</p>
        </div>
        <div className="card-footer">
          <button className="button-true btn-block" onClick={trueAnswer}>True</button>
          <button className="button-false btn-block" onClick={falseAnswer}>False</button>
        </div>
      </div>
      <br />
    </div>
  )
}

export default QuestionCard;