<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Api\Controller\Config;

use Symfony\Component\HttpFoundation\Response;
use TeamELF\Core\Config;
use TeamELF\Http\AbstractController;

class ConfigListController extends AbstractController
{
    protected $needLogin = false;

    /**
     * handle the request
     *
     * @return Response
     */
    public function handler(): Response
    {
        $config = Config::get();
        return response($config);
    }
}
