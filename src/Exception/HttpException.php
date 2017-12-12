<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Exception;

use Throwable;

class HttpException extends Exception
{
    public function __construct($message = 'Http Request Error', $code = 400, Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
