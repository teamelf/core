/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Button, Tag } = antd;
import InfoEditor from 'teamelf/components/InfoEditor';

export default class extends React.Component {
  render () {
    return (
      <Card
        style={{marginBottom: 20}}
        title={this.props.name}
      >
        <div>更新站点信息 config.update</div>
        <div>创建新成员 member.create</div>
        <div>成员升级 member.role.update</div>
        <div>成员密码重设 member.password.reset</div>
      </Card>
    );
  }
}
