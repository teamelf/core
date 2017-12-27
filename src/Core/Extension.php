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
    protected $vendor;

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
     * getter of $vendor
     *
     * @return string
     */
    public function getVendor()
    {
        return $this->vendor;
    }

    /**
     * setter of $vendor
     *
     * @param string $vendor
     * @return $this
     */
    public function vendor($vendor)
    {
        $this->vendor = $vendor;
        return $this;
    }

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
     * setter of $activation
     *
     * @param bool $activation
     * @return $this
     */
    public function activation(bool $activation)
    {
        $this->activation = $activation;
        return $this;
    }

    // ----------------------------------------
    // | HELPER FUNCTIONS

    /**
     * activate the extension
     *
     * @return $this
     */
    public function activate()
    {
        $this->install();
        return $this->activation(true)
            ->save();
    }

    /**
     * deactivate the extension
     *
     * @return $this
     */
    public function deactivate()
    {
        return $this->activation(false)
            ->save();
    }

    /**
     * get extension's path in vendor
     *
     * @return string
     */
    public function getPath()
    {
        return app()->getBasePath()
            . '/vendor'
            . '/' . $this->getVendor()
            . '/' . $this->getPackage();
    }

    /**
     * install the extension
     *
     * @return $this
     */
    public function install()
    {
        app('migration')->migrate(
            $this->getPath() . '/migrations',
            $this->getPackage()
        );
        return $this;
    }

    /**
     * uninstall the extension
     *
     * @return $this
     */
    public function uninstall()
    {
        $this->deactivate();
        app('migration')->revert(
            $this->getPath() . '/migrations',
            $this->getPackage()
        );
        return $this;
    }

    /**
     * boot the extension
     *
     * @return $this
     */
    public function boot()
    {
        $bootstrap = $this->getPath() . '/bootstrap.php';
        if (file_exists($bootstrap)) {
            require $bootstrap;
        }
        return $this;
    }
}
