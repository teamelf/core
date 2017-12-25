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
use TeamELF\Core\Permission;
use TeamELF\Http\AbstractController;

class PermissionListController extends AbstractController
{
    protected $needPermissions = ['permission.list'];

    /**
     * handle the request
     *
     * @return Response
     */
    public function handler(): Response
    {
        $response = [];
        foreach (Permission::all() as $permission) {
            $response[] = [
                'id' => $permission->getId(),
                'permission' => $permission->getPermission(),
                'role' => [
                    'id' => $permission->getRole()->getId(),
                    'name' => $permission->getRole()->getName(),
                    'slug' => $permission->getRole()->getSlug()
                ]
            ];
        }
        return response($response);
    }
}
