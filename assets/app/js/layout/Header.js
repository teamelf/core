/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Layout, Icon } = antd;
const { Header } = Layout;
import AuthBar from 'teamelf/layout/AuthBar';

export default class extends React.Component {
  render () {
    const style = {
      position: 'relative',
      background: '#fff',
      boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)',
      padding: '0 24px 0 0'
    };
    return (
      <Header style={style}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggleCollapsed}
        />
        <div style={{float: 'right'}}>
          <AuthBar/>
        </div>
      </Header>
    );
  }
}
