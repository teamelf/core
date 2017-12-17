/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Link } = ReactRouterDOM;
const { Layout, Menu } = antd;
const { Sider, Content } = Layout;

export default class Page extends React.Component {
  constructor (props) {
    if (new.target === Page) {
      throw new Error('ContentComponent cannot be instanced directly!');
    }
    super(props);
    this.navigations = []; // [{path, icon, title}]
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
  view () {
    return <div>page works</div>;
  }
  render () {
    return (
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        {this.navigations.length > 0 &&
          <Sider width={200} style={{background: '#fff'}}>
            <Menu
              mode="inline"
              style={{height: '100%'}}
              selectedKeys={this.getSelectedNav()}>
              {this.navigations.map(o => (
                <Menu.Item key={o.path}>
                  <Link to={o.path}>
                    <Icon type={o.icon}/>{o.title}
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
        }
        <Content style={{padding: '0 24px', minHeight: 280}}>
          {this.view()}
        </Content>
      </Layout>
    )
  }
}
