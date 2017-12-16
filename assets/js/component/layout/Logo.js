/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Link } = ReactRouterDOM;
import Component from 'teamelf/lib/Component';

export default class extends Component {
  render () {
    return (
      <Link
        to="/"
        style={{
          width: 120, height: 31,
          background: 'rgba(255,255,255,.2)',
          margin: '16px 28px 16px 0',
          float: 'left'
        }}
      />
    )
  }
}
