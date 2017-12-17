<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Api\Controller\Auth;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints\NotBlank;
use TeamELF\Core\User;
use TeamELF\Exception\HttpUnauthorizedException;
use TeamELF\Http\AbstractController;

class LoginController extends AbstractController
{
    /**
     * handle the request
     *
     * @return Response
     * @throws HttpUnauthorizedException
     */
    public function handler(): Response
    {
        $this->auth(null);
        $data = $this->validate([
            'username' => [
                new NotBlank()
            ],
            'password' => [
                new NotBlank()
            ]
        ]);
        $user = User::findBy(['username' => $data['username']])
            ?? User::findBy(['email' => $data['username']]);
        if (!$user) {
            throw new HttpUnauthorizedException();
        }
        if (password_verify($data['password'], $user->getPassword())) {
            app('log')->info($user->getUsername() . ' Login successfully');
            $this->auth($user);
            return response();
        } else {
            app('log')->info($user->getUsername() . ' Login failed');
            throw new HttpUnauthorizedException();
        }
    }
}
