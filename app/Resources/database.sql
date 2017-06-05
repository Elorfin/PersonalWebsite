CREATE TABLE about (
  id              INT          AUTO_INCREMENT,
  first_name      VARCHAR(100) NOT NULL,
  last_name       VARCHAR(100) NOT NULL,
  birth_date      DATE         DEFAULT NULL,
  email           VARCHAR(100) NOT NULL,
  address_street  VARCHAR(100) DEFAULT NULL,
  address_zipcode VARCHAR(10)  DEFAULT NULL,
  address_city    VARCHAR(100) DEFAULT NULL,
  address_country VARCHAR(100) DEFAULT NULL,

  -- social networks

  PRIMARY KEY (id)
);

CREATE TABLE competency_area (
  id   INT          AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE competency (
  id                 INT          AUTO_INCREMENT,
  name               VARCHAR(100) NOT NULL,
  icon               VARCHAR(20)  DEFAULT NULL,
  level              SMALLINT     DEFAULT 0,
  description        TEXT         DEFAULT NULL,
  competency_area_id INT          NOT NULL,

  -- jobs
  -- studies
  -- projects

  PRIMARY KEY (id),
  FOREIGN KEY competency(competency_area_id) REFERENCES competency_area(id)
);

CREATE TABLE picture_album (
  id          INT          AUTO_INCREMENT,
  name        VARCHAR(100) NOT NULL,
  thumbnail   VARCHAR(100) NOT NULL,
  description TEXT         DEFAULT NULL,

-- projects

  PRIMARY KEY (id)
);

CREATE TABLE picture (
  id          INT          AUTO_INCREMENT,
  name        VARCHAR(100) NOT NULL,

  PRIMARY KEY (id)
);

-- N job     <-> N competency
-- N study   <-> N competency
-- N project <-> N competency
-- 1 job     <-> N project
-- 1 project <-> N pictures album

CREATE TABLE project (
  id          INT          AUTO_INCREMENT,
  name        VARCHAR(100) NOT NULL,
  website     VARCHAR(100) DEFAULT NULL,
  repository  VARCHAR(100) DEFAULT NULL,
  description TEXT         DEFAULT NULL,

  -- competencies
  -- jobs
  -- pictures album

  PRIMARY KEY (id)
);

CREATE TABLE job (
  id          INT          AUTO_INCREMENT,
  name        VARCHAR(100) NOT NULL,
  description TEXT         DEFAULT NULL,

-- competencies
-- projects
-- functions

  PRIMARY KEY (id)
);

CREATE TABLE study (
  id          INT          AUTO_INCREMENT,
  name        VARCHAR(100) NOT NULL,
  description TEXT         DEFAULT NULL,

  -- competencies

  PRIMARY KEY (id)
);

CREATE TABLE diploma (
  id          INT          AUTO_INCREMENT,
  name        VARCHAR(100) NOT NULL,

  PRIMARY KEY (id)
);