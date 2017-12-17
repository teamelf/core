/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Redirect } = ReactRouterDOM;

export default class extends React.Component {
  render () {
    return (
      <div>
        <h1>ERROR</h1>
        <div>code: {this.props.error.code}</div>
        <div>message: {this.props.error.message}</div>
      </div>
    );
  }
}

export class RedirectAs404 extends React.Component {
  render () {
    return (
      <Redirect to={Object.assign({}, this.props.location, {
        isError: true,
        error: {
          code: 404,
          message: 'Not found'
        }
      })}/>
    )
  }
}
