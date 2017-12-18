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
use TeamELF\Core\Member;
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
        $member = Member::search($data['username']);
        if (!$member) {
            throw new HttpUnauthorizedException();
        }
        if (password_verify($data['password'], $member->getPassword())) {
            app('log')->info($member->getUsername() . ' Login successfully');
            $this->auth($member);
            return response();
        } else {
            app('log')->info($member->getUsername() . ' Login failed');
            throw new HttpUnauthorizedException();
        }
    }
}
