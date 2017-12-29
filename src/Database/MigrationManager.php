<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Database;

use Doctrine\DBAL\Schema\Table;
use Doctrine\DBAL\Types\Type;
use TeamELF\Exception\Exception;

class MigrationManager
{
    /**
     * @var \Doctrine\DBAL\Schema\AbstractSchemaManager
     */
    protected $schemaManager;

    function __construct()
    {
        $this->schemaManager = app('em')->getConnection()->getSchemaManager();

        if (!$this->schemaManager->tablesExist(['migration'])) {
            $migrationsTable = new Table('migration');
            $migrationsTable->addColumn('id', Type::INTEGER)
                ->setAutoincrement(true);
            $migrationsTable->addColumn('created_at', TYPE::DATETIME)
                ->setNotnull(false);
            $migrationsTable->addColumn('version', TYPE::STRING);
            $migrationsTable->addColumn('extension', TYPE::STRING)
                ->setNotnull(false);
            $migrationsTable->setPrimaryKey(['id']);
            $this->schemaManager->createTable($migrationsTable);
        }
    }

    public function migrate($path, $extension = null)
    {
        $migrations = array_diff(
            $this->getMigrationList($path),
            $this->getMigratedList()
        );
        foreach ($migrations as $migration) {
            $this->up($path, $migration, $extension);
        }
    }

    public function revert($path, $extension = null)
    {
        $migrations = array_intersect(
            $this->getMigrationList($path),
            $this->getMigratedList()
        );
        foreach (array_reverse($migrations) as $migration) {
            $this->down($path, $migration, $extension);
        }
    }

    protected function up($path, $version, $extension = null)
    {
        $filename = $path . '/' . $version . '.up.sql';
        if (!file_exists($filename)) {
            throw new Exception($version . ' must have a .up.sql');
        }
        $sql = file_get_contents($filename);
        app('em')->getConnection()->exec($sql);
        app('em')->getConnection()
            ->prepare('INSERT INTO migration (version, extension) VALUES (?, ?)')
            ->execute([$version, $extension]);
    }

    protected function down($path, $version, $extension = null)
    {
        $filename = $path . '/' . $version . '.down.sql';
        if (!file_exists($filename)) {
            throw new Exception($version . ' must have a .down.sql');
        }
        $sql = file_get_contents($filename);
        app('em')->getConnection()->exec($sql);
        app('em')->getConnection()
            ->prepare('DELETE FROM migration WHERE version=? AND extension=?')
            ->execute([$version, $extension]);
    }

    protected function getMigrationList($path)
    {
        $list = [];
        foreach (scandir($path) as $file) {
            $matches = [];
            if (preg_match('/^(.*)\.(up|down)\.sql$/', $file, $matches)) {
                $list[] = $matches[1];
            }
        }
        $list = array_unique($list);
        sort($list);
        return $list;
    }

    protected function getMigratedList()
    {
        $sql = app('em')->getConnection()
            ->prepare('SELECT * FROM migration;');
        $sql->execute();
        $list = [];
        foreach ($sql->fetchAll() as $row) {
            $list[] = $row['version'];
        }
        return $list;
    }
}
