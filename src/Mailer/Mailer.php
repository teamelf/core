<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Mailer;

use TeamELF\Exception\HttpForbiddenException;

class Mailer
{
    protected $config;
    protected $driver;

    /**
     * Mailer constructor.
     * @param \TeamELF\Core\Mailer $mailerConfig
     */
    function __construct(\TeamELF\Core\Mailer $mailerConfig)
    {
        $this->config = $mailerConfig;

        $this->driver = (new \Swift_SmtpTransport())
            ->setHost($mailerConfig->getHost())
            ->setPort($mailerConfig->getPort())
            ->setEncryption($mailerConfig->getEncryption())
            ->setUsername($mailerConfig->getUsername())
            ->setPassword($mailerConfig->getPassword());
    }

    public static function createWithDefaultMailer()
    {
        $m = \TeamELF\Core\Mailer::findBy(['default' => true]);
        if (!$m) {
            throw new HttpForbiddenException('default mailer config not exists!');
        }
        return new static($m);
    }

    public function test()
    {
        return $this->driver->ping();
    }

    public function send($to, $subject, $body)
    {
        if (!$this->driver->isStarted()) {
            $this->driver->start();
        }
        $message = (new \Swift_Message())
            ->setSubject($subject)
            ->setBody($body)
            ->setFrom($this->config->getSender())
            ->setTo($to);
        return $this->driver->send($message);
    }
}
