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
use TeamELF\Api\Controller\Config\ConfigListController;
use TeamELF\Api\Controller\Config\ConfigUpdateController;
use TeamELF\Application\AbstractService;
use TeamELF\Event\RoutesWillBeLoaded;

class ApiService extends AbstractService
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
            // | Config
            // --------------------
            ->get('config-list', '/config', ConfigListController::class)
            ->put('config-update', '/config/{key}', ConfigUpdateController::class)

            // --------------------
            // | Auth
            // --------------------
            ->get('auth-check', '/auth', AuthCheckController::class)
            ->post('auth-login', '/auth/login', LoginController::class)
            ->post('auth-logout', '/auth/logout', LogoutController::class)
            ->post('auth-forgot', '/auth/forgot') // TODO
            ->post('auth-reset', '/auth/reset') // TODO

            // --------------------
            // | Member
            // --------------------
            ->get('member-list', '/member') // TODO
            ->get('member-item', '/member/{username}') // TODO
            ->put('member-edit', '/member/{username}') // TODO
            ->put('member-security', '/member/{username}/security') // TODO

            // set prefix back to empty
            ->prefix('');
    }
}
