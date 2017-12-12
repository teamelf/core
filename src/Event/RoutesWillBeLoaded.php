<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Event;

use TeamELF\Router\Router;

class RoutesWillBeLoaded extends AbstractEvent
{
    /**
     * @var Router
     */
    protected $router;

    /**
     * RoutesWillBeLoaded constructor.
     * routes will be loaded after this event
     *
     * @param Router $router
     */
    function __construct(Router $router)
    {
        parent::__construct();
        $this->router = $router;
    }

    /**
     * @return Router
     */
    public function getRouter()
    {
        return $this->router;
    }
}
