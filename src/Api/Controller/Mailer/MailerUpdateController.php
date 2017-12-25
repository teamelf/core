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
use Symfony\Component\Validator\Constraints\Email;
use TeamELF\Core\Mailer;
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Http\AbstractController;

class MailerUpdateController extends AbstractController
{
    protected $needPermissions = ['mailer.update'];

    /**
     * handle the request
     *
     * @return Response
     * @throws HttpForbiddenException
     */
    public function handler(): Response
    {
        $data = $this->validate([
            'remark' => [],
            'driver' => [],
            'host' => [],
            'port' => [],
            'encryption' => [],
            'username' => [],
            'password' => [],
            'sender' => [
                new Email()
            ]
        ]);
        $mailer = Mailer::find($this->getParameter('id'));
        if (!$mailer) {
            throw new HttpForbiddenException();
        }
        $mailer->update($data);
        return response();
    }
}
