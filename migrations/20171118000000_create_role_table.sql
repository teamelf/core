CREATE TABLE role (
  id VARCHAR(50) NOT NULL,
  name VARCHAR(20) NOT NULL,
  slug VARCHAR(20) NOT NULL,
  created_at DATETIME DEFAULT NULL,
  updated_at DATETIME DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL,
  UNIQUE INDEX UNIQ_57698A6A5E237E06 (name),
  UNIQUE INDEX UNIQ_57698A6A989D9B62 (slug),
  PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

INSERT role (id, name, slug)
VALUES
  (1, '负责人', 'director'),
  (2, '核心成员', 'core'),
  (3, '成员', 'member'),
  (4, '新人', 'trainee');
