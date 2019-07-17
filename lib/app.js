const express = require('express');
const app = express();

//from tutorial: set view engine ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
