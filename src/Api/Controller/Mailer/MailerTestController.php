<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Api\Controller\Mailer;

use Symfony\Component\HttpFoundation\Response;
use TeamELF\Core\Mailer;
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Http\AbstractController;

class MailerTestController extends AbstractController
{
    /**
     * handle the request
     *
     * @return Response
     * @throws HttpForbiddenException
     */
    public function handler(): Response
    {
        $mailer = Mailer::find($this->getParameter('id'));
        if (!$mailer) {
            throw new HttpForbiddenException();
        }
        $m = new \TeamELF\Mailer\Mailer($mailer);
        return response([
            'connection' => $m->test()
        ]);
    }
}
