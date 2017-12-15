/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Component from 'teamelf/lib/AbstractComponent';
const { Menu, Icon } = antd;

export default class extends Component {
  render () {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{lineHeight: '64px'}}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item style={{float: 'right'}}>
          <Icon type="logout"/>
          登出
        </Menu.Item>
      </Menu>
    )
  }
}
