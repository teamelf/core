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
  (101, 1, 'config.update'),
  (102, 1, 'permission.list'),
  (103, 1, 'permission.update'),
  (104, 1, 'member.list'),
  (105, 1, 'member.item'),
  (106, 1, 'member.create'),
  (107, 1, 'member.update'),
  (108, 1, 'member.role.update'),
  (109, 1, 'member.password.reset'),
  (110, 1, 'role.create'),
  (111, 1, 'role.update'),
  (112, 1, 'role.delete'),
  (117, 1, 'extension.list'),
  (118, 1, 'extension.activate'),
  (201, 2, 'member.list'),
  (202, 2, 'member.item'),
  (203, 2, 'member.create'),
  (204, 2, 'member.update'),
  (205, 2, 'member.role.update'),
  (206, 2, 'member.password.reset'),
  (301, 3, 'member.list'),
  (302, 3, 'member.item'),
  (401, 4, 'member.list');
