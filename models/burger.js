//import the ORM for functions to interact with the database
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },

  insertOne: function(column, value, callback) {
    orm.insertOne("burgers", column, value, function(res) {
      callback(res);
    });
  },
  updateOne: function(objColVal, condition, callback) {
    orm.updateOne("burgers", objColVal, condition, function(res) {
      callback(res);
    });
  }
};

//export the database functions for the controller
module.exports = burger;
