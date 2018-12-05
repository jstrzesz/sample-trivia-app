const request = require('request');

module.exports = {
  //helper function to make api call to trivia api
  triviaQuestions: () => {
    //promise used for synchronous calls
    return new Promise((resolve, reject) => {
      const options = {
        method: 'GET',
        url: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
      }
      request(options, (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject('request failed');
        }
      })
    })
  }
}