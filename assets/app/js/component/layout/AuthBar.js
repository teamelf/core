/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Link, withRouter } = ReactRouterDOM;
import Component from 'teamelf/lib/Component';
const { Menu, Icon, Avatar } = antd;

class AuthBar extends Component {
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
    console.log('logout');
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
            <span style={{marginLeft: 10}}>鹳狸猿</span>
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
