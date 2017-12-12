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

class RoutesHasBeenLoaded extends AbstractEvent
{
    /**
     * @var Router
     */
    private $router;

    /**
     * RoutesWillBeLoaded constructor.
     * routes has been loaded before this event
     *
     * @param Router $router
     */
    function __construct(Router $router)
    {
        parent::__construct();
        $this->router = $router;
    }
}
