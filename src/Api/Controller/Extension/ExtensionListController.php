<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Api\Controller\Extension;

use Symfony\Component\HttpFoundation\Response;
use TeamELF\Core\Extension;
use TeamELF\Http\AbstractController;

class ExtensionListController extends AbstractController
{
    protected $needPermissions = ['extension.list'];

    /**
     * handle the request
     *
     * @return Response
     */
    public function handler(): Response
    {
        $response = [];
        foreach (Extension::all() as $extension) {
            $response[] = [
                'package' => $extension->getPackage(),
                'version' => $extension->getVersion(),
                'description' => $extension->getDescription(),
                'isActivated' => $extension->isActivated()
            ];
        }
        return response($response);
    }
}
