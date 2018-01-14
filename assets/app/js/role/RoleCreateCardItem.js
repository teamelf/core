/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Icon, Modal, Form, Input, Tag } = antd;

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      visible: false,
      name: '',
      slug: '',
      color: '#aaa',
      icon: 'user'
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
        <div style={{marginBottom: 16, textAlign: 'center'}}>
          <Tag color={this.state.color}>
            <Icon type={this.state.icon}/>
            <span> {this.state.name}</span>
            <span> - {this.state.slug}</span>
          </Tag>
        </div>
        <Form>
          <Form.Item>
            <Input
              size="large" placeholder="名称"
              value={this.state.name}
              onChange={e => this.setState({name: e.target.value})}
            />
          </Form.Item>
          <Form.Item>
            <Input
              size="large" placeholder="短名"
              value={this.state.slug}
              onChange={e => this.setState({slug: e.target.value})}
            />
          </Form.Item>
          <Form.Item>
            <Input
              size="large" placeholder="颜色"
              value={this.state.color}
              onChange={e => this.setState({color: e.target.value})}
            />
          </Form.Item>
          <Form.Item>
            <Input
              size="large" placeholder="图标"
              value={this.state.icon}
              onChange={e => this.setState({icon: e.target.value})}
            />
          </Form.Item>
        </Form>
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
