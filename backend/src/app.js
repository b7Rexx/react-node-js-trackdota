const express = require('express');
const createError = require('http-errors');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'files')));


app.use('/api', routes);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.status(err.status || 400);
  res.send({code: err.status, error: err.message});
});

module.exports = app;
