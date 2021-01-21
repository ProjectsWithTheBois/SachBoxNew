//This is the server 
var path = require('path');
var express = require('express');
var app = express();

let resources = path.join(__dirname, 'resources');

app.get('/image', function (req, res) {
  res.sendFile(resources + '/AlwaysWatching.png');
});

app.get('/', function (req, res) {
  res.send('Bye World!');
});

app.listen(4200, function () {
  console.log('Example app listening on port 4200!\n');
});
