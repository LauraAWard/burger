
//include packages
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

//set port
var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the public directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

//import routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
