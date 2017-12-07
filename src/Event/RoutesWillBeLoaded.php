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

class RoutesWillBeLoaded extends AbstractEvent
{
    /**
     * @var RouteCollection
     */
    private $router;

    /**
     * RoutesWillBeLoaded constructor.
     * routes will be loaded after this event
     *
     * @param RouteCollection $router
     */
    function __construct(RouteCollection $router)
    {
        parent::__construct();
        $this->router = $router;
    }
}
