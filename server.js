//This is the server 
const { json } = require('express');
var express = require('express');
const fs = require('fs');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/pr', function (req, res) {
  var randNum;
  const maxPlayers = 8;
  const promptsPerPlayer = 3;
  var prepPrompts = [];
    try {
      var jsonprompt = fs.readFileSync('prompts.json');
      jsonprompt = JSON.parse(jsonprompt);
    } 
    catch (err) {
      console.error(err);
    } 
  for(var i = 0; i < maxPlayers*promptsPerPlayer; i++){
    randNum = Math.floor(Math.random() * jsonprompt.length);
    prepPrompts.push(jsonprompt[randNum].title_prompt);
    jsonprompt.splice(randNum, 1);
  }
  res.send(prepPrompts);
});

app.listen(4200, function () {
  console.log('Example app listening on port 4200!\n');
});
