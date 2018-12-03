import React, { Component } from 'react';

export default class GameCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Number Of Players</th>
                  <th>Category</th>
                  <th>Difficulty</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BarackTheRockObama</td>
                  <td>1</td>
                  <td>Entertainment: Video Games</td>
                  <td>Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}