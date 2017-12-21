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
        ]);
        if (count($data) > 0) {
            $member = Member::findBy($data);
            if ($member) {
                $token = (new PasswordResetToken())
                    ->member($member)
                    ->save();
                Mailer::createWithDefaultMailer()
                    ->subject('重置密码')
                    ->view(
                        'mail/password-reset.twig',
                        ['token' => $token->getId()]
                    )->send($member->getEmail());
            } else {
                sleep(1); // avoid judging status through time used
            }
        } else {
            sleep(1); // avoid judging status through time used
        }
        return response();
    }
}
