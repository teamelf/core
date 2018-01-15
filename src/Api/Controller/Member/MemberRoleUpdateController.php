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
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Exception\HttpNotFoundException;
use TeamELF\Http\AbstractController;

class MemberRoleUpdateController extends AbstractController
{
    protected $needPermissions = ['member.role.update'];

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
            'role' => []
        ]);
        $member = Member::search($this->getParameter('username'));
        if (!$member) {
            throw new HttpNotFoundException();
        }
        $data['role'] = Role::findBy(['slug' => $data['role']]);
        if (!$data['role']) {
            throw new HttpForbiddenException();
        }
        $member->update($data);
        $this->log('info', 'Update member [' . $member->getUsername() . ']\'s role to [' . $data['role']->getSlug() . ']');
        return response();
    }
}
