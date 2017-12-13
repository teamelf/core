<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Api;

use TeamELF\Api\Controller\Auth\AuthCheckController;
use TeamELF\Api\Controller\Auth\LoginController;
use TeamELF\Api\Controller\Auth\LogoutController;
use TeamELF\Application\AbstractService;
use TeamELF\Event\RoutesWillBeLoaded;
use TeamELF\Listener\ListenerInterface;

class ApiService extends AbstractService implements ListenerInterface
{
    /**
     * register all api services
     */
    public function register()
    {
        app()->listen(RoutesWillBeLoaded::class, $this);
    }

    /**
     * handle RoutesWillBeLoaded event
     * all core api routes will be loaded here
     *
     * @param RoutesWillBeLoaded $event
     */
    public function handler($event)
    {
        $event->getRouter()
            ->get('auth-check', '/api/auth', AuthCheckController::class)
            ->post('auth-login', '/api/auth/login', LoginController::class)
            ->post('auth-logout', '/api/auth/logout', LogoutController::class);
    }
}
