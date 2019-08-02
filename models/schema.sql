DROP DATABASE IF EXISTS stance_db;
CREATE DATABASE stance_db;

USE stance_db;

DROP TABLE IF EXISTS candidates;
CREATE TABLE candidates (
  id INT NOT NULL AUTO_INCREMENT,
  cadidatename	VARCHAR(100) NULL,
  candidateimg	VARCHAR(100) NULL,
  twitterHandle VARCHAR(100) NULL,
  stillInRace	VARCHAR(100) NULL,
  stanceurl VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS candidates;
CREATE TABLE candidates (
  id INT NOT NULL AUTO_INCREMENT,
  cadidatename	VARCHAR(100) NULL,
  candidateimg	VARCHAR(100) NULL,
  twitterHandle VARCHAR(100) NULL,
  stillInRace	VARCHAR(100) NULL,
  stanceurl VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS voters;
CREATE TABLE voters (
    id INT NOT NULL AUTO_INCREMENT,
    votername VARCHAR(100) NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS quiz;
CREATE TABLE quiz (
    id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(100) NULL,
    issue VARCHAR(300) NULL,
    questiontext VARCHAR(300) NULL,
    answerone VARCHAR(300) NULL,
    answertwo VARCHAR(300) NULL,
    answerthree VARCHAR(300) NULL,
    answerfour VARCHAR(300) NULL,
    answerfive VARCHAR(300) NULL, 
    PRIMARY KEY (id) 
);

DROP TABLE IF EXISTS candidate_answers;
CREATE TABLE candidate_answers (
    id INT NOT NULL AUTO_INCREMENT,
    Ques1 INT(30),
    Ques2 INT(30),
    Ques3 INT(30),
    Ques4 INT(30),
    Ques5 INT(30),
    Ques6 INT(30),
    Ques7 INT(30),
    Ques8 INT(30),
    Ques9 INT(30),
    Ques10 INT(30),
    Ques11 INT(30),
    Ques12 INT(30),
    Ques13 INT(30),
    Ques14 INT(30),
    Ques15 INT(30),
    Ques16 INT(30),
    Ques17 INT(30),
    Ques18 INT(30),
    Ques19 INT(30),
    Ques20 INT(30),
    Ques21 INT(30),
    Ques22 INT(30),
    Ques23 INT(30),
    Ques24 INT(30),
    Ques25 INT(30),
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS voter_answers;
CREATE TABLE voter_answers (
    id INT NOT NULL AUTO_INCREMENT,
    Ques1 INT(30),
    Ques2 INT(30),
    Ques3 INT(30),
    Ques4 INT(30),
    Ques5 INT(30),
    Ques6 INT(30),
    Ques7 INT(30),
    Ques8 INT(30),
    Ques9 INT(30),
    Ques10 INT(30),
    Ques11 INT(30),
    Ques12 INT(30),
    Ques13 INT(30),
    Ques14 INT(30),
    Ques15 INT(30),
    Ques16 INT(30),
    Ques17 INT(30),
    Ques18 INT(30),
    Ques19 INT(30),
    Ques20 INT(30),
    Ques21 INT(30),
    Ques22 INT(30),
    Ques23 INT(30),
    Ques24 INT(30),
    Ques25 INT(30),
    PRIMARY KEY (id)
);
