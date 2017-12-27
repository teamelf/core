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
    this.navigations = [
      {key: 'home', icon: 'home', title: '概览', children: [
        {path: '/home', icon: 'home', title: '工作台'}
      ]},
      {key: 'user', icon: 'user', title: '成员', children: [
        {path: '/member', pattern: /^\/member(\/[^\/]*)?$/, icon: 'user', title: '编辑成员'},
        {path: '/permission', icon: 'key', title: '成员组权限管理'}
      ]},
      {key: 'config', icon: 'tool', title: '站点', children: [
        {path: '/config', icon: 'tool', title: '基本设置'},
        {path: '/mailer', icon: 'mail', title: '邮箱设置'},
        {path: '/extension', icon: 'tool', title: '插件管理'}
      ]},
      ...(this.navigations || [])
    ];
    this.state = {
      ...this.getNavigationFromRoute()
    };
  }
  componentWillReceiveProps (nextProps) {
    // change navigation selected status when routes changed
    let navigations = this.getNavigationFromRoute(nextProps.location.pathname);
    if (nextProps.collapsed) {
      navigations.openedNavigationGroup = null;
    }
    this.setState(navigations);
  }
  getNavigationFromRoute (path = this.props.location.pathname) {
    for (let nav of this.navigations) {
      for (let o of nav.children) {
        if (path.match(o.pattern || o.path)) {
          return {
            openedNavigationGroup: nav.key,
            currentNavigation: o.path
          }
        }
      }
    }
    return {
      openedNavigationGroup: null,
      currentNavigation: null
    }
  }
  handleOpenNavigation (keys) {
    let openedNavigationGroup = this.state.openedNavigationGroup;
    if (keys.length === 0 || openedNavigationGroup === keys[keys.length - 1]) {
      openedNavigationGroup = null;
    } else {
      openedNavigationGroup = keys[keys.length - 1];
    }
    this.setState({openedNavigationGroup});
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
          style={{margin: '20px 0'}}
          openKeys={[this.state.openedNavigationGroup]}
          onOpenChange={this.handleOpenNavigation.bind(this)}
          selectedKeys={[this.state.currentNavigation]}
        >
          {this.navigations.map((grp, idx) => (
            <Menu.SubMenu
              key={grp.key}
              title={<span><Icon type={grp.icon}/><span>{grp.title}</span></span>}
            >
              {grp.children.map(o => (
                <Menu.Item key={o.path}>
                  <Link to={o.path}>
                    <Icon type={o.icon}/>
                    <span>{o.title}</span>
                  </Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(SideNav);
