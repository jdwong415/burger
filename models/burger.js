var orm = require("../config/orm");

var burger = {
  // Select all burgers
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  // Insert new burger
  insertOne: function(name, callback) {
    orm.insertOne("burgers", {burger_name: name}, function(res) {
      callback(res);
    });
  },
  // Update burger with devoured status by id
  updateOne: function(status, id, callback) {
    orm.updateOne("burgers", {devoured: status}, {id: id}, function(res) {
      callback(res);
    });
  },
  // Delete burger by devoured status
  delete: function(status, callback) {
    orm.delete("burgers", {devoured: status}, function(res) {
      callback(res);
    });
  },
  // Reset auto increment
  alter: function(callback) {
    orm.alter("burgers", function(res) {
      callback(res);
    });
  }
};

module.exports = burger;