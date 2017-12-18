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

use Symfony\Component\EventDispatcher\Event;

abstract class AbstractEvent extends Event
{
    /**
     * event name
     *
     * @var string
     */
    private $eventName;

    function __construct($eventName = null)
    {
        if ($eventName) {
            $this->eventName = $eventName;
        } else {
            $this->eventName = static::class;
        }
    }

    /**
     * set event name
     *
     * @param string $eventName
     * @return $this
     */
    public function name($eventName)
    {
        $this->eventName = $eventName;
        return $this;
    }

    /**
     * get event name
     *
     * @return string
     */
    public function getEventName()
    {
        return $this->eventName;
    }
}
