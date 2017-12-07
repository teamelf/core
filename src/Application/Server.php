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
use TeamELF\Event\RoutesHasBeenLoaded;
use TeamELF\Event\RoutesWillBeLoaded;

class Server extends AbstractApplication
{
    /**
     * Server constructor.
     * create a new application for web server
     */
    function __construct()
    {
        static::instance($this);
        $this->dispatcher = new EventDispatcher();
        $this->router = new RouteCollection();
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
