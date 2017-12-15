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

use TeamELF\Exception\Exception;

class AssetManager
{
    /**
     * js asset files
     *
     * @var array
     */
    protected $js = [];

    /**
     * js entry module
     *
     * @var string
     */
    protected $entry;

    /**
     * css asset files
     *
     * @var array
     */
    protected $css = [];

    protected function saveToPublicAsset($filename)
    {
        if (file_exists($filename)) {
            $hashcode = md5_file($filename);
            $info = pathinfo($filename);
            $assetFilename = sprintf(
                '/assets/%s.%s.%s',
                $info['filename'],
                $hashcode,
                $info['extension']
            );
            $assetPath = app()->getPublicPath() . $assetFilename;
            if (file_exists($assetPath)) {
                app('file')->copy($filename, $assetPath);
            }
            return $assetFilename;
        } else {
            throw new Exception('Asset file [' . $filename . '] not found!');
        }
    }

    /**
     * add a new js file
     *
     * @param string $filename
     * @return $this
     * @throws Exception
     */
    public function addJs($filename)
    {
        array_push($this->js, $this->saveToPublicAsset($filename));
        return $this;
    }

    /**
     * set js entry module
     *
     * @param string $module
     * @return $this
     */
    public function entry($module)
    {
        $this->entry = $module;
        return $this;
    }

    /**
     * add a new css file
     *
     * @param string $filename
     * @return $this
     * @throws Exception
     */
    public function addCss($filename)
    {
        array_push($this->css, $this->saveToPublicAsset($filename));
        return $this;
    }

    /**
     * get link code for all css assets
     *
     * @return string
     */
    public function getCssCode()
    {
        $html = '';
        foreach ($this->css as $css) {
            $html .= sprintf('<link rel="stylesheet" href="%s"/>', $css);
        }
        return $html;
    }

    /**
     * get script code for all js assets
     *
     * @return string
     */
    public function getJsCode()
    {
        $html = '';
        foreach ($this->js as $js) {
            $html .= sprintf('<script src="%s"></script>', $js);
        }
        $html .= sprintf('<script>System.import(\'%s\')</script>', $this->entry);
        return $html;
    }
}
