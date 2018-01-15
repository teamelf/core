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

class RoleUpdateController extends AbstractController
{
    protected $needPermissions = ['role.update'];

    /**
     * handle the request
     *
     * @return Response
     * @throws HttpForbiddenException
     */
    public function handler(): Response
    {
        $data = $this->validate([
            'name' => [],
            'slug' => [],
            'color' => [],
            'icon' => [],
        ]);
        $role = Role::find($this->getParameter('id'));
        if (!$role) {
            throw new HttpForbiddenException();
        }
        $role->update($data);
        $this->log('info', 'Update role [' . $role->getSlug() . ']');
        return response();
    }
}
