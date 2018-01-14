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
use TeamELF\Core\Config;
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Http\AbstractController;
use PascalDeVink\ShortUuid\ShortUuid;

class LogoUpdateController extends AbstractController
{
    protected $needPermissions = ['config.update'];

    /**
     * handle the request
     *
     * @return Response
     * @throws HttpForbiddenException
     */
    public function handler(): Response
    {
        $logoFile = $this->request->files->get('logo');
        $filename = ShortUuid::uuid4() . '.' . $logoFile->guessExtension();
        $directory = app()->getStoragePath() . '/public';
        $logoFile->move($directory, $filename);
        $config = Config::findBy(['key' => 'logo']);
        $config->value('/storage/' . $filename);
        $config->save();
        return response();
    }
}
