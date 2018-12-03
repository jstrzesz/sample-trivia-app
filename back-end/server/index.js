const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const db = require('../database/databaseHelpers.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/south_park', (req, res) => {
  res.send({ name: 'Eric Cartman' })
})

app.get('/trivia', (req, res) => {
  db.triviaQuestions()
    .then(result => {
      const parsed = JSON.parse(result.body);
      console.log(parsed.results, 'line 17')
      res.send(parsed.results)
    })
})

app.listen(port, () => {
  console.log(`app listening on ${port}`)
})