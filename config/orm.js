var connection = require("./connection");

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

var orm = {
  selectAll: function() {

  },
  insertOne: function() {

  },
  updateOne: function() {

  }
};

module.exports = orm;