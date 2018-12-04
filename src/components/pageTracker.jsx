import React from 'react';

const PageTracker = ({ prevQuestion, nextQuestion }) => {

  return (
    <div className="col-md-12 text-center">
    {/* <nav> */}
      <ul className="pagination">
        <li className="page-item">
          <button  className="page-link" 
              href="#" 
              onClick={prevQuestion} 
              >Previous</button>
        </li>
        <li className="page-item">
          <button  className="page-link" 
              href="#" 
              onClick={nextQuestion} 
              >Next</button>
        </li>
      </ul>
    {/* </nav>  */}
    </div>
  )
}

export default PageTracker;