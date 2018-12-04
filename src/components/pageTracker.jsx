import React from 'react';

const PageTracker = ({ prevQuestion, nextQuestion }) => {

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button  className="page-link" 
              href="#" 
              onClick={prevQuestion} 
              // disabled={this.state.question.id === 0}
              >Previous</button>
        </li>
        <li className="page-item">
          <button  className="page-link" 
              href="#" 
              onClick={nextQuestion} 
              // disabled={this.state.question.id === this.state.questions.length - 1}
              >Next</button>
        </li>
      </ul>
    </nav> 
  )
}

export default PageTracker;