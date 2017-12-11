<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Doctrine\ORM\EntityManager;
use Monolog\Logger;
use TeamELF\Application\AbstractApplication;
use TeamELF\Config\Config;

if (! function_exists('app')) {
    /**
     * get the application instance
     *
     * @param $make
     * @return mixed|EntityManager|Logger|AbstractApplication|Config|AbstractApplication
     */
    function app($make)
    {
        $app = AbstractApplication::getInstance();
        if ($make) {
            return $app->make($make);
        } else {
            return $app;
        }
    }
}

if (!function_exists('env')) {
    /**
     * get environment variable
     *
     * @param string $key
     * @param string $defaultValue
     * @return string
     */
    function env($key, $defaultValue = '')
    {
        if (isset($_ENV[$key])) {
            return $_ENV[$key];
        } else {
            return $defaultValue;
        }
    }
}
