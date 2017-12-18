/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Header from 'teamelf/auth/Header';
const { Layout } = antd;
const { Content, Footer } = Layout;

export default class extends React.Component {
  view () {
    return <div>auth basic layout</div>
  }
  render () {
    const layoutStyle = {
      position: 'relative',
      minHeight: '100vh', padding: '70px 0', textAlign: 'center',
      background: 'url(/static/bg.png) no-repeat center center',
      backgroundSize: '100%'
    };
    const contentStyle = {
      width: 350, maxWidth: '90%', margin: '0 auto'
    };
    const footerStyle = {
      background: 'transparent',
      position: 'absolute', bottom: 0, left: 0, right: 0
    };
    return (
      <Layout style={layoutStyle}>
        <Content style={contentStyle}>
          <Header/>
          {this.view()}
        </Content>
        <Footer style={footerStyle}>
          <span> &copy;2017 Created by </span>
          <a href="https://github.com/teamelf/teamelf" target="_blank">TeamELF</a>
        </Footer>
      </Layout>
    );
  };
}
