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
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;
use TeamELF\Core\Member;
use TeamELF\Core\PasswordResetToken;
use TeamELF\Core\Role;
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Http\AbstractController;
use TeamELF\Mailer\Mailer;

class MemberCreateController extends AbstractController
{
    protected $needPermissions = ['member.create'];

    /**
     * handle the request
     *
     * @return Response
     * @throws HttpForbiddenException
     */
    public function handler(): Response
    {
        $data = $this->validate([
            'username' => [
                new NotBlank()
            ],
            'email' => [
                new NotBlank(),
                new Email()
            ],
            'name' => [
                new NotBlank()
            ],
            'gender' => [
                new NotBlank()
            ]
        ]);
        $role = Role::findBy(['slug' => $this->request->get('role', 'trainee')]);
        if (!$role) {
            throw new HttpForbiddenException();
        }
        $member = new Member($data);
        $member->role($role);
        $member->save();
        if ($this->request->get('activate', false) === true) {
            try {
                $token = (new PasswordResetToken())
                    ->member($member)
                    ->save();
                Mailer::createWithDefaultMailer()
                    ->subject('欢迎')
                    ->view('mail/welcome.twig', [
                        'token' => $token->getId(),
                        'name' => $member->getName(),
                        'username' => $member->getUsername(),
                        'email' => $member->getEmail()
                    ])->send($member->getEmail());
            } catch (\Exception $exception) {}
        }
        return response();
    }
}
