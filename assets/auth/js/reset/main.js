/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import ResetPassword from 'teamelf/auth/reset/ResetPassword';

const target = document.getElementById('react-render-target-password-reset');
if (target) {
  ReactDOM.render(<ResetPassword/>, target);
}
