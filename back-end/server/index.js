const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/south_park', (req, res) => {
  res.send({ name: 'Eric Cartman' })
})

app.listen(port, () => {
  console.log(`app listening on ${port}`)
})