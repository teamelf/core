/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Redirect } = ReactRouterDOM;

export class RedirectAs404 extends React.Component {
  render () {
    const query = new URLSearchParams(window.location.search);
    query.set('error', 404);
    query.set('message', 'Not found');
    return (
      <Redirect to={{
        ...this.props.location,
        search: '?' + query.toString()
      }}/>
    )
  }
}
