/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

moment.locale('zh-cn');
axios.defaults.baseURL = '/api/';

const { BrowserRouter, Route } = ReactRouterDOM;
import App from 'teamelf/App';
import Error from 'teamelf/component/Error';

ReactDOM.render((
  <BrowserRouter>
    <Route render={({ location }) => (
      location.isError
        ? <Error error={location.error}/>
        : <App/>
    )}/>
  </BrowserRouter>
), document.getElementById('app'));
