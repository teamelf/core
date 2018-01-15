/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Tag, Icon, Avatar } = antd;
const { Meta } = Card;
import Gender from 'teamelf/components/Gender';

export default class extends React.Component {
  render () {
    return (
      <Card
        style={{marginBottom: 16}}
        hoverable
        title={<div><Gender gender={this.props.gender}/> {this.props.name}</div>}
        extra={<Tag color={this.props.role.color}><Icon type={this.props.role.icon}/> {this.props.role.name}</Tag>}
        onClick={e => can('member.item') && (window.location.href = `/member/${this.props.username}`)}
      >
        <Avatar
          style={{float: 'right'}}
          size="large"
        >{this.props.name.substr(0, 1)}</Avatar>
        <Meta
          style={{marginRight: 50, overflow: 'hidden'}}
          description={(
            <div>
              <div>{this.props.email}</div>
              <div>{this.props.phone}</div>
            </div>
          )}
        />
      </Card>
    )
  }
}
