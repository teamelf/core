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

class VerifyTokenNeedsToBeSent extends AbstractEvent
{
    /**
     * @var Member
     */
    protected $member;

    /**
     * @var null|string
     */
    protected $token;

    function __construct(Member $member, $token)
    {
        parent::__construct();
        $this->member = $member;
        $this->token = $token;
    }

    /**
     * @return Member
     */
    public function getMember()
    {
        return $this->member;
    }

    /**
     * @return null|string
     */
    public function getToken()
    {
        return $this->token;
    }
}
