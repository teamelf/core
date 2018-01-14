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
use Symfony\Component\Validator\Constraints\NotBlank;
use TeamELF\Core\Role;
use TeamELF\Http\AbstractController;

class RoleCreateController extends AbstractController
{
    protected $needPermissions = ['role.create'];

    /**
     * handle the request
     *
     * @return Response
     */
    public function handler(): Response
    {
        $data = $this->validate([
            'name' => [
                new NotBlank()
            ],
            'slug' => [
                new NotBlank()
            ],
            'icon' => [],
            'color' => []
        ]);
        $role = new Role($data);
        $role->save();
        return response([
            'id' => $role->getId()
        ]);
    }
}
