/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Link, withRouter } = ReactRouterDOM;
const { Dropdown, Menu, Icon, Avatar } = antd;

class AuthBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      role: ''
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
  handleMenuClick ({key}) {
    switch (key) {
      case 'logout':
        this.logout();
        break;
      default:
    }
  }
  logout () {
    axios.post('auth/logout').then(r => {
      window.location.reload();
    });
  }
  render () {
    const userNavigations = [
      {path: '/profile', icon: 'user', title: '个人中心'},
      {path: '/security', icon: 'lock', title: '安全设置'}
    ];
    const UserMenu = (
      <Menu onClick={this.handleMenuClick.bind(this)}>
        {userNavigations.map(o => (
          <Menu.Item>
            <Link to={o.path}>
              <Icon type={o.icon}/>
              <span>{o.title}</span>
            </Link>
          </Menu.Item>
        ))}
        <Menu.Divider/>
        <Menu.Item key="logout">
          <Icon type="logout"/>
          <span>安全登出</span>
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={UserMenu}>
        <div className="auth-bar">
          <Avatar style={{marginTop: 16, float: 'left'}}/>
          <div style={{display: 'inline-block', marginLeft: 20, paddingTop: 17, height: 64}}>
            <div style={{lineHeight: '20px'}}>{this.state.name}</div>
            <div style={{lineHeight: '10px', fontSize: '.8em'}}>{this.state.role}</div>
          </div>
        </div>
      </Dropdown>
    );
  }
}

export default withRouter(AuthBar);
