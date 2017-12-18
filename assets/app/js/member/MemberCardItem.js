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

export default class extends React.Component {
  render () {
    return (
      <Link to={`/member/${this.props.name}`}>
        <Card
          hoverable
          title={this.props.name}
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
