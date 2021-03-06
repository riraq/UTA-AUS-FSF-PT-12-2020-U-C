DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10, 4) NULL,
  raw_usa DECIMAL(10, 4) NULL,
  raw_uk DECIMAL(10, 4) NULL,
  raw_europe DECIMAL(10, 4) NULL,
  raw_row DECIMAL(10, 4) NULL,
  PRIMARY KEY (position )
);
