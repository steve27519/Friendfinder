var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express(); 
var PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

// Routes
require("./app/routing/api-routes.js")(app); 
require("./app/routing/html-routes.js")(app);

//Listen

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
