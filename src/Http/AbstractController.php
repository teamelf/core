<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Http;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Validator\Validation;
use TeamELF\Core\Member;
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Exception\HttpUnauthorizedException;
use TeamELF\Exception\HttpValidationException;

abstract class AbstractController
{
    /**
     * the http requests
     *
     * @var Request
     */
    protected $request;

    /**
     * the session data
     *
     * @var Session
     */
    protected $session;

    /**
     * route parameters
     *
     * @var array
     */
    protected $parameters;

    /**
     * @var bool
     */
    protected $needLogin = true;

    /**
     * @var array
     */
    protected $needPermissions = [];

    /**
     * @var \Symfony\Component\Validator\Validator\ValidatorInterface
     */
    protected $validator;

    function __construct(Request $request, array $parameters)
    {
        $this->request = $request;

        $this->parameters = $parameters;

        $this->session = new Session();
        $this->session->start();

        $this->validator = Validation::createValidator();

        if ($this->needLogin && !$this->getAuth()) {
            throw new HttpUnauthorizedException();
        }
        foreach ($this->needPermissions as $permission) {
            if (!$this->can($permission)) {
                throw new HttpForbiddenException();
            }
        }
        $this->middleware();
    }

    /**
     * deal things before handler
     * override this
     */
    protected function middleware()
    {
    }

    /**
     * get parameter safely
     *
     * @param string $key
     * @param string $defaultValue
     * @return mixed|string
     */
    protected function getParameter($key, $defaultValue = null)
    {
        return $this->parameters[$key] ?? $defaultValue;
    }

    /**
     * validate input value from request
     *
     * @param array $rules ['key' => [new NotBlank(), ...], ...]
     * @param bool $throwError
     * @return array
     * @throws HttpValidationException
     */
    protected function validate(array $rules, bool $throwError = true)
    {
        $validations = [];
        $data = [];
        foreach ($rules as $key => $rule) {
            $value = $this->request->get($key);
            $violations = $this->validator->validate($value, $rule);
            if (count($violations) > 0) {
                $validations[$key] = [];
                foreach ($violations as $violation) {
                    $validations[$key][] = $violation->getMessage();
                }
            } else {
                $data[$key] = $value;
            }
        }
        if ($throwError && count($validations)) {
            throw new HttpValidationException($validations);
        }
        return $data;
    }

    /**
     * set auth user to session
     *
     * @param null|Member $member
     * @return $this
     */
    final protected function auth($member)
    {
        if ($member) {
            $this->session->set('auth_member_id', $member->getId());
        } else {
            $this->session->remove('auth_member_id');
        }
        return $this;
    }

    /**
     * get auth member from session
     *
     * @return null|object|Member
     */
    final protected function getAuth()
    {
        return Member::find($this->session->get('auth_member_id'));
    }

    final protected function log($type, $message, array $context = [])
    {
        if ($this->getAuth()) {
            $context['username'] = $this->getAuth()->getUsername();
        }
        $logger = app('log');
        if (method_exists($logger, $type)) {
            $logger->$type($message, $context);
        }
    }

    /**
     * check permission
     *
     * @param string $permission
     * @return bool
     */
    final protected function can($permission)
    {
        $member = $this->getAuth();
        return $member && $member->can($permission);
    }

    /**
     * handle the request
     *
     * @return Response
     */
    abstract public function handler(): Response;
}
