CREATE TABLE config (
  id VARCHAR(50) NOT NULL,
  `key` VARCHAR(20) NOT NULL,
  value VARCHAR(200) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL,
  PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

INSERT INTO config (id, `key`, value)
VALUES
  (1, 'name', 'TeamELF'),
  (2, 'description', 'Extensible team management'),
  (3, 'logo', '/static/logo.png'),
  (4, 'bg', '/static/bg.png');
