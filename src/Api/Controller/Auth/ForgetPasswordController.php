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
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;
use TeamELF\Core\Member;
use TeamELF\Core\PasswordResetToken;
use TeamELF\Http\AbstractController;
use TeamELF\Mailer\Mailer;

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
            'email' => [
                new NotBlank(),
                new Email()
            ]
        ], false);
        if (count($data) > 0) {
            $member = Member::findBy($data);
            if ($member) {
                $token = (new PasswordResetToken())
                    ->member($member)
                    ->save();
                $sender = Mailer::createWithDefaultMailer();
                $sender->send(
                    $member->getEmail(),
                    'Reset Password',
                    'Your token ' . $token->getId()
                );
                // TODO: use html template
            }
        }
        return response();
    }
}
