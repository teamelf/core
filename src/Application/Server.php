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

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Setup;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Monolog\Processor\IntrospectionProcessor;
use Monolog\Processor\PsrLogMessageProcessor;
use Monolog\Processor\WebProcessor;
use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\Routing\RouteCollection;
use TeamELF\Config\Config;
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
        // always save UTC in database
        date_default_timezone_set('UTC');

        $this->basePath = $basePath;

        if ($storagePath) {
            $this->storagePath = $storagePath;
        } else {
            $this->storagePath = $this->basePath . '/storage';
        }

        static::instance($this);

        $this->config = new Config($this->basePath);

        $this->dispatcher = new EventDispatcher();

        $this->router = new RouteCollection();

        $this->entityManager = EntityManager::create(
            $this->config->db,
            Setup::createAnnotationMetadataConfiguration([$this->basePath . '/src'])
        );

        $this->logger = new Logger('system');
        foreach (Logger::getLevels() as $logLevel) {
            if ($logLevel >= $this->config->debugLevel) {
                $filename = $this->storagePath . '/log/' . $logLevel . '-' . strtolower(Logger::getLevelName($logLevel)) . '.log';
                $this->logger->pushHandler(new StreamHandler($filename, $logLevel));
            }
        }
        $this->logger->pushProcessor(new PsrLogMessageProcessor());
        $this->logger->pushProcessor(new IntrospectionProcessor());
        $this->logger->pushProcessor(new WebProcessor());
        $this->logger->debug('App started');
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
