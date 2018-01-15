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
        $member = Member::findBy($data);
        if ($member) {
            $this->log('info', '[' . $data['email'] . '] get password reset token');
            $token = (new PasswordResetToken())
                ->member($member)
                ->save();
            app()->dispatch(new VerifyTokenNeedsToBeSent($member, $token->getId()));
        } else {
            $this->log('info', '[' . $data['email'] . '] failed to get password reset token');
            sleep(mt_rand(1, 3)); // avoid judging status through time used
        }
        return response();
    }
}
