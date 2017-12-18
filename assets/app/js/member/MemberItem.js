/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Tag, Divider, Avatar } = antd;

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.member = {
      id: 11,
      name: this.props.match.params.name,
      role: {name: '负责人', color: '#ff5500'},
      email: 'A@teamelf.com', phone: '13012345678'
    };
  }
  render () {
    return (
      <div>
        <Tag
          style={{float: 'right'}}
          color={this.member.role.color}
        >{this.member.role.name}</Tag>
        <h2>{this.member.name}</h2>
        <Divider/>
      </div>
    )
  }
}
