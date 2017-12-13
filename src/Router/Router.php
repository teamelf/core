<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Router;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;
use TeamELF\Exception\HttpMethodNotAllowedException;
use TeamELF\Http\AbstractController;

class Router
{
    /**
     * @var RouteCollection
     */
    protected $routes;

    /**
     * @var Request
     */
    protected $request;

    /**
     * @var RequestContext
     */
    protected $context;

    /**
     * @var UrlMatcher
     */
    protected $matcher;

    /**
     * route parameters matched
     *
     * @var array
     */
    protected $parameters;

    /**
     * matches router controller
     *
     * @var AbstractController
     */
    protected $controller;

    /**
     * allowed method to be handled
     *
     * @var array
     */
    protected $allowedMethod = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

    /**
     * prefix of router
     *
     * @var string
     */
    protected $prefix;

    /**
     * Router constructor.
     * create a router management
     */
    function __construct()
    {
        $this->routes = new RouteCollection();
        $this->request = Request::createFromGlobals();
        $this->context = new RequestContext();
        $this->context->fromRequest($this->request);
    }

    /**
     * add a route rule
     *
     * @param string $method
     * @param string $name
     * @param string $path
     * @param string $controller
     * @param array  $requirements
     * @param array  $options
     * @param string $host
     * @param array  $schemas
     * @param string $condition
     * @return static
     * @throws HttpMethodNotAllowedException
     */
    public function add($method, $name, $path, $controller = null, array $requirements = [],
                        array $options = [], $host = '', array $schemas = [], $condition = '')
    {
        if (!in_array(strtoupper($method), $this->allowedMethod)) {
            throw new HttpMethodNotAllowedException();
        }
        $this->routes->add(
            $name,
            new Route(
                $this->prefix . $path,
                ['_controller' => $controller],
                $requirements,
                $options,
                $host,
                $schemas,
                [strtoupper($method)],
                $condition
            )
        );
        return $this;
    }

    /**
     * add a get rule in route
     *
     * @param string $name
     * @param string $path
     * @param string $controller
     * @return static
     */
    public function get($name, $path, $controller = null)
    {
        $this->add('GET', $name, $path, $controller);
        return $this;
    }

    /**
     * add a post rule in route
     *
     * @param string $name
     * @param string $path
     * @param string $controller
     * @return static
     */
    public function post($name, $path, $controller = null)
    {
        $this->add('POST', $name, $path, $controller);
        return $this;
    }

    /**
     * add a put rule in route
     *
     * @param string $name
     * @param string $path
     * @param string $controller
     * @return static
     */
    public function put($name, $path, $controller = null)
    {
        $this->add('PUT', $name, $path, $controller);
        return $this;
    }

    /**
     * add a delete rule in route
     *
     * @param string $name
     * @param string $path
     * @param string $controller
     * @return static
     */
    public function delete($name, $path, $controller = null)
    {
        $this->add('DELETE', $name, $path, $controller);
        return $this;
    }

    /**
     * add a patch rule in route
     *
     * @param string $name
     * @param string $path
     * @param string $controller
     * @return static
     */
    public function patch($name, $path, $controller = null)
    {
        $this->add('PATCH', $name, $path, $controller);
        return $this;
    }

    /**
     * get response in controller's handler
     *
     * @return Response
     */
    public function getResponse()
    {
        $this->matcher = new UrlMatcher($this->routes, $this->context);

        $this->parameters = $this->matcher->matchRequest($this->request);

        $controller = $this->parameters['_controller'];
        if ($controller === null) {
            $response = new Response();
        } else {
            $this->controller = new $controller($this->request, $this->parameters);
            $response = $this->controller->handler();
        }

        return $response;
    }

    /**
     * set prefix of router
     * only works after this setter, before next setter
     *
     * @param string $prefix
     * @return $this
     */
    public function prefix($prefix = '')
    {
        $this->prefix = $prefix;
        return $this;
    }
}
