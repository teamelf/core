/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Layout, Button, Icon } = antd;
const { Content, Footer } = Layout;
import Header from 'teamelf/login/Header';
import LoginForm from 'teamelf/login/LoginForm';

class LoginPage extends React.Component {
  constructor (props) {
    super(props);
    this.loginInterfaces = [
      {icon: <Icon type="qq"/>, to: 'qq'},
      {icon: <Icon type="wechat"/>, to: 'wechat'},
      {icon: <Icon type="gitlab"/>, to: 'gitlab'},
      {icon: <Icon type="github"/>, to: 'github'},
    ];
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
          <LoginForm/>
          <div className="clearfix">
            <div className="float-left" style={{lineHeight: '50px'}}>
              <span>其他登陆方式</span>
              {this.loginInterfaces.map(o => (
                <Button
                  style={{marginLeft: 8, paddingTop: 6}}
                  type="ghost" shape="circle"
                  href={o.to}
                >{o.icon}</Button>
              ))}
            </div>
            <div className="float-right" style={{lineHeight: '50px'}}>
              <a href="/login">加入我们</a>
            </div>
          </div>
        </Content>
        <Footer style={footerStyle}>
          <span> &copy;2017 Created by </span>
          <a href="https://github.com/teamelf/teamelf" target="_blank">TeamELF</a>
        </Footer>
      </Layout>
    );
  }
}

const target = document.getElementById('react-render-target-login');
if (target) {
  ReactDOM.render(<LoginPage/>, target);
}
