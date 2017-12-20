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
      name: '',
      role: '',
      hover: false,
      active: false
    };
    this.fetchAuth();
  }
  fetchAuth () {
    axios.get('auth').then(r => {
      this.setState({
        name: r.data.name,
        role: r.data.role.name
      });
    });
  }
  componentWillReceiveProps (nextProps) {
    // change navigation selected status when routes changed
    this.setState({active: nextProps.location.pathname === '/profile'});
  }
  getStyle () {
    const style = {
      padding: '0 20px',
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
          <div style={{display: 'inline-block', marginLeft: 20, paddingTop: (64-20-16)/2, height: 64}}>
            <div style={{lineHeight: '20px'}}>{this.state.name}</div>
            <div style={{lineHeight: '16px', fontSize: '.8em'}}>{this.state.role}</div>
          </div>
        </div>
      </Link>
    );
  }
}

export default withRouter(AuthBar);
