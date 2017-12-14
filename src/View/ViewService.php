<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\View;

use TeamELF\Application\AbstractService;
use TeamELF\Event\AssetsHaveBeenAdded;
use TeamELF\Event\AssetsWillBeAdded;
use TeamELF\Listener\ListenerInterface;

class ViewService extends AbstractService implements ListenerInterface
{
    /**
     * @var null|\Twig_Environment
     */
    private static $engine;

    /**
     * @var AssetManager
     */
    protected $assets;

    function __construct()
    {
        $this->assets = new AssetManager();
    }

    /**
     * get AssetManager
     *
     * @return AssetManager
     */
    public function getAssetManager()
    {
        return $this->assets;
    }

    /**
     * get the engine instance
     *
     * @return \Twig_Environment
     */
    public static function getEngine()
    {
        if (!static::$engine) {
            $loader = new \Twig_Loader_Filesystem(__DIR__ . '/../../views');
            static::$engine = new \Twig_Environment($loader);
        }
        return static::$engine;
    }

    /**
     * register all view services
     */
    public function register()
    {
        app()->listen(AssetsWillBeAdded::class, [$this, 'handleAssets']);
    }

    /**
     * handle event AssetsWillBeAdded
     * all core assets will be added here
     *
     * @param AssetsWillBeAdded $event
     */
    public function handleAssets($event)
    {
        $event->getAssetManager()
            ->addJs(__DIR__ . '/../../assets/dist/app.js')
            ->entry('teamelf/main')
            ->addCss(__DIR__ . '/../../assets/dist/app.css');

        app()->dispatch(new AssetsHaveBeenAdded($this->assets));
    }
}
