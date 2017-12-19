/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Link, withRouter } = ReactRouterDOM;
const { Menu, Icon } = antd;

class TopNav extends React.Component {
  constructor (props) {
    super(props);
    this.navigations = [
      {path: '/home', icon: <Icon type="home"/>, title: '概览'},
      {path: '/member', icon: <Icon type="user"/>, title: '成员管理'}
    ];
  }
  getSelectedNav () {
    let path = this.props.location.pathname;
    for (let nav of this.navigations) {
      if (path.match(nav.path)) {
        return nav.path;
      }
    }
    return null;
  }
  render () {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        style={{lineHeight: '64px', float: 'left'}}
        selectedKeys={this.getSelectedNav()}
      >
        {this.navigations.map(o => (
          <Menu.Item key={o.path}>
            <Link to={o.path}>{o.icon} {o.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    )
  }
}

export default withRouter(TopNav);
