<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Application;

use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\Routing\RouteCollection;
use TeamELF\Event\RoutesHasBeenLoaded;
use TeamELF\Event\RoutesWillBeLoaded;

class Server extends AbstractApplication
{
    /**
     * Server constructor.
     * create a new application for web server
     *
     * @param string $basePath
     * @param string $storagePath
     */
    function __construct($basePath, $storagePath = null)
    {
        $this->basePath = $basePath;
        if ($storagePath) {
            $this->storagePath = $storagePath;
        } else {
            $this->storagePath = $this->basePath . '/storage';
        }
        static::instance($this);
        $this->dispatcher = new EventDispatcher();
        $this->router = new RouteCollection();
        $this->logger = new Logger('system');
        foreach (Logger::getLevels() as $logLevel) {
            $filename = $this->storagePath . '/log/' . $logLevel . '-' . strtolower(Logger::getLevelName($logLevel)) . '.log';
            $this->logger->pushHandler(new StreamHandler($filename, $logLevel));
        }
        $this->logger->info('App started');
    }

    /**
     * run all the services
     */
    public function run()
    {
        $this->registerRoutes();
    }

    /**
     * register routes
     */
    protected function registerRoutes()
    {
        $this->dispatch(new RoutesWillBeLoaded($this->router));
        $this->dispatch(new RoutesHasBeenLoaded($this->router));
    }
}
