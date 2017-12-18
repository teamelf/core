/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Link, withRouter } = ReactRouterDOM;
const { Menu, Icon, Avatar } = antd;

class AuthBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      role: ''
    };
    this.fetchAuth()
  }
  fetchAuth () {
    axios.get('auth').then(r => {
      this.setState({
        name: r.data.name,
        role: r.data.role.name
      });
    })
  }
  handleMenuClick ({key}) {
    switch (key) {
      case 'logout':
        this.logout();
        break;
      default:
    }
  }
  getSelectedNav () {
    let path = this.props.location.pathname;
    if (path.match('/profile')) {
      return 'profile';
    }
    return null;
  }
  logout () {
    axios.post('auth/logout').then(r => {
      window.location.reload();
    });
  }
  render () {
    return (
      <Menu
        theme="dark" mode="horizontal"
        onClick={this.handleMenuClick.bind(this)}
        style={{lineHeight: '64px', float: 'right'}}
        selectedKeys={this.getSelectedNav()}
      >
        <Menu.Item key="profile">
          <Link to="/profile">
            <Avatar style={{marginTop: 16, float: 'left'}}/>
            <div style={{display: 'inline-block', marginLeft: 20, paddingTop: 17, height: 64}}>
              <div style={{lineHeight: '20px'}}>{this.state.name}</div>
              <div style={{lineHeight: '10px', fontSize: '.8em'}}>{this.state.role}</div>
            </div>
          </Link>
        </Menu.Item>
        <Menu.Item key="logout">
          <Icon type="logout"/>
          安全登出
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(AuthBar);
