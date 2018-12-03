const request = require('request');

module.exports = {
  triviaQuestions: () => {
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