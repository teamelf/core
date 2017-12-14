<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\View\Controller;

use Symfony\Component\HttpFoundation\Response;
use TeamELF\Http\AbstractController;

abstract class AbstractViewController extends AbstractController
{
    protected $template = 'hello';

    protected $data = [];

    /**
     * handle the request
     *
     * @return Response
     */
    public function handler(): Response
    {
        return view($this->template, $this->data);
    }
}
