/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Link } = ReactRouterDOM;
const { Card, Tag, Avatar } = antd;
const { Meta } = Card;
import Gender from 'teamelf/components/Gender';

export default class extends React.Component {
  render () {
    return (
      <Link to={`/member/${this.props.username}`}>
        <Card
          hoverable
          title={<div><Gender gender={this.props.gender}/> {this.props.name}</div>}
          extra={<Tag color={this.props.role.color}>{this.props.role.name}</Tag>}
        >
          <Avatar
            style={{float: 'right'}}
            size="large"
          >{this.props.name.substr(0, 1)}</Avatar>
          <Meta
            description={(
              <div>
                <div>{this.props.email}</div>
                <div>{this.props.phone}</div>
              </div>
            )}
          />
        </Card>
      </Link>
    )
  }
}
