<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Event;

use TeamELF\View\AssetManager;

class AppAssetsWillBeAdded extends AbstractEvent
{
    /**
     * @var AssetManager
     */
    protected $assets;

    /**
     * AppAssetsWillBeAdded constructor.
     * Application's FE assets will be added after this event
     *
     * @param AssetManager $assets
     */
    function __construct(AssetManager $assets)
    {
        parent::__construct();
        $this->assets = $assets;
    }

    /**
     * @return AssetManager
     */
    public function getAssets()
    {
        return $this->assets;
    }
}
