import React from 'react';
import './pageTracker.css';

const PageTracker = ({ prevQuestion, nextQuestion, endGame, index }) => {

  return (
    <div className="col-md-12">
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" 
                  id="prevButton"
                  disabled={index === 0}
                  onClick={prevQuestion}>Previous</button>
        </li>
        <li className="page-item">
          <button className="page-link"
                  disabled={index === 9}
                  onClick={nextQuestion}>Next</button>
        </li>
        <li className="page-item">
          <button className="page-link"
                  onClick={endGame}>End Game</button>
        </li>
      </ul>
    </div>
  )
}

export default PageTracker;