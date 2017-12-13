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

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Setup;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Monolog\Processor\IntrospectionProcessor;
use Monolog\Processor\PsrLogMessageProcessor;
use Monolog\Processor\WebProcessor;
use Symfony\Component\EventDispatcher\EventDispatcher;
use TeamELF\Config\Config;
use TeamELF\Event\AbstractEvent;
use TeamELF\Exception\Exception;
use TeamELF\Exception\HttpException;
use TeamELF\Exception\HttpValidationException;
use TeamELF\Listener\ListenerInterface;

abstract class AbstractApplication
{
    protected static $instance;

    /**
     * @var string
     */
    protected $basePath;

    /**
     * @var string
     */
    protected $storagePath;

    /**
     * @var Config
     */
    protected $config;

    /**
     * @var EventDispatcher
     */
    protected $dispatcher;

    /**
     * @var EntityManager
     */
    protected $entityManager;

    /**
     * @var Logger
     */
    protected $logger;

    /**
     * Server constructor.
     * create a new application for web server
     *
     * @param string $basePath
     * @param string $storagePath
     */
    function __construct($basePath, $storagePath = null)
    {
        // always save UTC in database
        date_default_timezone_set('UTC');

        $this->basePath = $basePath;

        if ($storagePath) {
            $this->storagePath = $storagePath;
        } else {
            $this->storagePath = $this->basePath . '/storage';
        }

        static::instance($this);

        $this->config = new Config($this->basePath);

        $this->dispatcher = new EventDispatcher();

        $this->entityManager = EntityManager::create(
            $this->config->db,
            Setup::createAnnotationMetadataConfiguration([$this->basePath . '/src'])
        );

        $this->logger = new Logger('system');
        foreach (Logger::getLevels() as $logLevel) {
            if ($logLevel >= $this->config->debugLevel) {
                $filename = $this->storagePath . '/log/' . $logLevel . '-' . strtolower(Logger::getLevelName($logLevel)) . '.log';
                $this->logger->pushHandler(new StreamHandler($filename, $logLevel));
            }
        }
        $this->logger->pushProcessor(new PsrLogMessageProcessor());
        $this->logger->pushProcessor(new IntrospectionProcessor());
        $this->logger->pushProcessor(new WebProcessor());
        $this->logger->debug('App started');
    }

    /**
     * application's interface maker
     *
     * @param string $key
     * @return EntityManager|Logger|AbstractApplication|Config
     */
    public function make($key)
    {
        switch ($key) {
            case 'config': return $this->config;
            case 'em': return $this->entityManager;
            case 'log': return $this->logger;
            default: return $this;
        }
    }

    /**
     * register all services
     */
    abstract protected function register(): void;

    /**
     * boot all services
     */
    abstract protected function boot(): void;

    /**
     * run all the services
     */
    /**
     * run all the services
     *
     * @return $this
     */
    final public function start()
    {
        try {
            $this->register();
            $this->boot();
        } catch (HttpValidationException $exception) {
            $validations = json_decode($exception->getMessage(), true);
            response($validations, $exception->getCode())->send();
        } catch (HttpException $exception) {
            response([
                'code' => $exception->getCode(),
                'message' => $exception->getMessage()
            ], $exception->getCode())->send();
        } catch (Exception $exception) {
            response(null, 500)->send();
        }
        return $this;
    }

    /**
     * set the Application instance
     *
     * @param AbstractApplication $instance
     * @return static
     */
    public static function instance(AbstractApplication $instance)
    {
        static::$instance = $instance;
        return $instance;
    }

    /**
     * get the Application instance
     *
     * @return static
     * @throws Exception
     */
    public static function getInstance()
    {
        if (!static::$instance) {
            throw new Exception('app has not been instanced yet!');
        }
        return static::$instance;
    }

    /**
     * dispatch an event
     *
     * @param string|AbstractEvent $event
     * @return $this
     */
    public function dispatch($event)
    {
        if ($event instanceof AbstractEvent) {
            $this->dispatcher->dispatch($event->getEventName(), $event);
        } else {
            $this->dispatcher->dispatch($event);
        }
        return $this;
    }

    /**
     * listen an event
     *
     * @param string|AbstractEvent $event
     * @param ListenerInterface    $listener
     * @return $this
     */
    public function listen($event, ListenerInterface $listener)
    {
        if ($event instanceof AbstractEvent) {
            $this->dispatcher->addListener($event->getEventName(), [$listener, 'handler']);
        } else {
            $this->dispatcher->addListener($event, [$listener, 'handler']);
        }
        return $this;
    }
}
