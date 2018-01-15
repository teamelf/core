/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Icon, Modal, Button } = antd;
import InfoEditor from 'teamelf/components/InfoEditor';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  renderCard () {
    return (
      <Card
        hoverable
        style={{textAlign: 'center', color: this.props.color, marginBottom: 16}}
        onClick={e => this.setState({visible: true})}
      >
        <Icon
          type={this.props.icon}
          style={{fontSize: 20}}
        />
        <div>{this.props.name}</div>
      </Card>
    );
  }
  edit (key, value) {
    return axios.put('role/' + this.props.id, {[key]: value}).then(r => {
      this.props.done();
      return r;
    });
  }
  deleteRole () {
    Modal.confirm({
      title: '不可恢复',
      content: '确定要删除么？该操作可能无法恢复',
      onOk: () => {
        axios.delete('role/' + this.props.id).then(r => {
          this.props.done();
          this.closeModal();
          return r;
        })
      }
    });
  }
  closeModal () {
    this.setState({visible: false});
  }
  renderModal () {
    return (
      <Modal
        title={'编辑 ' + this.props.name}
        visible={this.state.visible}
        footer={[
          <Button
            onClick={this.closeModal.bind(this)}
          >关闭</Button>,
          <Button
            type="danger"
            onClick={this.deleteRole.bind(this)}
            disabled={!can('role.delete')}
          >删除</Button>
        ]}
        onCancel={this.closeModal.bind(this)}
      >
        <InfoEditor
          label="名称"
          value={this.props.name}
          onEdit={this.edit.bind(this, 'name')}
          readonly={!can('role.update')}
        />
        <InfoEditor
          label="短名"
          value={this.props.slug}
          onEdit={this.edit.bind(this, 'slug')}
          readonly={!can('role.update')}
        />
        <InfoEditor
          label="颜色"
          value={this.props.color}
          onEdit={this.edit.bind(this, 'color')}
          readonly={!can('role.update')}
        />
        <InfoEditor
          label="图标"
          value={this.props.icon}
          onEdit={this.edit.bind(this, 'icon')}
          readonly={!can('role.update')}
        />
      </Modal>
    );
  }
  render () {
    return (
      <div>
        {this.renderCard()}
        {this.renderModal()}
      </div>
    );
  }
}
