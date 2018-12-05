const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const db = require('../database/databaseHelpers.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//get call to database
app.get('/trivia', (req, res) => {
  //use of helper function in promise form
  db.triviaQuestions()
    .then(result => {
      //parsing the stringified JSON
      const parsed = JSON.parse(result.body);
      //send results to front-end
      res.send(parsed.results)
    })
})

app.listen(port, () => {
  console.log(`app listening on ${port}`)
})