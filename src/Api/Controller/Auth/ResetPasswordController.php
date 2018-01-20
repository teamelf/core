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
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Http\AbstractController;

class ResetPasswordController extends AbstractController
{
    protected $needLogin = false;

    /**
     * handle the request
     *
     * @return Response
     * @throws HttpForbiddenException
     */
    public function handler(): Response
    {
        $memberData = $this->validate([
            'email' => [
                new NotBlank(),
                new Email()
            ]
        ]);
        $data = $this->validate([
            'password' => [
                new NotBlank()
            ],
            'passwordConfirmation' => [
                new NotBlank()
            ],
            'passwordOrigin' => [
                new NotBlank()
            ]
        ]);
        if (!preg_match('/[a-zA-Z]/', $data['passwordOrigin'])
            || !preg_match('/[0-9]/', $data['passwordOrigin'])
            || !preg_match('/[^a-zA-Z0-9]/', $data['passwordOrigin'])
            || strlen($data['passwordOrigin']) < 8) {
            throw new HttpForbiddenException('密码太弱，需至少8位并且包含字母数字以及字符');
        }
        if (sha1($data['passwordOrigin']) !== $data['password']
            || $data['password'] !== $data['passwordConfirmation']) {
            throw new HttpForbiddenException('两次输入的密码不一样');
        }
        $token = PasswordResetToken::find($this->getParameter('token'));
        $member = Member::findBy($memberData);
        if (!$token || !$token->isValid() || !$member || $token->getMember()->getId() !== $member->getId()) {
            throw new HttpForbiddenException();
        }
        $token->delete();
        $member->password($data['password'])
            ->save();
        $this->auth(null);
        $this->log('info', '[' . $memberData['email'] . '] reset password');
        return response();
    }
}
