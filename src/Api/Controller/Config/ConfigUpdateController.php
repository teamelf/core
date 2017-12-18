<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Api\Controller\Config;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints\NotBlank;
use TeamELF\Core\Config;
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Http\AbstractController;

class ConfigUpdateController extends AbstractController {
    /**
     * handle the request
     *
     * @return Response
     * @throws HttpForbiddenException
     */
    public function handler(): Response
    {
        $data = $this->validate([
            'value' => [
                new NotBlank()
            ]
        ]);
        $config = Config::findBy(['key' => $this->getParameter('key')]);
        if (!$config) {
            throw new HttpForbiddenException();
        }
        $config->value($data['value']);
        $config->save();
        return response();
    }
}
