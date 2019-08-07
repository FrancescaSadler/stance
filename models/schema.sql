DROP DATABASE IF EXISTS stance_db;
CREATE DATABASE stance_db;

USE stance_db;

DROP TABLE IF EXISTS candidates;
CREATE TABLE candidates (
  id INT NOT NULL AUTO_INCREMENT,
  candidatename	VARCHAR(100) NULL,
  scores INT(6),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS voters;
CREATE TABLE voters (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(100) NULL,
    lastname INT(5),
    email VARCHAR(50),
    password VARCHAR(8), 
    -- we need to talk about encrypting password data perhaps with https://docs.microsoft.com/en-us/sql/t-sql/functions/encryptbypassphrase-transact-sql?view=sql-server-2017
    candidate_match1 VARCHAR(100),
    candidate_match2 VARCHAR(100),
    candidate_match3 VARCHAR(100),
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS tweets;
CREATE TABLE tweets (
    id INT NOT NULL AUTO_INCREMENT,
    candidate_id VARCHAR(100) NULL,
    text VARCHAR(140) NULL, 
    PRIMARY KEY (id) 
);