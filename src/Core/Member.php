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
     * @Column(type="string", length=100)
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
     * @Column(type="string", length=50, unique=TRUE)
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
     * @Column(type="boolean")
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
    public function getRole()
    {
        return $this->role;
    }
    public function role(Role $role)
    {
        $this->role = $role;
        return $this;
    }
}
