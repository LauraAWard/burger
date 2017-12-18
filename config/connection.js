//set up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: process.env.PORT || 3306,
  host: env("DB_HOST", "us-cdbr-iron-east-05.cleardb.net"),
  user: env("DB_USERNAME", "***REMOVED***"),
  password: env("DB_PASSWORD", "***REMOVED***"),
  database: env("DB_DATABASE", "***REMOVED***")
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

