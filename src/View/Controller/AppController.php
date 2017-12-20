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
use TeamELF\View\ViewService;

class AppController extends ViewController
{
    protected $template = 'app.twig';

    function __construct(Request $request, array $parameters)
    {
        parent::__construct($request, $parameters);

        $member = $this->getAuth();
        if (!$member) {
            $this->redirect = '/login?from=' . urlencode($this->request->getUri());
        } else {
            ViewService::getEngine()
                ->addGlobal('auth', [
                    'id' => $member->getId(),
                    'username' => $member->getUsername(),
                    'role' => [
                        'id' => $member->getRole()->getId(),
                        'name' => $member->getRole()->getName()
                    ],
                    'name' => $member->getName()
                ]);
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
