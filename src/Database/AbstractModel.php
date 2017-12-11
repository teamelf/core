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
use DateTimeZone;
use Doctrine\ORM\EntityRepository;
use PascalDeVink\ShortUuid\ShortUuid;

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
    }

    /**
     * get id of this model
     *
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * get created time of this model
     *
     * @return DateTime
     */
    public function getCreatedAt()
    {
        return $this->createdAt
            ->setTimezone(new DateTimeZone(app('config')->timezone));
    }

    /**
     * get updated time of this model
     *
     * @return DateTime
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt
            ->setTimezone(new DateTimeZone(app('config')->timezone));
    }

    /**
     * get deleted time of this model
     *
     * @return DateTime
     */
    public function getDeletedAt()
    {
        return $this->deletedAt
            ->setTimezone(new DateTimeZone(app('config')->timezone));
    }

    /**
     * save model to database
     *
     * @return $this
     */
    final public function save()
    {
        if (!$this->createdAt) {
            $this->createdAt = new DateTime();
        } else {
            $this->updatedAt = new DateTime();
        }
        app('em')->persist($this);
        app('em')->flush();
        return $this;
    }

    /**
     * delete model from database
     *
     * @param bool $force soft delete if $force === false
     * @return $this
     */
    final public function delete($force = false)
    {
        if ($force) {
            $this->deletedAt = new DateTime();
            app('em')->persist($this);
        } else {
            app('em')->remove($this);
        }
        app('em')->flush();
        return $this;
    }

    /**
     * get specific model
     *
     * @param $id
     * @return null|object
     */
    final public static function find($id)
    {
        return static::getRepository()
            ->find($id);
    }

    /**
     * get model's database repository
     *
     * @return EntityRepository
     */
    final private static function getRepository()
    {
        return new EntityRepository(
            app('em'),
            app('em')->getClassMetadata(static::class)
        );
    }
}
