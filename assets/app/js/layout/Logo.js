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
      <Link to="/home" style={this.props.style}>
        <img
          style={{height: 45, verticalAlign: 'middle', display: 'inline-block'}}
          src={window.config.logo}
        />
        <div
          style={{marginLeft: 10, color: '#fff', fontSize: 16, display: 'inline-block'}}
        >{window.config.name}</div>
      </Link>
    )
  }
}
