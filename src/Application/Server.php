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

use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use TeamELF\Api\ApiService;
use TeamELF\Event\AssetsWillBeAdded;
use TeamELF\Event\RoutesWillBeLoaded;
use TeamELF\Exception\HttpNotFoundException;
use TeamELF\Router\Router;
use TeamELF\View\Controller\FrontEndController;
use TeamELF\View\ViewService;

class Server extends AbstractApplication
{
    /**
     * @var Router
     */
    protected $router;

    /**
     * @var ApiService
     */
    protected $apiService;

    /**
     * @var ViewService
     */
    protected $viewService;

    function __construct($basePath, $storagePath = null)
    {
        parent::__construct($basePath, $storagePath);
        $this->router = new Router();
        $this->apiService = new ApiService();
        $this->viewService = new ViewService();
    }

    /**
     * register all services
     */
    protected function register(): void
    {
        $this->router->prefix('')->add(
            'GET',
            'front-end',
            '/{uri}',
            FrontEndController::class,
            ['uri' => '(?!api).*']
        );
        $this->apiService->register();
        $this->viewService->register();
    }

    /**
     * boot all services
     */
    protected function boot(): void
    {
        $this->dispatch(new RoutesWillBeLoaded($this->router));
        $this->dispatch(new AssetsWillBeAdded($this->viewService->getAssetManager()));

        // try to match back-end routes, if not, render front-end pages
        try {
            $response = $this->router->getResponse();
            $response->send();
        } catch (ResourceNotFoundException $exception) {
            throw new HttpNotFoundException();
        }
    }
}
