/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Link } = ReactRouterDOM;

export default class extends React.Component {
  render () {
    return (
      <div>
        <Link to="/member/1">to 1</Link> <br/>
        <Link to="/member/2">to 2</Link> <br/>
        <Link to="/member/3">to 3</Link> <br/>
      </div>
    );
  }
}
