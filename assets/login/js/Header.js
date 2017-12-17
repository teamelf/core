/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class extends React.Component {
  render () {
    return (
      <div>
        <a href="/"><img height="100px" src=""/>
        <h2 style={{padding: '20px 0'}}>{window.config.name}</h2></a>
      </div>
    );
  }
}
