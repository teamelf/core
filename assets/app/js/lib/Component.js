/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class AbstractComponent extends React.Component {
  constructor (props) {
    if (new.target === AbstractComponent) {
      throw new Error('AbstractComponent cannot be instanced directly!');
    }
    super(props);
    this.state = {};
  }
}
