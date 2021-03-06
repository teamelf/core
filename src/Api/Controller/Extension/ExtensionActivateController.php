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
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Http\AbstractController;

class ExtensionActivateController extends AbstractController
{
    protected $needPermissions = ['extension.activate'];

    /**
     * handle the request
     *
     * @return Response
     * @throws HttpForbiddenException
     */
    public function handler(): Response
    {
        $extension = Extension::findBy([
            'vendor' => $this->getParameter('vendor'),
            'package' => $this->getParameter('package')
        ]);
        if (!$extension) {
            throw new HttpForbiddenException();
        }
        if ($this->request->get('activation') === true) {
            $extension->activate();
            $this->log('info', 'Activate extension [' . $extension->getPackage() . ']');
        } else {
            $extension->deactivate();
            $this->log('info', 'Deactivate extension [' . $extension->getPackage() . ']');
        }
        return response();
    }
}
