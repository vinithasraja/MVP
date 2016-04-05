var fs = require('fs');
var path = require('path');
var mime = require('mime');
var express = require('express');
var bodyParser = require('body-parser');
var body = {
  results: []    
};

fs.exists('messages.txt', function(exists) {
  if (exists) {
    fs.readFile('messages.txt', function(error, data) {
      if (error) {
        console.log('Failed to load messages.txt', error);
      } else { 
        body = JSON.parse(data);
      }
    });
  } else {
    console.log('Failed to load messages.txt');
  }
});

app = express();
app.use(bodyParser.json());
app.use(express.static('client'));

var port = 3000;
var ip = '127.0.0.1';
app.listen(port, ip, function() {
  console.log('Listening at ' + ip + ':' + port);
});

app.all('/api/shorten', function(request, response, next) {
  response.header('access-control-allow-origin', '*');
  response.header('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.header('access-control-allow-headers', 'content-type, accept');
  response.header('access-control-max-age', 10);
  next();
});
app.get('/api/shorten', function(request, response) {
  if (request.method === 'OPTIONS') {
    response.send(200);
  }
  response.header();
  response.status(200).json(body);
});
app.post('/api/shorten', function(request, response) {
  body.results.push(request.body);
  response.status(201).end();
  console.log('Successfully received message');
  fs.writeFile('messages.txt', JSON.stringify(body), function(err) {
    if (err) {
      throw err;
    } else {
      console.log('Successfully saved messages: ');
    }
  });
});

module.exports = app;