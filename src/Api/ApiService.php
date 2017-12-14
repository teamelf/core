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
use TeamELF\Event\RoutesHaveBeenLoaded;
use TeamELF\Event\RoutesWillBeLoaded;
use TeamELF\Listener\ListenerInterface;

class ApiService extends AbstractService implements ListenerInterface
{
    /**
     * register all api services
     */
    public function register()
    {
        app()->listen(RoutesWillBeLoaded::class, [$this, 'handleRoutes']);
    }

    /**
     * handle RoutesWillBeLoaded event
     * all core api routes will be loaded here
     *
     * @param RoutesWillBeLoaded $event
     */
    public function handleRoutes($event)
    {
        $event->getRouter()
            ->prefix('/api')

            // --------------------
            // | Auth
            // --------------------
            ->get('auth-check', '/auth', AuthCheckController::class)
            ->post('auth-login', '/auth/login', LoginController::class)
            ->post('auth-logout', '/auth/logout', LogoutController::class)
            ->post('auth-forgot', '/auth/forgot') // TODO
            ->post('auth-reset', '/auth/reset') // TODO

            // --------------------
            // | User
            // --------------------
            ->get('user-list', '/user') // TODO
            ->get('user-item', '/user/{id}') // TODO
            ->put('user-edit', '/user/{id}') // TODO
            ->put('user-security', '/user/{id}/security') // TODO

            // set prefix back to empty
            ->prefix('');

        app()->dispatch(new RoutesHaveBeenLoaded($event->getRouter()));
    }
}
