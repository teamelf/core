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

class WelcomeMessageNeedsToBeSent extends AbstractEvent
{
    /**
     * @var Member
     */
    protected $member;


    function __construct(Member $member)
    {
        parent::__construct();
        $this->member = $member;
    }

    /**
     * @return Member
     */
    public function getMember()
    {
        return $this->member;
    }
}
