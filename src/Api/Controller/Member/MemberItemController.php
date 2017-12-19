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
use TeamELF\Core\Member;
use TeamELF\Exception\HttpNotFoundException;
use TeamELF\Http\AbstractController;

class MemberItemController extends AbstractController
{
    /**
     * handle the request
     *
     * @return Response
     * @throws HttpNotFoundException
     */
    public function handler(): Response
    {
        $member = Member::search($this->getParameter('username'));
        if (!$member) {
            throw new HttpNotFoundException();
        }
        $r = $member->getRole();
        return response([
            'id' => $member->getId(),
            'username' => $member->getUsername(),
            'email' => $member->getEmail(),
            'phone' => $member->getPhone(),
            'number' => $member->getNumber(),
            'name' => $member->getName(),
            'gender' => $member->getGender(),
            'role' => [
                'name' => $r->getName(),
                'color' => $r->getColor()
            ]
        ]);
    }
}
