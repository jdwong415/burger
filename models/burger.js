var orm = require("../config/orm");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  insertOne: function(name, callback) {
    orm.insertOne("burgers", {burger_name: name}, function(res) {
      callback(res);
    });
  },
  updateOne: function(status, id, callback) {
    orm.updateOne("burgers", {devoured: status}, {id: id}, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;