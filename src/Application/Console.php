<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Application;

use \Doctrine\ORM\Tools\Console\ConsoleRunner;

class Console extends AbstractApplication {
    /**
     * @var \Symfony\Component\Console\Helper\HelperSet
     */
    protected $helper;

    protected $commands = [];

    /**
     * register all services
     */
    protected function register(): void
    {
        $this->helper = ConsoleRunner::createHelperSet($this->entityManager);
    }

    /**
     * boot all services
     */
    protected function boot(): void
    {
        ConsoleRunner::run($this->helper, $this->commands);
    }
}
