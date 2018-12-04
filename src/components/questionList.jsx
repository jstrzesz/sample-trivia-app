import React, { Component } from 'react';

export default class QuestionList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <th>Question {this.props.questionNumber}</th>
        <th>{this.props.question}</th>
      </div>
      // <div className="container">
      //   <div className="row">
      //     <div className="col-md-12">
      //       <table class="table">
      //         <thead>
      //           <tr>
      //             <th>Question {this.props.QuestionNumber}</th>
      //             <th>{this.props.question}</th>
      //             {/* <th>Payment Taken</th>
      //             <th>Status</th> */}
      //           </tr>
      //         </thead>
      //         <tbody>
      //           <tr>
      //             <td>1</td>
      //             <td>TB - Monthly</td>
      //             {/* <td>01/04/2012</td>
      //             <td>Default</td> */}
      //           </tr>
      //         </tbody>
      //       </table>
      //       {/* <div className="card">
      //         <h5 className="card-header">Question {this.props.questionNumber}: {this.props.question}</h5>
      //         <div className="card-body">
      //           <p className="card-text">Card content</p>
      //         </div>
      //         <div className="card-footer">Card footer</div>
      //       </div> */}
      //     </div>
      //   </div>
      // </div>
    )
  }
}