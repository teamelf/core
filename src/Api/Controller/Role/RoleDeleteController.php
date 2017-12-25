<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Api\Controller\Role;

use Symfony\Component\HttpFoundation\Response;
use TeamELF\Core\Role;
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Http\AbstractController;

class RoleDeleteController extends AbstractController
{
    protected $needPermissions = ['role.delete'];

    /**
     * handle the request
     *
     * @return Response
     * @throws HttpForbiddenException
     */
    public function handler(): Response
    {
        $role = Role::find($this->getParameter('id'));
        if (!$role) {
            throw new HttpForbiddenException();
        }
        $role->delete(true);
        return response();
    }
}
