var port = 80;
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World\n');
});

app.get('/headers', function (req, res) {
  res.json(req.headers);
});

app.listen(port);