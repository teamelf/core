<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use TeamELF\Application\AbstractApplication;

if (! function_exists('app')) {
    /**
     * @return mixed|AbstractApplication
     */
    function app()
    {
        return AbstractApplication::getInstance();
    }
}
