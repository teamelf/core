CREATE TABLE permission (
  id VARCHAR(50) NOT NULL,
  role_id VARCHAR(50) DEFAULT NULL,
  permission VARCHAR(50) NOT NULL,
  created_at DATETIME DEFAULT NULL,
  updated_at DATETIME DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL,
  INDEX IDX_E04992AAD60322AC (role_id),
  PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

ALTER TABLE permission ADD CONSTRAINT FK_E04992AAD60322AC FOREIGN KEY (role_id) REFERENCES role (id);

INSERT INTO permission (id, role_id, permission)
VALUES
  (1, 1, 'config.update'),
  (2, 1, 'member.create'),
  (3, 1, 'member.role.update'),
  (4, 1, 'member.password.reset');
