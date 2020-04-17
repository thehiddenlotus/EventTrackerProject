-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gratefuldb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `gratefuldb` ;

-- -----------------------------------------------------
-- Schema gratefuldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gratefuldb` DEFAULT CHARACTER SET utf8 ;
USE `gratefuldb` ;

-- -----------------------------------------------------
-- Table `entry`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `entry` ;

CREATE TABLE IF NOT EXISTS `entry` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `date` DATE NULL,
  `mood` INT NULL,
  `gratitude` VARCHAR(1500) NULL,
  `note` VARCHAR(3000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `date_created` DATETIME NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `achievement`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `achievement` ;

CREATE TABLE IF NOT EXISTS `achievement` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `value` INT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `goal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `goal` ;

CREATE TABLE IF NOT EXISTS `goal` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `deadline` DATE NULL,
  `date_created` DATE NULL,
  `date_completed` DATE NULL,
  `complete` TINYINT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_goal_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_goal_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_achievements`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_achievements` ;

CREATE TABLE IF NOT EXISTS `user_achievements` (
  `id` VARCHAR(45) NOT NULL,
  `user_id` INT NOT NULL,
  `achievement_id` INT NOT NULL,
  `date_unlocked` DATE NULL,
  PRIMARY KEY (`id`, `user_id`, `achievement_id`),
  INDEX `fk_user_achievements_user1_idx` (`user_id` ASC),
  INDEX `fk_user_achievements_achievement1_idx` (`achievement_id` ASC),
  CONSTRAINT `fk_user_achievements_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_achievements_achievement1`
    FOREIGN KEY (`achievement_id`)
    REFERENCES `achievement` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS user@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'user'@'localhost' IDENTIFIED BY 'user';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `entry`
-- -----------------------------------------------------
START TRANSACTION;
USE `gratefuldb`;
INSERT INTO `entry` (`id`, `title`, `date`, `mood`, `gratitude`, `note`) VALUES (1, 'First', '2020-10-10', 10, 'i am grateful for my health and capable body', 'first entry and im feeling good');

COMMIT;

