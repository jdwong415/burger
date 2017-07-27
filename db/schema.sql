CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(40) NOT NULL,
  devoured BOOLEAN DEFAULT 0,
  date TIMESTAMP,
  PRIMARY KEY (id)
);