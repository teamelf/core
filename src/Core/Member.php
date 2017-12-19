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
    // ----------------------------------------
    // | ORM DEFINITIONS

    /**
     * @var string
     *
     * @Column(type="string", length=30, unique=TRUE)
     */
    protected $username;

    /**
     * @var string
     *
     * @Column(type="string", length=100, nullable=TRUE)
     */
    protected $password;

    /**
     * @var string
     *
     * @Column(type="string", length=100, unique=TRUE)
     */
    protected $email;

    /**
     * @var string
     *
     * @Column(type="string", length=20, nullable=TRUE)
     */
    protected $phone;

    /**
     * @var string
     *
     * @Column(type="string", length=50)
     */
    protected $name;

    /**
     * @var boolean
     *
     * @Column(type="boolean", nullable=TRUE)
     */
    protected $gender;

    /**
     * @var Role
     *
     * @ManyToOne(targetEntity="Role")
     * @JoinColumn(name="role_id", referencedColumnName="id")
     */
    protected $role;

    // ----------------------------------------
    // | GETTERS & SETTERS

    /**
     * getter of $username
     *
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * setter of $username
     * @param string $username
     * @return $this
     */
    public function username($username)
    {
        $this->username = $username;
        return $this;
    }

    /**
     * getter of $password
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * setter of $password
     *
     * @param string $password
     * @return $this
     */
    public function password($password)
    {
        $this->password = password_hash($password, PASSWORD_DEFAULT);
        return $this;
    }

    /**
     * getter of $email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * setter of $email
     *
     * @param string $email
     * @return $this
     */
    public function email($email)
    {
        $this->email = $email;
        return $this;
    }

    /**
     * getter of $phone
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * setter of $phone
     *
     * @param string $phone
     * @return $this
     */
    public function phone($phone)
    {
        $this->phone = $phone;
        return $this;
    }

    /**
     * getter of $name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * setter of $name
     *
     * @param string $name
     * @return $this
     */
    public function name($name)
    {
        $this->name = $name;
        return $this;
    }

    /**
     * getter of $gender
     *
     * @return bool
     */
    public function getGender()
    {
        return !!$this->gender;
    }

    /**
     * setter of $gender
     *
     * @param $gender
     * @return $this
     */
    public function gender($gender)
    {
        $this->gender = !!$gender;
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
