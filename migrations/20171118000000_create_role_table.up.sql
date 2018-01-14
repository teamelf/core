CREATE TABLE role (
  id VARCHAR(50) NOT NULL,
  name VARCHAR(20) NOT NULL,
  slug VARCHAR(20) NOT NULL,
  color VARCHAR(20) DEFAULT NULL,
  icon VARCHAR(20) DEFAULT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL,
  UNIQUE INDEX UNIQ_57698A6A5E237E06 (name),
  UNIQUE INDEX UNIQ_57698A6A989D9B62 (slug),
  PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

INSERT role (id, name, slug, color, icon)
VALUES
  (1, '负责人', 'director', '#ff5500', 'rocket'),
  (2, '核心成员', 'core', '#108ee9', 'api'),
  (3, '成员', 'member', '#2db7f5', 'bulb'),
  (4, '新人', 'trainee', '#87d068', 'user');
