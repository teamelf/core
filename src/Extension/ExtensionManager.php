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

    public function load($vendorPath)
    {
        $filename = $vendorPath . '/composer/installed.json';
        if (!file_exists($filename)) {
            throw new Exception($filename . ' not exists!');
        }
        $this->extensions = [];
        $packages = json_decode(file_get_contents($filename), true);
        foreach ($packages as $package) {
            if ($package['type'] === 'teamelf-extension') {
                $extension = Extension::findBy(['package' => $package['name']]);
                if (!$extension) {
                    $extension = (new Extension())
                        ->package($package['name'])
                        ->version($package['version'] ?? '')
                        ->description($package['description'] ?? '')
                        ->save();
                }
                $this->extensions[] = $extension;
            }
        }
    }
}
