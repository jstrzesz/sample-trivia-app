import React, { Component } from 'react';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.location.state.score} / 10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}