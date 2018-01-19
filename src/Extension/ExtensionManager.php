<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Extension;

use TeamELF\Core\Extension;
use TeamELF\Exception\Exception;

class ExtensionManager
{
    /**
     * @var Extension[]
     */
    protected $extensions;

    /**
     * @var string
     */
    protected $vendorPath;

    function __construct($vendorPath)
    {
        $this->vendorPath = $vendorPath;
    }

    /**
     * get extensions repository
     *
     * @return Extension[]
     */
    public function getExtensions()
    {
        return $this->extensions;
    }

    /**
     * get install packages
     *
     * @return array
     * @throws Exception
     */
    public function getPackages()
    {
        $filename = $this->vendorPath . '/composer/installed.json';
        if (!file_exists($filename)) {
            throw new Exception($filename . ' not exists!');
        }
        $packages = [];
        foreach (json_decode(file_get_contents($filename), true) as $package) {
            if ($package['type'] === 'teamelf-extension') {
                $packages[] = $package;
            }
        }
        return $packages;
    }

    /**
     * sync install packages with extension repository
     *
     * @return $this
     */
    public function load()
    {
        $this->extensions = [];
        foreach ($this->getPackages() as $package) {
            [$v, $p] = explode('/', $package['name']);
            $extension = Extension::findBy([
                'vendor' => $v,
                'package' => $p
            ]);
            if (!$extension) {
                $extension = (new Extension())
                    ->vendor($v)
                    ->package($p);
            }
            $extension
                ->version($package['version'] ?? '')
                ->description($package['description'] ?? '')
                ->save();
            $this->extensions[] = $extension;
        }
        return $this;
    }
}
