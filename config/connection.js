//set up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: process.env.PORT || 3306,
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "***REMOVED***",
  password: "***REMOVED***",
  database: "***REMOVED***"
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

