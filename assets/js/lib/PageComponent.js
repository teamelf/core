/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Component from 'teamelf/lib/Component';
const { Layout, Menu } = antd;
const { Sider, Content } = Layout;

export default class ContentComponent extends Component {
  constructor (props) {
    if (new.target === ContentComponent) {
      throw new Error('ContentComponent cannot be instanced directly!');
    }
    super(props);
    this.navigations = [];
    this.state = {
      selectedNav: null
    };
  }
  componentDidMount () {
    this.handleSelectedNav();
  }
  handleSelectedNav () {
    let path = window.location.pathname;
    for (let nav of this.navigations) {
      if (path.match(nav.path)) {
        this.setState({selectedNav: nav.path});
        return nav.path;
      }
    }
    this.setState({selectedNav: null});
    return null;
  }
  view () {
    return <div>Content</div>;
  }
  render () {
    return (
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        {this.navigations.length > 0 &&
          <Sider width={200} style={{background: '#fff'}}>
            <Menu mode="inline" style={{height: '100%'}} selectedKeys={this.state.selectedNav}>
              {this.navigations.map(o => <Menu.Item key={o.path}>{o.title}</Menu.Item>)}
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
