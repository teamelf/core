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

use TeamELF\Database\AbstractModel;

/**
 * @Entity
 * @Table(name="permission")
 */
class Permission extends AbstractModel
{
    /**
     * @var string
     *
     * @Column(type="string", length=20, unique=TRUE)
     */
    protected $permission;

    /**
     * @ManyToOne(targetEntity="Role")
     * @JoinColumn(name="role_id", referencedColumnName="id")
     */
    protected $role;
    public function getRole()
    {
        return $this->role;
    }
    public function role(Role $role)
    {
        $this->role = $role;
        return $this;
    }

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
}
