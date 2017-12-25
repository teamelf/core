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
use TeamELF\Http\AbstractController;

class RoleCreateController extends AbstractController
{
    /**
     * handle the request
     *
     * @return Response
     */
    public function handler(): Response
    {
        $data = $this->validate([
            'name' => [],
            'slug' => []
        ]);
        $role = new Role($data);
        $role->save();
        return response([
            'id' => $role->getId()
        ]);
    }
}
