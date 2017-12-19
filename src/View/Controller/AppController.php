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

class AppController extends ViewController
{
    protected $template = 'app.twig';

    function __construct(Request $request, array $parameters)
    {
        parent::__construct($request, $parameters);

        if (!$this->getAuth()) {
            $this->redirect = '/login';
        }
    }

    protected function addAssets()
    {
        parent::addAssets();
        $this->assets
            ->addJs(__DIR__ . '/../../../assets/app/dist/app.js')
            ->entry('teamelf/main')
            ->addCss(__DIR__ . '/../../../assets/app/dist/app.css');
    }
}
