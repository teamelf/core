/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Radio, Icon } = antd;

export default class extends React.Component {
  render () {
    return (
      <Radio.Group
        value={this.props.role}
        onChange={this.props.onChoose.bind(this)}
      >
        {window.roles.map(o => (
          <Radio.Button
            style={{color: this.props.role === o.slug ? o.color : null}}
            value={o.slug}
          >
            <Icon type={o.icon}/>
            <span> {o.name}</span>
          </Radio.Button>
        ))}
      </Radio.Group>
    );
  }
}
