/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Component from 'teamelf/lib/AbstractComponent';
const { Layout } = antd;
const { Header, Content } = Layout;
import Logo from 'teamelf/component/layout/Logo'
import TopNav from 'teamelf/component/layout/TopNav'
import Routes from 'teamelf/component/layout/Routes'
import SideNav from 'teamelf/component/layout/SideNav'
import Footer from 'teamelf/component/layout/Footer'

export default class extends Component {
  constructor (...args) {
    super(...args);
  }
  render() {
    return (
      <Layout>
        <Header>
          <Logo/>
          <TopNav/>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Routes/>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <SideNav/>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Content>
        <Footer/>
      </Layout>
    );
  }
}
