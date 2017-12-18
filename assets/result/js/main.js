/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Result from 'teamelf/result/Result';

const target = document.getElementById('react-render-target-result');
if (target) {
  ReactDOM.render(<Result/>, target);
}
