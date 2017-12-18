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
 * @Table(name="member")
 */
class Member extends AbstractModel
{
    /**
     * @var string
     *
     * @Column(type="string", length=30, unique=TRUE)
     */
    protected $username;
    public function getUsername()
    {
        return $this->username;
    }
    public function username($username)
    {
        $this->username = $username;
        return $this;
    }

    /**
     * @var string
     *
     * @Column(type="string", length=100, nullable=TRUE)
     */
    protected $password;
    public function getPassword()
    {
        return $this->password;
    }
    public function password($password)
    {
        $this->password = password_hash($password, PASSWORD_DEFAULT);
        return $this;
    }

    /**
     * @var string
     *
     * @Column(type="string", length=100, nullable=TRUE)
     */
    protected $email;
    public function getEmail()
    {
        return $this->email;
    }
    public function email($email)
    {
        $this->email = $email;
        return $this;
    }

    /**
     * @var string
     *
     * @Column(type="string", length=20, nullable=TRUE)
     */
    protected $phone;
    public function getPhone()
    {
        return $this->phone;
    }
    public function phone($phone)
    {
        $this->phone = $phone;
        return $this;
    }

    /**
     * @var string
     *
     * @Column(type="string", length=50, nullable=TRUE)
     */
    protected $number;
    public function getNumber()
    {
        return $this->number;
    }
    public function number($number)
    {
        $this->number = $number;
        return $this;
    }

    /**
     * @var string
     *
     * @Column(type="string", length=50)
     */
    protected $name;
    public function getName()
    {
        return $this->name;
    }
    public function name($name)
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @var boolean
     *
     * @Column(type="boolean", nullable=TRUE)
     */
    protected $gender;
    public function getGender()
    {
        return $this->gender;
    }
    public function gender($gender)
    {
        $this->gender = $gender;
        return $this;
    }

    /**
     * @ManyToOne(targetEntity="Role")
     * @JoinColumn(name="role_id", referencedColumnName="id")
     */
    protected $role;

    /**
     * @return Role
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * @param Role $role
     * @return $this
     */
    public function role(Role $role)
    {
        $this->role = $role;
        return $this;
    }

    /**
     * search member by id, username or email
     *
     * @param string $idOrUsernameOrEmail
     * @return null|object|static
     */
    public static function search($idOrUsernameOrEmail)
    {
        return static::find($idOrUsernameOrEmail)
            ?? static::findBy(['username' => $idOrUsernameOrEmail])
            ?? static::findBy(['email' => $idOrUsernameOrEmail]);
    }

    /**
     * check the member has permission
     *
     * @param string $permission
     * @return bool
     */
    public function can($permission)
    {
        $permission = Permission::findBy(['permission' => $permission, 'member' => $this])
            ?? Permission::findBy(['permission' => $permission, 'role' => $this->getRole()]);
        return !!$permission;
    }
}
