/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Modal, Button, Form, Input, Radio, Checkbox } = antd;

class MemberCreateForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: false,
      username: '',
      email: '',
      name: '',
      gender: 0,
      activate: false
    };
  }
  submitForm () {
    const member = {
      username: this.state.username,
      email: this.state.email,
      name: this.state.name,
      gender: this.state.gender,
      activate: this.state.activate || false
    };
    this.setState({loading: true});
    axios.post('member', member).then(r => {
      this.setState({loading: false});
      this.props.done();
      this.props.form.resetFields();
    }).catch(e => {
      this.setState({loading: false});
    })
  }
  getUsernameByName () {
    let params = {chinese: this.state.name};
    axios.get('helper/pinyin', { params }).then(r => {
      let [lastname, ...firstname] = r.data.pinyin;
      let username = firstname.join('') + '.' + lastname;
      this.setState({username});
      this.props.form.setFieldsValue({username});
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Form.Item style={{float: 'right', marginTop: 10, marginBottom: -10}}>
          <Radio.Group
            value={this.state.gender}
            onChange={e => this.setState({gender: e.target.value})}
            disabled={this.props.loading}
          >
            <Radio value={0}>男</Radio>
            <Radio value={1}>女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item style={{width: 'calc(100% - 150px)'}}>
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: '请输入姓名',
            }],
          })(
            <Input
              size="large" placeholder="姓名"
              value={this.state.name}
              onChange={e => this.setState({name: e.target.value})}
              onBlur={this.getUsernameByName.bind(this)}
              disabled={this.props.loading}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: '请输入用户名',
            }],
          })(
            <Input
              size="large" placeholder="用户名"
              value={this.state.username}
              onChange={e => this.setState({username: e.target.value})}
              disabled={this.props.loading}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{
              required: true, message: '请输入用户名',
            }, {
              type: 'email', message: '邮箱不合法'
            }],
          })(
            <Input
              size="large" placeholder="邮箱"
              value={this.state.email}
              onChange={e => this.setState({email: e.target.value})}
              disabled={this.props.loading}
            />
          )}
        </Form.Item>
        <Form.Item>
          <Checkbox
            value={this.state.activate}
            onChange={e => this.setState({activate: e.target.checked})}
          >发送激活邮件</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            className="full"
            type="primary" size="large"
            onClick={this.submitForm.bind(this)}
            loading={this.state.loading}
          >创新新成员</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      visible: false,
      loading: false
    };
  }
  closeModal () {
    this.setState({visible: false});
    this.props.done();
  }
  render () {
    const MemberCreateFormWrapper = Form.create()(MemberCreateForm);
    return (
      <span>
        <Button
          type="primary"
          icon="user-add"
          onClick={() => this.setState({visible: true})}
        >添加新成员</Button>
        <Modal
          title="新建成员"
          maskClosable={false}
          visible={this.state.visible}
          footer={null}
          onCancel={this.closeModal.bind(this)}
        >
          <MemberCreateFormWrapper
            loading={this.state.loading}
            done={this.closeModal.bind(this)}
          />
        </Modal>
      </span>
    );
  }
}
