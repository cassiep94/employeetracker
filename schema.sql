DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE auctions(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid INT default 0,
  highest_bid INT default 0,
  PRIMARY KEY (id)
);
