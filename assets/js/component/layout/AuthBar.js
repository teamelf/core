/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Component from 'teamelf/lib/Component';
const { Menu, Icon, Avatar } = antd;

export default class extends Component {
  handleMenuClick ({key}) {
    switch (key) {
      case 'logout':
        this.logout();
        break;
      default:
    }
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
      >
        <Menu.Item key="user">
          <Avatar style={{marginTop: 16, float: 'left'}}/>
          <span style={{marginLeft: 10}}>鹳狸猿</span>
        </Menu.Item>
        <Menu.Item key="logout">
          <Icon type="logout"/>
          安全登出
        </Menu.Item>
      </Menu>
    )
  }
}
