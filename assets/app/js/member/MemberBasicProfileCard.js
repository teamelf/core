/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card } = antd;
import InfoEditor from 'teamelf/components/InfoEditor';

export default class extends React.Component {
  render () {
    return (
      <Card
        title="基本信息"
        style={{marginBottom: 16}}
      >
        <InfoEditor
          label="登录名"
          value={this.props.username}
          readonly
        />
        <InfoEditor
          label="邮　箱"
          value={this.props.email}
          onEdit={this.props.onEdit.bind(this, 'email')}
          readonly={!can('member.update')}
        />
        <InfoEditor
          label="手　机"
          value={this.props.phone}
          onEdit={this.props.onEdit.bind(this, 'phone')}
          readonly={!can('member.update')}
        />
      </Card>
    );
  }
}
