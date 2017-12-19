<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Api\Controller\Helper;

use Overtrue\Pinyin\Pinyin;
use Symfony\Component\HttpFoundation\Response;
use TeamELF\Http\AbstractController;

class PinyinController extends AbstractController
{
    /**
     * handle the request
     *
     * @return Response
     */
    public function handler(): Response
    {
        $chinese = $this->request->get('chinese', '');
        $pinyin = new Pinyin();
        return response([
            'chinese' => $chinese,
            'pinyin' => $pinyin->convert($chinese)
        ]);
    }
}
