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
    /**
     * @var string
     *
     * @Column(type="string", length=20, unique=TRUE)
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
     * @var string
     *
     * @Column(type="string", length=20, unique=TRUE)
     */
    protected $slug;
    public function getSlug()
    {
        return $this->slug;
    }
    public function slug($slug)
    {
        $this->slug = $slug;
        return $this;
    }
}
