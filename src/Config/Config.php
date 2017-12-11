<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Config;

use Dotenv\Dotenv;
use Exception;
use Monolog\Logger;

class Config
{
    /**
     * app's environment
     *
     * @var string
     */
    public $env;

    /**
     * @var integer
     */
    public $debugLevel;

    /**
     * app's timezone
     *
     * @var string
     */
    public $timezone;

    /**
     * base url of app
     *
     * @var string
     */
    public $baseUrl;

    /**
     * database params for database
     *
     * @var array
     */
    public $db;

    function __construct($basePath)
    {
        if (!file_exists($basePath . '/.env')) {
            throw new Exception('.env file not exists in '. $basePath . ' !');
        }
        $dotenv = new Dotenv($basePath);
        $dotenv->load();

        $this->env = env('ENV', 'development');

        $debugLevel = Logger::toMonologLevel(env('DEBUG_LEVEL', 'DEBUG'));
        if (is_string($debugLevel)) {
            $debugLevel = Logger::toMonologLevel('DEBUG');
        }
        $this->debugLevel = $debugLevel;

        $this->timezone = env('TIMEZONE', 'Asia/Shanghai');

        $this->baseUrl = env('BASE_URL', 'http://localhost');

        $this->selectSQLDriver(env('DB_CONNECTION', 'mysql'));
    }

    /**
     * select sql driver with DB_CONNECTION
     *
     * @param $connection
     * @throws Exception
     */
    protected function selectSQLDriver($connection)
    {
        switch ($connection) {
            case 'mysql':
                $this->db = [
                    'driver'   => 'pdo_mysql',
                    'host'     => env('DB_HOST', '127.0.0.1'),
                    'port'     => env('DB_PORT', '3306'),
                    'dbname'   => env('DB_DATABASE', 'teamelf'),
                    'user'     => env('DB_USERNAME', 'teamelf'),
                    'password' => env('DB_PASSWORD', 'teamelf')
                ];
                break;
            default:
                throw new Exception($connection . 'has not been supported yet! use [mysql] instead!');
        }
    }
}
