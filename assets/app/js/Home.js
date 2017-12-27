/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Page from 'teamelf/layout/Page';

export default class extends Page {
  title () {
    return window.config.name;
  }
  description () {
    return window.config.description;
  }
  view () {
    return <div>HOME</div>
  }
}
