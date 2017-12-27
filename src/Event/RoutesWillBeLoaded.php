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
     * all extension routes must be added here
     *
     * !! BE CAREFUL !!
     *     DO NOT use same name or same routes with core,
     *     or the routes in core will be covered,
     *     unless it's what you want to do
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
