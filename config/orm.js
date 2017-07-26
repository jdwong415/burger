var connection = require("./connection");

var orm = {
  selectAll: function(tableName, callback) {
    var sql = "SELECT * FROM ??";
    connection.query(sql, tableName, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  insertOne: function(tableName, vals, callback) {
    var sql = "INSERT INTO ?? SET ?";
    connection.query(sql, [tableName, vals], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  updateOne: function(tableName, vals, id, callback) {
    var sql = "UPDATE ?? SET ? WHERE ?"
    connection.query(sql, [tableName, vals, id], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  }
};

module.exports = orm;