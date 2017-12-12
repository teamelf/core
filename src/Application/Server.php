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

use TeamELF\Event\RoutesWillBeLoaded;
use TeamELF\Router\Router;

class Server extends AbstractApplication
{
    /**
     * @var Router
     */
    protected $router;

    function __construct($basePath, $storagePath = null)
    {
        parent::__construct($basePath, $storagePath);
        $this->router = new Router();
    }

    /**
     * register all services
     */
    protected function register(): void
    {
    }

    /**
     * boot all services
     */
    protected function boot(): void
    {
        $this->dispatch(new RoutesWillBeLoaded($this->router));
        $response = $this->router->getResponse();
        $response->send();
    }
}
