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

use TeamELF\Http\ViewController;

class LoginController extends ViewController
{
    protected $template = 'login.twig';

    protected function addAssets()
    {
        parent::addAssets();
        $this->assets
            ->addJs(__DIR__ . '/../../../assets/login/dist/login.js')
            ->entry('teamelf/login/main');
    }
}
