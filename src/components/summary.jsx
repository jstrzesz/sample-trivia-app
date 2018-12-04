import React, { Component } from 'react';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Game Over</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}