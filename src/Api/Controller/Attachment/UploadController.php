<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Api\Controller\Attachment;

use Symfony\Component\HttpFoundation\Response;
use TeamELF\Exception\HttpNotFoundException;
use TeamELF\Exception\HttpValidationException;
use TeamELF\Http\AbstractController;
use PascalDeVink\ShortUuid\ShortUuid;

class UploadController extends AbstractController
{
    protected $needPermissions = ['bulletin.update'];

    /**
     * handle the request
     *
     * @return Response
     * @throws HttpNotFoundException
     * @throws HttpValidationException
     */
    public function handler(): Response
    {
        $attachment = $this->request->files->get('attachment');
        if (!$attachment) {
            throw new HttpValidationException([
                'attachment' => [
                    'attachment field has to be a file'
                ]
            ]);
        }
        $date = date('Ymd', time());
        $directory = app()->getStoragePath() . '/public/' . $date;
        $filename = ShortUuid::uuid4() . '.' . $attachment->guessExtension();
        $attachment->move($directory, $filename);
        $this->log('info', 'Upload attachment [' . $filename . ']');
        return response([
            'url' => '/storage/' . $date . '/' . $filename,
        ]);
    }
}
