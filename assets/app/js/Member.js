/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Switch, Route } = ReactRouterDOM;
import Page from 'teamelf/layout/Page';
import { RedirectAs404 } from 'teamelf/Error'
import MemberList from 'teamelf/member/MemberList';
import MemberItem from 'teamelf/member/MemberItem';

export default class extends Page {
  constructor (props) {
    super(props);
    this.routes = [
      {
        path: '/member',
        exact: true,
        component: MemberList
      },
      {
        path: '/member/:id',
        exact: true,
        component: MemberItem
      }
    ];
  }
  view () {
    return (
      <Switch>
        {this.routes.map(o => <Route exact={o.exact}  path={o.path} component={o.component}/>)}
        <Route component={RedirectAs404}/>
      </Switch>
    );
  }
}
