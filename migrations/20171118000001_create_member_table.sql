CREATE TABLE member (
  id VARCHAR(50) NOT NULL,
  role_id VARCHAR(50) DEFAULT NULL,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(100) DEFAULT NULL,
  email VARCHAR(100) NOT NULL,
  number VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  gender TINYINT(1) NOT NULL,
  created_at DATETIME DEFAULT NULL,
  updated_at DATETIME DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL,
  UNIQUE INDEX UNIQ_70E4FA78F85E0677 (username),
  UNIQUE INDEX UNIQ_70E4FA7896901F54 (number),
  INDEX IDX_70E4FA78D60322AC (role_id),
  PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

ALTER TABLE member ADD CONSTRAINT FK_70E4FA78D60322AC FOREIGN KEY (role_id) REFERENCES role (id);

INSERT INTO member (id, role_id, username, password, email, number, name, gender)
VALUES
  (1, 1, 'admin', '$2y$10$Hoy2nOtj0vaL6AT9ufY.QeaoH4jujpZ1EBGbZXyAgRV7d54xKudC2', 'admin@teamelf.com', 'teamelf', 'administrator', 0);
