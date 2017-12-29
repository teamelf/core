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
 * @Table(name="role")
 */
class Role extends AbstractModel
{
    // ----------------------------------------
    // | ORM DEFINITIONS

    /**
     * @var string
     *
     * @Column(type="string", length=20, unique=TRUE)
     */
    protected $name;

    /**
     * @var string
     *
     * @Column(type="string", length=20, unique=TRUE)
     */
    protected $slug;

    /**
     * @var Member[]
     *
     * @OneToMany(targetEntity="Member", mappedBy="role")
     */
    protected $members;

    /**
     * @var string
     *
     * @Column(type="string", length=20, nullable=TRUE)
     */
    protected $color;

    /**
     * @var string
     *
     * @Column(type="string", length=20, nullable=TRUE)
     */
    protected $icon;

    // ----------------------------------------
    // | GETTERS & SETTERS

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
     * @param string $name
     * @return $this
     */
    public function name($name)
    {
        $this->name = $name;
        return $this;
    }

    /**
     * getter of $slug
     *
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * setter of $slug
     *
     * @param string $slug
     * @return $this
     */
    public function slug($slug)
    {
        $this->slug = $slug;
        return $this;
    }

    /**
     * getter of $members
     *
     * @return Member[]
     */
    public function getMembers()
    {
        return $this->members;
    }

    /**
     * getter of $color
     *
     * @return string
     */
    public function getColor()
    {
        return $this->color ?? '#aaa';
    }

    /**
     * setter of $color
     *
     * @param string|array $color
     * @return $this
     */
    public function color($color)
    {
        if (is_array($color)) { // rgb
            [$r, $g, $b] = $color;
            $r = substr('0' . dechex($r), -2);
            $g = substr('0' . dechex($g), -2);
            $b = substr('0' . dechex($b), -2);
            $color = '#' . $r . $g . $b;
        }
        $this->color = $color;
        return $this;
    }

    /**
     * getter of $icon
     *
     * @return string
     */
    public function getIcon()
    {
        return $this->icon ?? 'user';
    }

    /**
     * setter of $icon
     *
     * @param string $icon
     * @return $this
     */
    public function icon($icon)
    {
        $this->icon = $icon;
        return $this;
    }

    // ----------------------------------------
    // | HELPER FUNCTIONS
}
