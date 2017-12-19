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
    let style = Object.assign({}, {
      marginRight: 20
    }, this.props.style);
    return (
      <Link to="/home" style={style}>
        <img
          style={{height: 45, width: 45}}
          src={window.config.logo}
        />
        <span
          style={{marginLeft: 10, color: '#fff'}}
        >{window.config.name}</span>
      </Link>
    )
  }
}
