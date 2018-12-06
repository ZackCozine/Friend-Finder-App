var friends = require("../data/friends");
const express = require("express");
var path = require('path');
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

var PORT = 3000;
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", (req, res) => {
        var userInput = req.body;
        var userResponses = userInput.scores;
        var matchName = '';
        var totalDifference = 10000;

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
            }
        }
        friends.push(userInput);
        res.json({ status: 'OK', matchName: matchName, });
    });
}

// app.listen(PORT, function () {
//     console.log("Listening on " + PORT);
// });