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
    // ----------------------------------------
    // | ORM DEFINITIONS

    /**
     * @var string
     *
     * @Column(type="string", length=50)
     */
    protected $permission;

    /**
     * @ManyToOne(targetEntity="Role")
     * @JoinColumn(name="role_id", referencedColumnName="id")
     */
    protected $role;

    // ----------------------------------------
    // | GETTERS & SETTERS

    /**
     * getter of $permission
     *
     * @return string
     */
    public function getPermission()
    {
        return $this->permission;
    }

    /**
     * setter of $permission
     *
     * @param string $permission
     * @return $this
     */
    public function permission($permission)
    {
        $this->permission = $permission;
        return $this;
    }

    /**
     * getter of $role
     *
     * @return Role
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * setter of $role
     *
     * @param Role $role
     * @return $this
     */
    public function role(Role $role)
    {
        $this->role = $role;
        return $this;
    }

    // ----------------------------------------
    // | HELPER FUNCTIONS
}
