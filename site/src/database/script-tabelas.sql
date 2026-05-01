/*Banco de dados provisorio*/

CREATE DATABASE siteFriends;
USE siteFriends;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(55) NOT NULL UNIQUE,
senha VARCHAR(45) NOT NULL
);
