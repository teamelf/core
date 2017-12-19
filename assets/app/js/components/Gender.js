/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Icon } = antd;

export default class extends React.Component {
  render () {
    if (this.props.gender) {
      return <Icon type="man"/>;
    } else {
      return <Icon type="woman"/>
    }
  }
}
