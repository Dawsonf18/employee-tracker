CREATE DATABASE employees_db;

USE employees_db;

--Create department table 
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

--Create roles table 
CREATE TABLE roles (
title VARCHAR(30) NOT NULL
)