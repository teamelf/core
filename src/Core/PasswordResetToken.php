<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Core;

use DateTime;
use TeamELF\Database\AbstractModel;

/**
 * @Entity
 * @Table(name="password_reset_token")
 */
class PasswordResetToken extends AbstractModel
{
    /**
     * @ManyToOne(targetEntity="Member")
     * @JoinColumn(name="member_id", referencedColumnName="id")
     */
    protected $member;

    /**
     * @return Member
     */
    public function getMember()
    {
        return $this->member;
    }

    /**
     * set member
     *
     * @param Member $member
     * @return $this
     */
    public function member(Member $member)
    {
        $this->member = $member;
        return $this;
    }

    /**
     * see if token expired
     *
     * @return bool
     */
    public function isExpired()
    {
        // 12 minutes before expired
        return $this->getCreatedAt()->getTimestamp() + 12 * 60
            <= (new DateTime())->getTimestamp();
    }

    /**
     * see if the token can be used
     *
     * @return bool
     */
    public function isValid()
    {
        return !$this->getDeletedAt()
            && !$this->isExpired();
    }
}
