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

use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\Routing\RouteCollection;
use TeamELF\Event\AbstractEvent;
use TeamELF\Listener\AbstractListener;

abstract class AbstractApplication
{
    protected static $instance;

    /**
     * @var EventDispatcher
     */
    protected $dispatcher;

    /**
     * @var RouteCollection
     */
    protected $router;

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
     */
    public static function getInstance()
    {
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
