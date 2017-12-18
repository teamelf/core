<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Api\Controller\Member;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints\NotBlank;
use TeamELF\Core\Member;
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Exception\HttpNotFoundException;
use TeamELF\Http\AbstractController;

class MemberSecurityController extends AbstractController
{
    /**
     * handle the request
     *
     * @return Response
     * @throws HttpForbiddenException
     * @throws HttpNotFoundException
     */
    public function handler(): Response
    {
        $data = $this->validate([
            'password_old' => [
                new NotBlank()
            ],
            'password_new' => [
                new NotBlank()
            ]
        ]);
        $member = Member::search($this->getParameter('username'));
        if (!$member) {
            throw new HttpNotFoundException();
        }
        if (password_verify($data['password_old'], $member->getPassword())) {
            $member->password($data['password_new']);
            $member->save();
        } else {
            throw new HttpForbiddenException();
        }
        return response();
    }
}
