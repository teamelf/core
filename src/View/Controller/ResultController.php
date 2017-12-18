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

use Symfony\Component\HttpFoundation\Request;
use TeamELF\Http\ViewController;

class ResultController extends ViewController
{
    protected $template = 'result.twig';

    protected function addAssets()
    {
        parent::addAssets();
        $this->assets
            ->addJs(__DIR__ . '/../../../assets/auth/dist/auth.js')
            ->entry('teamelf/auth/result/main');
    }
}
