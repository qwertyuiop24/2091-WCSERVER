var express = require('express');
var app = express();

//require body-parser for this method
var bodyPraser = require('body-parser');

//Create application/x-www-form-urlencoded paser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/process_post', urlencodedParser, function (req, res) {
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});