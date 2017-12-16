/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Login from 'teamelf/login/Login';

const target = document.getElementById('react-render-target-login');
if (target) {
  ReactDOM.render(<Login/>, target);
}
