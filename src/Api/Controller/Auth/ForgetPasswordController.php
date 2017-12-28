<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Api\Controller\Auth;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;
use TeamELF\Core\Member;
use TeamELF\Core\PasswordResetToken;
use TeamELF\Event\VerifyTokenNeedsToBeSent;
use TeamELF\Http\AbstractController;
use TeamELF\Mailer\Mailer;

class ForgetPasswordController extends AbstractController
{
    protected $needLogin = false;

    /**
     * handle the request
     *
     * @return Response
     */
    public function handler(): Response
    {
        $data = $this->validate([
            'email' => [
                new NotBlank(),
                new Email()
            ]
        ]);
        if (count($data) > 0) {
            $member = Member::findBy($data);
            if ($member) {
                $token = (new PasswordResetToken())
                    ->member($member)
                    ->save();
                app()->dispatch(new VerifyTokenNeedsToBeSent($member, $token));
            } else {
                sleep(mt_rand(1, 3)); // avoid judging status through time used
            }
        } else {
            sleep(mt_rand(1, 3)); // avoid judging status through time used
        }
        return response();
    }
}
