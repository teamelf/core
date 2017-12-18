CREATE TABLE permission (
  id VARCHAR(50) NOT NULL,
  role_id VARCHAR(50) DEFAULT NULL,
  member_id VARCHAR(50) DEFAULT NULL,
  permission VARCHAR(50) NOT NULL,
  created_at DATETIME DEFAULT NULL,
  updated_at DATETIME DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL,
  UNIQUE INDEX UNIQ_E04992AAE04992AA (permission),
  INDEX IDX_E04992AAD60322AC (role_id),
  INDEX IDX_E04992AA7597D3FE (member_id),
  PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

ALTER TABLE permission ADD CONSTRAINT FK_E04992AAD60322AC FOREIGN KEY (role_id) REFERENCES role (id);

ALTER TABLE permission ADD CONSTRAINT FK_E04992AA7597D3FE FOREIGN KEY (member_id) REFERENCES member (id);

INSERT INTO permission (id, role_id, member_id, permission)
VALUES
  (1, 1, NULL, 'config.update'),
  (2, 1, NULL, 'member.create'),
  (3, 1, NULL, 'member.role.update'),
  (4, 1, NULL, 'member.password.reset');
