//import npm package
var express = require("express");

var router = express.Router();

//import the model for database functions
var burger = require("../models/burger.js");

//create routes
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbarsObject = {
      burgers: data
    };
    console.log(hbarsObject);
    res.render("index", hbarsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    "burger_name", 
    req.body.burger_name, 
    function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      //if no rows changed then ID must not exist, return 404
      return res.status(404).end();
    } else {
      //return success
      res.status(200).end();
    }
  });
});


//export routes
module.exports = router;