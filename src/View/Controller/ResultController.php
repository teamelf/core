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

class ResultController extends ViewController
{
    protected $template = 'result.twig';

    protected function addAssets()
    {
        parent::addAssets();
        $this->assets
            ->addJs(__DIR__ . '/../../../assets/result/dist/result.js')
            ->entry('teamelf/result/main');
    }
}
