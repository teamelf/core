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
     * @ManyToOne(targetEntity="User")
     * @JoinColumn(name="user_id", referencedColumnName="id")
     */
    protected $user;
    public function getUser()
    {
        return $this->user;
    }
    public function user(User $user)
    {
        $this->user = $user;
        return $this;
    }

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
