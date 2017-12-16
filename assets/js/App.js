/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Component from 'teamelf/lib/Component';
const { Switch, Route } = ReactRouterDOM;
const { Layout } = antd;
const { Header, Content } = Layout;
import { RedirectAs404 } from 'teamelf/component/Error'
import Logo from 'teamelf/component/layout/Logo'
import TopNav from 'teamelf/component/layout/TopNav'
import AuthBar from 'teamelf/component/layout/AuthBar'
import Routes from 'teamelf/component/layout/Routes'
import Footer from 'teamelf/component/layout/Footer'
import Home from 'teamelf/component/Home';
import Member from 'teamelf/component/Member';

export default class extends Component {
  constructor (props) {
    super(props);
    this.navigations = [
      {path: '/member', component: Member, icon: 'user', title: '成员管理'}
    ];
  }
  render() {
    return (
      <Layout>
        <Header style={{position: 'fixed', left: 0, right: 0, zIndex: 999}}>
          <Logo/>
          <TopNav navigations={this.navigations}/>
          <AuthBar/>
        </Header>
        <Content style={{marginTop: '60px', padding: '0 50px'}}>
          <Routes/>
          <Switch>
            <Route exact path="/" component={Home}/>
            {this.navigations.map(o => <Route path={o.path} component={o.component}/>)}
            <Route component={RedirectAs404}/>
          </Switch>
        </Content>
        <Footer/>
      </Layout>
    );
  }
}
