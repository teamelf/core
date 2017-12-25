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
use TeamELF\Core\Role;
use TeamELF\Http\AbstractController;

class MemberListController extends AbstractController
{
    protected $needPermissions = ['member.list'];

    /**
     * handle the request
     *
     * @return Response
     */
    public function handler(): Response
    {
        $response = [];
        $roles = [];
        $role_slugs = $this->request->get('roles', '');
        if (!$role_slugs) {
            $members = Member::all();
        } else {
            foreach (explode(',', $role_slugs) as $role_slug) {
                $roles[] = Role::findBy(['slug' => $role_slug]);
            }
            $members = Member::where(['role' => $roles]);
        }
        foreach ($members as $member) {
            $r = $member->getRole();
            $response[] = [
                'id' => $member->getId(),
                'username' => $member->getUsername(),
                'email' => $member->getEmail(),
                'phone' => $member->getPhone(),
                'name' => $member->getName(),
                'gender' => $member->getGender(),
                'role' => [
                    'name' => $r->getName(),
                    'color' => $r->getColor(),
                    'icon' => $r->getIcon()
                ]
            ];
        }
        return response($response);
    }
}
