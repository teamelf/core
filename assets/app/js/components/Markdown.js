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
      <div
        style={{marginBottom: 16, ...this.props.style}}
        className="markdown"
        dangerouslySetInnerHTML={{__html: marked(this.props.content || '')}}
      />
    );
  }
}
