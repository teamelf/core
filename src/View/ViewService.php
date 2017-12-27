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
use TeamELF\Core\Config;
use TeamELF\Event\RoutesHaveBeenLoaded;
use TeamELF\View\Controller\AppController;
use TeamELF\View\Controller\LoginController;
use TeamELF\View\Controller\ResetPasswordController;
use TeamELF\View\Controller\ResultController;

class ViewService extends AbstractService
{
    /**
     * @var null|\Twig_Environment
     */
    private static $engine;

    /**
     * @var null|AssetManager
     */
    private static $assets;

    /**
     * get AssetManager
     *
     * @return AssetManager
     */
    public static function getAssetManager()
    {
        if (!static::$assets) {
            static::$assets = new AssetManager();
        }
        return static::$assets;
    }

    /**
     * get the engine instance
     *
     * @return \Twig_Environment
     */
    public static function getEngine()
    {
        if (!static::$engine) {
            $loader = new \Twig_Loader_Filesystem();
            $loader->setPaths(__DIR__ . '/../../views');
            foreach (app('extension')->getExtensions() as $extension) {
                $loader->setPaths(
                    $extension->getPath() . '/views',
                    $extension->getPackage()
                );
            }
            static::$engine = new \Twig_Environment($loader);
            static::$engine->addGlobal('assets', static::getAssetManager());
            static::$engine->addGlobal('config', Config::get());
        }
        return static::$engine;
    }

    /**
     * register all view services
     */
    public function register()
    {
        app()->listen(RoutesHaveBeenLoaded::class, [$this, 'handleRoutes']);
    }

    public function handleRoutes(RoutesHaveBeenLoaded $event)
    {
        $event->getRouter()->prefix('')
            ->get('fe-login', '/login', LoginController::class)
            ->get('fe-reset-password', '/password/reset', ResetPasswordController::class)
            ->get('fe-result', '/r', ResultController::class)
            ->add(
                'GET',
                'fe-default',
                '/{uri}',
                AppController::class,
                ['uri' => '(?!api).*']
            );
    }
}
