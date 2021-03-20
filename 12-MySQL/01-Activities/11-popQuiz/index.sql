DROP DATABASE IF EXISTS popQuiz;

CREATE DATABASE popQuiz;

USE popQuiz;

CREATE TABLE popQuizTable (
  id INT NOT NULL AUTO_INCREMENT,
  someRow VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO popQuizTable (someRow)
VALUES ("rowOne"), ("rowTwo"), ("rowThree")