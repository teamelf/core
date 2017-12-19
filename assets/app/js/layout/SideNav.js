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

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.navigations = [
      {icon: 'home', title: '概览', children: [
        {path: '/home', icon: 'home', title: '工作台'}
      ]},
      {icon: 'user', title: '成员管理', children: [
        {path: '/member', icon: 'user', title: '成员列表'}
      ]}
    ];
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
        >
          {this.navigations.map((grp, idx) => (
            <Menu.SubMenu
              key={`menu-${idx}`}
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
