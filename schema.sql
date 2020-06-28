DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE departments (
  department_id INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
  );
CREATE TABLE role ( 
role_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL(10,2),
department_id INT(10)
);
  
  CREATE TABLE employee (
  employee_id INT AUTO_INCREMENT not null PRIMARY KEY,
  first_name varchar(30) not null,
  last_name varchar (30) not null,
  role_id INT NOT NULL,
  manager_id INT
  
  )