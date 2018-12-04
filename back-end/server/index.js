const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const db = require('../database/databaseHelpers.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/trivia', (req, res) => {
  db.triviaQuestions()
    .then(result => {
      const parsed = JSON.parse(result.body);
      res.send(parsed.results)
    })
})

app.listen(port, () => {
  console.log(`app listening on ${port}`)
})