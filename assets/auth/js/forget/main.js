/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import ForgetPassword from 'teamelf/auth/forget/ForgetPassword';

const target = document.getElementById('react-render-target-password-forget');
if (target) {
  ReactDOM.render(<ForgetPassword/>, target);
}
