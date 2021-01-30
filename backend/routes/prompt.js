var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function (req, res, next) {
    var randNum;
    const maxPlayers = 8;
    const promptsPerPlayer = 3;
    var prepPrompts = [];

    console.log("FOUND");

    try {
        var jsonprompt = fs.readFileSync('public/prompts.json');
        jsonprompt = JSON.parse(jsonprompt);
    } catch (err) {
        console.error(err);
    } 

    for(var i = 0; i < maxPlayers*promptsPerPlayer; i++){
        randNum = Math.floor(Math.random() * jsonprompt.length);
        prepPrompts.push(jsonprompt[randNum].title_prompt);
        jsonprompt.splice(randNum, 1);
    }

    res.send(prepPrompts);
});

module.exports = router;