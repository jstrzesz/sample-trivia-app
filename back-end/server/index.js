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
    .then(result => console.log(result, 'line 17'))
})

app.listen(port, () => {
  console.log(`app listening on ${port}`)
})