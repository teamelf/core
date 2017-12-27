/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Switch, Route, Redirect } = ReactRouterDOM;
const { Layout } = antd;
import { RedirectAs404 } from 'teamelf/Error'
import SideNav from 'teamelf/layout/SideNav';
import Header from 'teamelf/layout/Header'
import Footer from 'teamelf/layout/Footer'
import Home from 'teamelf/Home';
import Member from 'teamelf/Member';
import Config from 'teamelf/Config';
import Mailer from 'teamelf/Mailer';
import Profile from 'teamelf/Profile';
import Permission from 'teamelf/Permission';
import Extension from 'teamelf/Extension';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.routes = [
      {path: '/home', exact: true, component: Home},
      {path: '/member', component: Member},
      {path: '/config', exact: true, component: Config},
      {path: '/mailer', exact: true, component: Mailer},
      {path: '/profile', exact: true, component: Profile},
      {path: '/permission', exact: true, component: Permission},
      {path: '/extension', exact: true, component: Extension},
      ...(this.routes || [])
    ];
    // use localStorage.sideNavCollapsed to avoid page jump due to collapsed judge
    this.state = {
      collapsed: localStorage.sideNavCollapsed === 'true'
    };
  }
  toggleCollapsed () {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
    localStorage.sideNavCollapsed = collapsed;
  }
  render() {
    return (
      <Layout>
        <SideNav
          collapsed={this.state.collapsed}
          toggleCollapsed={this.toggleCollapsed.bind(this)}
        />
        <Layout>
          <Header
            collapsed={this.state.collapsed}
            toggleCollapsed={this.toggleCollapsed.bind(this)}
          />
          <Layout style={{margin: 24}}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/home"/>}/>
              {this.routes.map(o => <Route path={o.path} exact={o.exact} component={o.component}/>)}
              <Route component={RedirectAs404}/>
            </Switch>
            <Footer/>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
