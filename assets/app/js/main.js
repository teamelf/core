/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { BrowserRouter, Route } = ReactRouterDOM;
import App from 'teamelf/App';
import Error from 'teamelf/Error';

const app = (
  <BrowserRouter>
    <Route render={({ location }) => (
      location.isError
        ? <Error error={location.error}/>
        : <App/>
    )}/>
  </BrowserRouter>
);

const target = document.getElementById('react-render-target-app');
if (target) {
  ReactDOM.render(app, target);
}
