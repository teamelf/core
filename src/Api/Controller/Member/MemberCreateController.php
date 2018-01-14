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
use TeamELF\Core\Role;
use TeamELF\Event\WelcomeMessageNeedsToBeSent;
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Http\AbstractController;

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
            ],
            'role' => [
                new NotBlank()
            ]
        ]);
        $data['role'] = Role::findBy(['slug' => $data['role']]);
        if (!$data['role']) {
            throw new HttpForbiddenException();
        }
        $member = new Member($data);
        $member->save();
        if ($this->request->get('activate', false) === true) {
            app()->dispatch(new WelcomeMessageNeedsToBeSent($member));
        }
        return response();
    }
}
