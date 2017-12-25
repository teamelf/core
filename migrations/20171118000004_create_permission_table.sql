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
  (2, 1, 'permission.list'),
  (3, 1, 'permission.update'),
  (4, 1, 'member.list'),
  (5, 1, 'member.item'),
  (6, 1, 'member.create'),
  (7, 1, 'member.update'),
  (8, 1, 'member.role.update'),
  (9, 1, 'member.password.reset'),
  (10, 1, 'role.create'),
  (11, 1, 'role.update'),
  (12, 1, 'role.delete'),
  (13, 1, 'mailer.list'),
  (14, 1, 'mailer.create'),
  (15, 1, 'mailer.update'),
  (16, 1, 'mailer.delete'),
  (17, 2, 'member.list'),
  (18, 2, 'member.item'),
  (19, 2, 'member.create'),
  (20, 2, 'member.update'),
  (21, 2, 'member.role.update'),
  (22, 2, 'member.password.reset'),
  (23, 3, 'member.list'),
  (24, 3, 'member.item'),
  (25, 4, 'member.list');
