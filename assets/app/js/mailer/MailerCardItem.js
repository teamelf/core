/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Button, Tag, Divider } = antd;
export default class extends React.Component {
  renderCardHeader () {
    return (
      <div>
        {this.props.default && (
          <Tag color="red">默认</Tag>
        )}
        <span>{this.props.sender}</span>
      </div>
    );
  }
  renderTools () {
    return (
      <div>
        {this.props.default && (
          <Button style={{marginRight: 20}}>设为默认</Button>
        )}
        <Button type="primary" style={{marginRight: 20}}>编辑</Button>
        <Button type="danger">删除</Button>
      </div>
    );
  }
  render () {
    return (
      <Card
        title={this.renderCardHeader()}
        extra={this.props.host}
        actions={[
          '设为默认',
          '编辑',
          '删除'
        ]}
      >
        <div style={{color: 'gray'}}>备注：{this.props.remark}</div>
        <Divider/>
        <div>{this.props.driver}</div>
        <div>{this.props.encryption}</div>
        <div>{this.props.username}</div>
        <div>{this.props.password}</div>
        <div>{this.props.port}</div>
      </Card>
    );
  }
}
