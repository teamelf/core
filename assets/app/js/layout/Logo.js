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
    const imgStyle = {
      display: 'inline-block',
      height: 64,
      paddingTop: (64 - 45) / 2
    };
    const textStyle = {
      display: 'inline-block',
      marginLeft: 10,
      color: '#fff',
      fontSize: 16
    };
    return (
      <Link to="/home" style={this.props.style}>
        <div style={imgStyle}>
          <img height="45px" src={window.config.logo}/>
        </div>
        <div style={textStyle}>{window.config.name}</div>
      </Link>
    )
  }
}
