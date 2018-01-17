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

use TeamELF\Core\Member;

class MessageNeedsToBeSent extends AbstractEvent
{
    /**
     * @var Member[]
     */
    protected $receivers = [];

    /**
     * @var string
     */
    protected $subject;

    /**
     * @var string
     */
    protected $body = null;

    /**
     * MessageNeedsToBeSent constructor.
     *
     * @param mixed $receivers
     * @param string $subject
     * @param string $body
     */
    function __construct($receivers, $subject, $body)
    {
        parent::__construct();
        $this->subject = $subject;
        if (is_array($receivers)) {
            $this->receivers = $receivers;
        } else {
            $this->receivers = [$receivers];
        }
        $this->body = $body;
    }

    /**
     * @return Member[]
     */
    public function getReceivers()
    {
        return $this->receivers;
    }

    /**
     * @return string
     */
    public function getSubject()
    {
        return $this->subject;
    }

    /**
     * @return string
     */
    public function getBody()
    {
        return $this->body;
    }
}
