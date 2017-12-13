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

class HttpValidationException extends HttpException
{
    public function __construct(array $validation, $message = 'Validation Error', Throwable $previous = null)
    {
        response($validation, 422)->send();
        parent::__construct($message, 422, $previous);
    }
}
