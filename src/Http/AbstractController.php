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
use TeamELF\Core\User;
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
     * @param null|User $user
     * @return $this
     */
    final protected function auth($user)
    {
        if ($user) {
            $this->session->set('auth_user_id', $user->getId());
        } else {
            $this->session->remove('auth_user_id');
        }
        return $this;
    }

    /**
     * get auth user from session
     *
     * @return null|object|User
     */
    final protected function getAuth()
    {
        return User::find($this->session->get('auth_user_id'));
    }

    /**
     * handle the request
     *
     * @return Response
     */
    abstract public function handler(): Response;
}
