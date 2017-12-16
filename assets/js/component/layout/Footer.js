/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Component from 'teamelf/lib/Component';
const { Layout } = antd;
const { Footer } = Layout

export default class extends Component {
  render () {
    return (
      <Footer style={{ textAlign: 'center' }}>
        TeamELF &copy;2017 Created by TeamELF
      </Footer>
    )
  }
}
