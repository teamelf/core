<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Database;

use DateTime;
use PascalDeVink\ShortUuid\ShortUuid;

/** @Entity */
abstract class AbstractModel
{
    /**
     * @var string
     *
     * @Id
     * @Column(type="string", length=50)
     */
    protected $id;

    /**
     * @var DateTime
     *
     * @Column(type="datetime", name="created_at", nullable=TRUE)
     */
    protected $createdAt;

    /**
     * @var DateTime
     *
     * @Column(type="datetime", name="updated_at", nullable=TRUE)
     */
    protected $updatedAt;

    /**
     * @var DateTime
     *
     * @Column(type="datetime", name="deleted_at", nullable=TRUE)
     */
    protected $deletedAt;

    function __construct()
    {
        $this->id = ShortUuid::uuid4();
        $this->createdAt = new DateTime();
    }
}
