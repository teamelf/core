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
    function env($key, $defaultValue = null)
    {
        return $_ENV[strtoupper($key)] ?? $defaultValue;
    }
}

if (!function_exists('response')) {
    /**
     * make a new http response
     *
     * @param mixed $content
     * @param int    $status
     * @param array  $headers
     * @return \Symfony\Component\HttpFoundation\Response
     */
    function response($content = null, $status = 200, array $headers = [])
    {
        switch (gettype($content)) {
            case 'NULL':
            case 'string':
                $r = $content;
                break;
            default:
                $r = json_encode($content);
                $headers['Content-Type'] = 'application/json';
        }
        return new \Symfony\Component\HttpFoundation\Response($r, $status, $headers);
    }
}

if (!function_exists('abort')) {
    /**
     * throw http errors
     *
     * @param int    $statusCode
     * @param string $message
     */
    function abort($statusCode, $message = '')
    {
        response(['message' => $message, 'code' => $statusCode], $statusCode)->send();
        die();
    }
}

if (!function_exists('view')) {
    /**
     * return a view rendered by template engine
     *
     * @param string $template
     * @param array  $data
     * @return string
     */
    function view($template, $data = [])
    {
        $template = str_replace('.', '/', $template);
        $template .= '.twig.php';
        $html = \TeamELF\View\ViewService::getEngine()
            ->render($template, $data);
        return response($html);
    }
}
