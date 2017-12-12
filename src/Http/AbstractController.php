<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Http;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

abstract class AbstractController
{
    /**
     * the http requests
     *
     * @var Request
     */
    protected $request;

    /**
     * route parameters
     *
     * @var array
     */
    protected $parameters;

    function __construct(Request $request, array $parameters)
    {
        $this->request = $request;
        $this->parameters = $parameters;
    }

    /**
     * get parameter safely
     *
     * @param string $key
     * @param string $defaultValue
     * @return mixed|string
     */
    protected function getParameter($key, $defaultValue = '')
    {
        return $this->parameters[$key] ?? $defaultValue;
    }

    /**
     * handle the request
     *
     * @return Response
     */
    abstract public function handler(): Response;
}
