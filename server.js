var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './app/public')));

let htmlRoutes = require("./app/routing/htmlRoutes")
htmlRoutes(app, path);

let apiRoutes = require("./app/routing/apiRoutes")
apiRoutes(app);

app.listen(PORT, function () {
    console.log('Friend Finder app is listening on PORT: ' + PORT);
});