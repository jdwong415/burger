var express = require('express');
var burger = require('../models/burger');

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    res.render("index", {burgers: data});
  });
});

router.post("/", function(req, res) {
  burger.insertOne(req.body.name, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var status;
  if (req.body.eat === "true") {
    status = 1;
  }
  else if (req.body.eat === "false") {
    status = 0;
  }
  burger.updateOne(status, req.params.id, function() {
    res.redirect("/");
  });
});


module.exports = router;