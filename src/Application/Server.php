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

use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use TeamELF\Api\ApiService;
use TeamELF\Event\RoutesHaveBeenLoaded;
use TeamELF\Event\RoutesWillBeLoaded;
use TeamELF\Exception\HttpMethodNotAllowedException;
use TeamELF\Exception\HttpNotFoundException;
use TeamELF\Extension\ExtensionManager;
use TeamELF\Router\Router;
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
        $this->viewService->register();
        $this->apiService->register();
    }

    /**
     * boot all services
     *
     * @throws HttpMethodNotAllowedException
     * @throws HttpNotFoundException
     */
    protected function boot(): void
    {
        // boot extensions
        foreach ($this->extensionManager->getExtensions() as $extension) {
            if ($extension->isActivated()) {
                $extension->boot();
            }
        }

        // boot app
        $this->dispatch(new RoutesWillBeLoaded($this->router));
        $this->dispatch(new RoutesHaveBeenLoaded($this->router));

        // send back responses
        try {
            $response = $this->router->getResponse();
            $response->send();
        } catch (RouteNotFoundException $exception) {
            throw new HttpNotFoundException();
        } catch (ResourceNotFoundException $exception) {
            throw new HttpNotFoundException();
        } catch (MethodNotAllowedException $exception) {
            throw new HttpMethodNotAllowedException();
        }
    }
}
