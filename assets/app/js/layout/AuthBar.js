/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Link, withRouter } = ReactRouterDOM;
const { Avatar } = antd;

class AuthBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hover: false,
      active: this.props.location.pathname === '/profile'
    };
  }
  getStyle () {
    const style = {
      padding: '0 16px',
      cursor: 'pointer',
      transition: 'background .3s',
    };
    if (this.state.active || this.state.hover) {
      return {
        ...style,
        background: '#e6f7ff'
      };
    } else {
      return style;
    }
  }
  handleHover (e) {
    this.setState({hover: e.type === 'mouseenter'})
  }
  render () {
    return (
      <Link to="/profile">
        <div
          style={this.getStyle()}
          onMouseEnter={this.handleHover.bind(this)}
          onMouseLeave={this.handleHover.bind(this)}
        >
          <Avatar style={{marginTop: 16, float: 'left'}}/>
          <div style={{display: 'inline-block', marginLeft: 16, paddingTop: (64-16-16)/2, height: 64}}>
            <div style={{lineHeight: '20px'}}>{window.auth.name}</div>
            <div style={{lineHeight: '16px', fontSize: '.8em'}}>{window.auth.role.name}</div>
          </div>
        </div>
      </Link>
    );
  }
}

export default withRouter(AuthBar);
