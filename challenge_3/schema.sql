DROP DATABASE IF EXISTS usersdb;

CREATE DATABASE usersdb;

USE usersdb;

CREATE TABLE users (
    id SERIAL,
    username VARCHAR(30)
);