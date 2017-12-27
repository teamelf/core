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
 * @Table(name="extension")
 */
class Extension extends AbstractModel
{
    // ----------------------------------------
    // | ORM DEFINITIONS

    /**
     * @var string
     *
     * @Column(type="string", length=100)
     */
    protected $package;

    /**
     * @var string
     *
     * @Column(type="string", length=20, nullable=TRUE)
     */
    protected $version;

    /**
     * @var string
     *
     * @Column(type="string", length=200, nullable=TRUE)
     */
    protected $description;

    /**
     * @var boolean
     *
     * @Column(type="boolean", nullable=TRUE)
     */
    protected $activation;

    // ----------------------------------------
    // | GETTERS & SETTERS

    /**
     * getter of $package
     *
     * @return string
     */
    public function getPackage()
    {
        return $this->package;
    }

    /**
     * setter of $permission
     *
     * @param string $package
     * @return $this
     */
    public function package($package)
    {
        $this->package = $package;
        return $this;
    }

    /**
     * getter of $version
     *
     * @return string
     */
    public function getVersion()
    {
        return $this->version;
    }

    /**
     * setter of $version
     *
     * @param string $version
     * @return $this
     */
    public function version($version)
    {
        $this->version = $version;
        return $this;
    }

    /**
     * getter of $description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * setter of $description
     *
     * @param string $description
     * @return $this
     */
    public function description($description)
    {
        $this->description = $description;
        return $this;
    }

    /**
     * getter of $activation
     *
     * @return bool
     */
    public function isActivated()
    {
        return !!$this->activation;
    }

    /**
     * activate the extension
     *
     * @return $this
     */
    public function activate()
    {
        $this->activation = true;
        return $this;
    }

    /**
     * deactivate the extension
     *
     * @return $this
     */
    public function deactivate()
    {
        $this->activation = false;
        return $this;
    }

    // ----------------------------------------
    // | HELPER FUNCTIONS
}
