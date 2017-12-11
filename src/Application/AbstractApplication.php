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
use Exception;
use Monolog\Logger;
use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\Routing\RouteCollection;
use TeamELF\Config\Config;
use TeamELF\Event\AbstractEvent;
use TeamELF\Listener\AbstractListener;

abstract class AbstractApplication
{
    protected static $instance;

    /**
     * @var string
     */
    protected $basePath;

    /**
     * @var string
     */
    protected $storagePath;

    /**
     * @var Config
     */
    protected $config;

    /**
     * @var EventDispatcher
     */
    protected $dispatcher;

    /**
     * @var RouteCollection
     */
    protected $router;

    /**
     * @var EntityManager
     */
    protected $entityManager;

    /**
     * @var Logger
     */
    protected $logger;

    /**
     * application's interface maker
     *
     * @param $key
     * @return EntityManager|Logger|AbstractApplication|Config
     */
    public function make($key)
    {
        switch ($key) {
            case 'config': return $this->config;
            case 'em': return $this->entityManager;
            case 'log': return $this->logger;
            default: return $this;
        }
    }

    /**
     * run all the services
     */
    abstract public function run();

    /**
     * set the Application instance
     *
     * @param AbstractApplication $instance
     * @return static
     */
    public static function instance(AbstractApplication $instance)
    {
        static::$instance = $instance;
        return $instance;
    }

    /**
     * get the Application instance
     *
     * @return static
     * @throws Exception
     */
    public static function getInstance()
    {
        if (!static::$instance) {
            throw new Exception('app has not been instanced yet!');
        }
        return static::$instance;
    }

    /**
     * dispatch an event
     *
     * @param string|AbstractEvent $event
     * @return $this
     */
    protected function dispatch($event)
    {
        if ($event instanceof AbstractEvent) {
            $this->dispatcher->dispatch($event->getEventName(), $event);
        } else {
            $this->dispatcher->dispatch($event);
        }
        return $this;
    }

    /**
     * listen an event
     *
     * @param string|AbstractEvent $event
     * @param AbstractListener     $listener
     * @return $this
     */
    protected function listen($event, AbstractListener $listener)
    {
        if ($event instanceof AbstractEvent) {
            $this->dispatcher->addListener($event->getEventName(), [$listener, 'handler']);
        } else {
            $this->dispatcher->addListener($event, [$listener, 'handler']);
        }
        return $this;
    }
}
