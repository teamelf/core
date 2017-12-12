<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

if (! function_exists('app')) {
    /**
     * get the application instance
     *
     * @param $make
     * @return mixed|\Doctrine\ORM\EntityManager|\Monolog\Logger|\TeamELF\Application\AbstractApplication|\TeamELF\Config\Config
     */
    function app($make = null)
    {
        $app = \TeamELF\Application\AbstractApplication::getInstance();
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
        return $_ENV[strtoupper($key)] ?? $defaultValue;
    }
}

if (!function_exists('response')) {
    /**
     * make a new http response
     *
     * @param string $content
     * @param int    $status
     * @param array  $headers
     * @return \Symfony\Component\HttpFoundation\Response
     */
    function response($content = '', $status = 200, array $headers = [])
    {
        return new \Symfony\Component\HttpFoundation\Response($content, $status, $headers);
    }
}

if (!function_exists('abort')) {
    function abort($statusCode, $message = '')
    {
        $response = new \Symfony\Component\HttpFoundation\Response($message, $statusCode);
        $response->send();
        die();
    }
}
