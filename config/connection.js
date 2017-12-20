//set up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: process.env.PORT || 3306,
  host: "localhost",
  user: "root",
  password: "***REMOVED***",
  database: "burgers_db"
});

//connect
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export connection for ORM
module.exports = connection;

