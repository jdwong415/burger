var connection = require("./connection");

var orm = {
  // Select all from table
  selectAll: function(tableName, callback) {
    var sql = "SELECT * FROM ??";
    connection.query(sql, tableName, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  // Insert into table
  insertOne: function(tableName, vals, callback) {
    var sql = "INSERT INTO ?? SET ?";
    connection.query(sql, [tableName, vals], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  // Update table by id
  updateOne: function(tableName, vals, id, callback) {
    var sql = "UPDATE ?? SET ? WHERE ?";
    connection.query(sql, [tableName, vals, id], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  // Delete from table by condition
  delete: function(tableName, condition, callback) {
    var sql = "DELETE FROM ?? WHERE ?";
    connection.query(sql, [tableName, condition], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  // Reset auto increment
  alter: function(tableName, callback) {
    var sql = "ALTER TABLE ?? AUTO_INCREMENT = 1";
    connection.query(sql, [tableName], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  }
};

module.exports = orm;