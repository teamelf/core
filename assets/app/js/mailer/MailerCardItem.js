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
  setAsDefault () {
    axios.put(`/mailer/${this.props.id}/default`).then(r => {
      this.props.done();
      antd.notification.success({
        message: '默认发信邮箱设置成功'
      })
    })
  }
  delete () {
    antd.Modal.confirm({
      title: '不可恢复',
      content: '确定要删除么？该操作可能无法恢复',
      onOk: () => {
        axios.delete('/mailer/' + this.props.id).then(r => {
          this.props.done();
          antd.notification.success({
            message: '删除成功'
          })
        })
      }
    });
  }
  edit (key, value) {
    return axios.put('/mailer/' + this.props.id, {[key]: value}).then(r => {
      this.props.done();
      return r;
    });
  }
  render () {
    return (
      <Card
        style={{marginBottom: 20}}
        title={this.props.sender}
        extra={this.props.default && <Tag color="red">默认</Tag>}
        actions={[
          <Button
            ghost type="primary"
            disabled={this.props.default}
            onClick={this.setAsDefault.bind(this)}
          >设为默认</Button>,
          <Button
            type="danger"
            onClick={this.delete.bind(this)}
          >删除</Button>
        ]}
      >
        <InfoEditor
          label="驱动"
          value={this.props.driver}
          onEdit={this.edit.bind(this, 'driver')}
          type="radio"
          options={[
            {label: 'SMTP', value: 'smtp'},
            {label: 'POP3', value: 'pop3'},
            {label: 'IMAP', value: 'imap'}
          ]}
        />
        <InfoEditor
          label="主机"
          value={this.props.host}
          onEdit={this.edit.bind(this, 'host')}
        />
        <InfoEditor
          label="端口"
          value={this.props.port}
          onEdit={this.edit.bind(this, 'port')}
        />
        <InfoEditor
          label="加密方式"
          value={this.props.encryption}
          onEdit={this.edit.bind(this, 'encryption')}
          type="radio"
          options={[
            {label: 'SSL', value: 'ssl'},
            {label: 'TLS', value: 'tls'},
            {label: '不加密', value: ''}
          ]}
        />
        <InfoEditor
          label="登录名"
          value={this.props.username}
          onEdit={this.edit.bind(this, 'username')}
        />
        <InfoEditor
          label="密码"
          value={this.props.password}
          onEdit={this.edit.bind(this, 'password')}
        />
        <InfoEditor
          label="发信邮箱"
          value={this.props.sender}
          onEdit={this.edit.bind(this, 'sender')}
        />
        <InfoEditor
          label="备注"
          value={this.props.remark}
          onEdit={this.edit.bind(this, 'remark')}
        />
      </Card>
    );
  }
}
