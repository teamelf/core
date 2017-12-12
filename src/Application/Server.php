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

use TeamELF\Event\RoutesHasBeenLoaded;
use TeamELF\Event\RoutesWillBeLoaded;
use TeamELF\Router\Router;

class Server extends AbstractApplication
{
    /**
     * @var Router
     */
    protected $router;

    /**
     * register all services
     */
    protected function register(): void
    {
        $this->registerRoutes();
    }

    /**
     * boot all services
     */
    protected function boot(): void
    {
        $response = $this->router->getResponse();
        $response->send();
    }

    /**
     * register routes
     */
    protected function registerRoutes()
    {
        $this->router = new Router();
        $this->dispatch(new RoutesWillBeLoaded($this->router));
        $this->dispatch(new RoutesHasBeenLoaded($this->router));
    }
}
