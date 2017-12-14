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

    /**
     * add a new js file
     *
     * @param string $filename
     * @return $this
     * @throws Exception
     */
    public function addJs($filename)
    {
        if (file_exists($filename)) {
            array_push($this->js, $filename);
        } else {
            throw new Exception('View file [' . $filename . '] not found!');
        }
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
        if (file_exists($filename)) {
            array_push($this->css, $filename);
        } else {
            throw new Exception('View file [' . $filename . '] not found!');
        }
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
            $code = static::getHashCode($css);
            $html .= sprintf('<link rel="stylesheet" href="%s?%s"/>', $css, $code);
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
            $code = static::getHashCode($js);
            $html .= sprintf('<script src="%s?%s"></script>', $js, $code);
        }
        $html .= sprintf('<script>System.import(\'$s\')</script>', $this->entry);
        return $html;
    }

    public static function getHashCode($filename)
    {
        if (file_exists($filename)) {
            return md5_file($filename);
        } else {
            throw new Exception('View file [' . $filename . '] not found!');
        }
    }
}
