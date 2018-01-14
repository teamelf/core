/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Link, withRouter } = ReactRouterDOM;
const { Layout, Menu, Icon } = antd;
const { Sider } = Layout;
import Logo from 'teamelf/layout/Logo'

export class SideNav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentNavigation: this.getNavigationFromRoute()
    };
  }
  navigations () {
    return [
      {path: '/home', icon: 'home', title: '工作台'},
      {path: '/member', icon: 'user', title: '成员管理'},
      {path: '/permission', icon: 'key', title: '权限管理'},
      {path: '/config', icon: 'tool', title: '团队信息'},
      {path: '/extension', icon: 'appstore-o', title: '插件管理'}
    ];
  }
  getNavigationFromRoute (path = this.props.location.pathname) {
    for (let nav of this.navigations()) {
      if (path.match(nav.pattern || nav.path)) {
        return nav.path;
      }
    }
    return null;
  }
  render () {
    const logoStyle = {
      position: 'relative',
      height: 64,
      background: '#002140',
      textAlign: 'center',
      overflow: 'hidden'
    };
    return (
      <Sider
        width={256} breakpoint="md"
        style={{boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)', zIndex: '999'}}
        collapsible trigger={null}
        collapsed={this.props.collapsed}
        onCollapse={this.props.toggleCollapsed}
      >
        <div style={logoStyle}>
          <Logo style={{lineHeight: '64px'}}/>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          style={{margin: '16px 0'}}
          selectedKeys={[this.state.currentNavigation]}
        >
          {this.navigations().map(o => (
            <Menu.Item key={o.path}>
              <Link to={o.path}>
                <Icon type={o.icon}/>
                <span>{o.title}</span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(SideNav);
