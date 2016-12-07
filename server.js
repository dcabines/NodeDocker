var port = 80;
var express = require('express');
var cookie = require('cookie');
var logger = require('./logger');
var app = express();

app.use(logger);

app.get('/', function (req, res) {
  res.send('Hello World\n');
});

app.get('/headers', function (req, res) {
  res.json(req.headers);
});

app.get('/cookies', function (req, res) {
  var cookies = cookie.parse(req.headers.cookie)
  res.json(cookies);
});

app.get('/address', function (req, res) {
  res.json(req.connection.address());
});

app.listen(port);