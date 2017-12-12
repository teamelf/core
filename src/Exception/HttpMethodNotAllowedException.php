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

class HttpMethodNotAllowedException extends HttpException
{
    public function __construct($message = 'Method Not Allowed', Throwable $previous = null)
    {
        parent::__construct($message, 405, $previous);
    }
}
