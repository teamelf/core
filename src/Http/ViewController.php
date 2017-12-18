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
use TeamELF\View\AssetManager;
use TeamELF\View\ViewService;

class ViewController extends AbstractController
{
    /**
     * template's relative path to views/
     * @var string
     */
    protected $template = 'hello.twig';

    /**
     * data
     * @var array
     */
    protected $data = [];

    /**
     * a 301 redirect will be sent if not null
     * @var null|string
     */
    protected $redirect = null;

    /**
     * @var AssetManager
     */
    protected $assets;

    /**
     * add common assets
     */
    protected function addAssets()
    {
        $this->assets = ViewService::getAssetManager();
        $this->assets
            ->addCss(__DIR__ . '/../../assets/common/dist/common.css')
            ->addJs(__DIR__ . '/../../assets/common/dist/common.js')
            ->entry('teamelf/common/main');
    }

    /**
     * handle the request
     *
     * @return Response
     */
    public function handler(): Response
    {
        if ($this->redirect) {
            return response(null, 302, ['Location' => $this->redirect]);
        } else {
            $this->addAssets();
            return view($this->template, $this->data);
        }
    }
}
