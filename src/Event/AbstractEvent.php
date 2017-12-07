<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Event;

abstract class AbstractEvent
{
    /**
     * event name
     *
     * @var string
     */
    private $eventName;

    function __construct($eventName = '')
    {
        if ($eventName) {
            $this->eventName = $eventName;
        } else {
            $this->eventName = get_class(self::class);
        }
    }

    public function getEventName()
    {
        return $this->eventName;
    }
}
