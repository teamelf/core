/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Component from 'teamelf/lib/Component';

export default class extends Component {
  render () {
    return <div>member {this.props.match.params.id}</div>
  }
}
