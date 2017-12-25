<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Api\Controller\Permission;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints\NotBlank;
use TeamELF\Core\Permission;
use TeamELF\Core\Role;
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Http\AbstractController;

class PermissionUpdateController extends AbstractController
{
    protected $needPermissions = ['permission.update'];

    /**
     * handle the request
     *
     * @return Response
     * @throws HttpForbiddenException
     */
    public function handler(): Response
    {
        $data = $this->validate([
            'role_id' => [
                new NotBlank()
            ],
            'permission' => [
                new NotBlank()
            ],
            'value' => []
        ]);
        $role = Role::find($data['role_id']);
        if (!$role) {
            throw new HttpForbiddenException();
        }
        $attr = [
            'role' => $role,
            'permission' => $data['permission']
        ];
        if ($data['value'] === true) {
            (new Permission($attr))->save();
        } else {
            $permission = Permission::findBy($attr);
            if (!$permission) {
                throw new HttpForbiddenException();
            }
            $permission->delete(true);
        }
        return response();
    }
}
