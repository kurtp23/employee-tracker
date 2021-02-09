DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (ID)
);

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employees (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT ,
PRIMARY KEY (id)
);

INSERT INTO departments (name)
VALUES ("Sales");

INSERT INTO departments (name)
VALUES ("Engineering");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Executive", 50000.00, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Lead Engineer", 100000.00, 2);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Kurt","Phillips", 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Troy","Phillips", 2, 1);


SELECT * FROM employee_db.departments;

SELECT * FROM employee_db.roles;

SELECT * FROM employee_db.employees;

SELECT * FROM employees WHERE role_id = 1;

SELECT * FROM ROLES
INNER JOIN employees
ON roles.id = employees.role_id;

SELECT * FROM ROLES
INNER JOIN employees
ON roles.id = employees.role_id WHERE role_id = 1;


SELECT * FROM ROLES
LEFT OUTER JOIN employees
ON roles.id = employees.role_id;