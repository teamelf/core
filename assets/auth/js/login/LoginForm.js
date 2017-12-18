/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Form, Input, Button, Checkbox } = antd;

class LoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: false,
      username: '',
      password: '',
      remember: false
    };
  }
  handleSubmit (e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((e, v) => {
      if (e) return;
      let user = {
        username: this.state.username || '',
        password: this.state.password ? CryptoJS.SHA1(this.state.password).toString() : '',
        remember: this.state.remember || false
      };
      this.setState({loading: true});
      axios.post('auth/login', user).then(r => {
        window.location.href = '/';
      }).catch(e => {
        this.setState({loading: false});
      });
    });
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{
             required: true, message: '请输入用户名 / 邮箱',
             }],
          })(
            <Input
              size="large" placeholder="用户名 / 邮箱"
              value={this.state.username}
              onChange={e => this.setState({username: e.target.value})}
              disabled={this.state.loading}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{
             required: true, message: '请输入密码',
             }],
          })(
            <Input
              type="password" size="large" placeholder="密码"
              value={this.state.password}
              onChange={e => this.setState({password: e.target.value})}
              disabled={this.state.loading}
            />
          )}
        </Form.Item>
        <Form.Item>
          <div className="float-left">
            <Checkbox
              value={this.state.remember}
              onChange={e => this.setState({remember: e.target.checked})}
              disabled={this.state.loading}
            >记住我</Checkbox>
          </div>
          <div className="float-right">
            <a href="/login">忘记密码</a>
          </div>
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            className="full"
            type="primary" size="large"
            loading={this.state.loading}
            icon="login"
          >登陆</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);
