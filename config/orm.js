//import MySQL connection
var connection = require("../config/connection.js");

//function to convert object key/value pairs to SQL syntax
function objectToSql(obj) {
  var tempArray = [];

  //loop through the keys and push the key/value as a string int arr
  for (var key in obj) {
    var value = obj[key];
    //check to skip hidden properties
    if (Object.hasOwnProperty.call(obj, key)) {
      // if string with spaces, add quotes
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      tempArray.push(key + "=" + value);
    }
  }

  //translate array of strings to a single comma-separated string
  return tempArray.toString();
}

//object containing functions for SQL queries
var orm = {
  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM " + table + ";";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  insertOne: function(table, column, value, callback) {
    var queryString = "INSERT INTO " + table + " (" + column.toString() + ") VALUES (?) ";

    console.log(queryString);

    connection.query(queryString, value, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
  updateOne: function(table, objColVal, condition, callback) {
    var queryString = "UPDATE " + table + " SET " + objectToSql(objColVal) + " WHERE " + condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  }
};

//export the orm object for the model
module.exports = orm;