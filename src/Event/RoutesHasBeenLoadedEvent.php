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

use Symfony\Component\Routing\RouteCollection;

class RoutesHasBeenLoadedEvent extends AbstractEvent
{
    /**
     * @var RouteCollection
     */
    private $router;

    /**
     * RoutesWillBeLoadedEvent constructor.
     * routes has been loaded before this event
     *
     * @param RouteCollection $router
     */
    function __construct(RouteCollection $router)
    {
        $this->router = $router;
    }
}
