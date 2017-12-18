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
use TeamELF\Core\PasswordResetToken;
use TeamELF\Http\AbstractController;

class ForgetPasswordController extends AbstractController
{
    /**
     * handle the request
     *
     * @return Response
     */
    public function handler(): Response
    {
        $data = $this->validate([
            'username' => [
                new NotBlank()
            ]
        ]);
        $member = Member::search($data['username']);
        $token = new PasswordResetToken();
        $token->member($member)
            ->save();
        // TODO: send token [$token->getId()] to email [$member->getEmail()]
        return response();
    }
}
