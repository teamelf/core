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
 * @Table(name="config")
 */
class Config extends AbstractModel
{
    // ----------------------------------------
    // | ORM DEFINITIONS

    /**
     * @var string
     *
     * @Column(type="string", length=20)
     */
    protected $key;

    /**
     * @var string
     *
     * @Column(type="string", length=200)
     */
    protected $value;

    // ----------------------------------------
    // | GETTERS & SETTERS

    /**
     * getter of $key
     *
     * @return string
     */
    public function getKey()
    {
        return $this->key;
    }

    /**
     * getter of $value
     *
     * @return string
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * setter of $value
     *
     * @param string $value
     * @return $this
     */
    public function value($value)
    {
        $this->value = $value;
        return $this;
    }

    // ----------------------------------------
    // | HELPER FUNCTIONS

    /**
     * get site configuration by $key
     *
     * @param null|string $key
     * @return array|string
     */
    public static function get($key = null)
    {
        if ($key) {
            $config = static::findBy(['key' => $key]);
            return $config ? $config->getValue() : '';
        } else {
            $config = [];
            foreach (static::all() as $c) {
                $config[$c->key] = $c->getValue();
            }
            return $config;
        }
    }
}
