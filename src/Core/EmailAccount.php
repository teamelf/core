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
 * @Table(name="email_account")
 */
class EmailAccount extends AbstractModel
{
    /**
     * @var string
     *
     * @Column(type="string", length=10)
     */
    protected $driver;
    public function getDriver()
    {
        return $this->driver;
    }
    public function driver($driver)
    {
        $this->driver = $driver;
        return $this;
    }

    /**
     * @var string
     *
     * @Column(type="string", length=30)
     */
    protected $host;
    public function getHost()
    {
        return $this->host;
    }
    public function host($host)
    {
        $this->host = $host;
        return $this;
    }

    /**
     * @var integer
     *
     * @Column(type="integer")
     */
    protected $port;
    public function getPort()
    {
        return $this->port;
    }
    public function port($port)
    {
        $this->port = $port;
        return $this;
    }

    /**
     * @var string
     *
     * @Column(type="string", length=10)
     */
    protected $encryption;
    public function getEncryption()
    {
        return $this->encryption;
    }
    public function encryption($encryption)
    {
        $this->encryption = $encryption;
        return $this;
    }

    /**
     * @var string
     *
     * @Column(type="string", length=100)
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
     * @Column(type="string", length=100)
     */
    protected $password;
    public function getPassword()
    {
        return $this->password;
    }
    public function password($password)
    {
        $this->password = $password;
        return $this;
    }

    /**
     * @var string
     *
     * @Column(type="string", length=100)
     */
    protected $sender;
    public function getSender()
    {
        return $this->sender;
    }
    public function sender($sender)
    {
        $this->sender = $sender;
        return $this;
    }
}
