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
const { Header, Content } = Layout;
import { RedirectAs404 } from 'teamelf/Error'
import Logo from 'teamelf/layout/Logo'
import TopNav from 'teamelf/layout/TopNav'
import AuthBar from 'teamelf/layout/AuthBar'
import Routes from 'teamelf/layout/Routes'
import Footer from 'teamelf/layout/Footer'
import Home from 'teamelf/Home';
import Member from 'teamelf/Member';
import Profile from 'teamelf/Profile';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.routes = [
      {path: '/home', component: Home},
      {path: '/member', component: Member},
      {path: '/profile', exact: true, component: Profile}
    ];
  }
  render() {
    return (
      <Layout>
        <Header style={{position: 'fixed', left: 0, right: 0, zIndex: 999}}>
          <Logo/>
          <TopNav/>
          <AuthBar/>
        </Header>
        <Content style={{marginTop: '60px', padding: '0 50px'}}>
          <Routes/>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home"/>}/>
            {this.routes.map(o => <Route path={o.path} exact={o.exact} component={o.component}/>)}
            <Route component={RedirectAs404}/>
          </Switch>
        </Content>
        <Footer/>
      </Layout>
    );
  }
}