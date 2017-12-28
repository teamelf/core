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
      visible: false,
      name: '',
      slug: '',
      color: '',
      icon: ''
    };
  }
  renderCard () {
    return (
      <Card
        hoverable
        style={{textAlign: 'center', color: '#aaa', marginBottom: 16}}
        onClick={e => this.setState({visible: true})}
      >
        <Icon
          type="plus"
          style={{fontSize: 20}}
        />
        <div>添加</div>
      </Card>
    );
  }
  edit (key, value) {
    return new Promise((resolve, reject) => {
      this.setState({[key]: value}, () => {
        resolve();
      });
    });
  }
  createRole () {
    const role = {
      name: this.state.name,
      slug: this.state.slug,
      color: this.state.color,
      icon: this.state.icon
    };
    return axios.post('role', role).then(r => {
      this.props.done();
      this.closeModal();
      return r;
    })
  }
  closeModal () {
    this.setState({visible: false});
  }
  renderModal () {
    return (
      <Modal
        title="添加新角色"
        visible={this.state.visible}
        onOk={this.createRole.bind(this)}
        onCancel={this.closeModal.bind(this)}
        okText="确认创建"
      >
        <InfoEditor
          label="名称"
          value={this.state.name}
          onEdit={this.edit.bind(this, 'name')}
        />
        <InfoEditor
          label="短名"
          value={this.state.slug}
          onEdit={this.edit.bind(this, 'slug')}
        />
        <InfoEditor
          label="颜色"
          value={this.state.color}
          onEdit={this.edit.bind(this, 'color')}
        />
        <InfoEditor
          label="图标"
          value={this.state.icon}
          onEdit={this.edit.bind(this, 'icon')}
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
