/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import SimpleLayout from 'teamelf/common/SimpleLayout';
const { Form, Button, Input } = antd;

export default class extends SimpleLayout {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      token: '',
      password: '',
      passwordConfirmation: '',
      loading: false,
      sending: false,
    };
  }
  sendResetToken () {
    let user = {
      email: this.state.email || ''
    };
    this.setState({sending: true});
    axios.post('/auth/forget', user).then(r => {
      this.setState({sending: false});
    }).catch(e => {
      this.setState({sending: false});
    })
  }
  handleSubmit (e) {
    e.preventDefault();
    let user = {
      email: this.state.email || '',
      password: this.state.password ? CryptoJS.SHA1(this.state.password).toString() : '',
      passwordConfirmation: this.state.passwordConfirmation ? CryptoJS.SHA1(this.state.passwordConfirmation).toString() : '',
    };
    this.setState({loading: true});
    axios.post('/auth/reset/' + this.state.token, user).then(r => {
      const redirect = {
        link: '/login',
        name: '登录页',
        time: 5
      };
      window.location.href = '/r' +
        '?type=success' +
        '&message=密码重置成功' +
        '&redirect=' + encodeURIComponent(JSON.stringify(redirect));
    }).catch(e => {
      this.setState({loading: false});
    });
  }
  view () {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Item>
          <Input
            size="large" placeholder="邮箱"
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value})}
            disabled={this.state.loading}
          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{float: 'right', width: 120}}
            size="large" type="primary"
            onClick={this.sendResetToken.bind(this)}
            loading={this.state.sending}
          >发送验证码</Button>
          <Input
            style={{float: 'left', width: 'calc(100% - 130px)'}}
            size="large" placeholder="验证码"
            value={this.state.token}
            onChange={e => this.setState({token: e.target.value})}
            disabled={this.state.loading}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="password" size="large" placeholder="新密码"
            value={this.state.password}
            onChange={e => this.setState({password: e.target.value})}
            disabled={this.state.loading}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="password" size="large" placeholder="确认密码"
            value={this.state.passwordConfirmation}
            onChange={e => this.setState({passwordConfirmation: e.target.value})}
            disabled={this.state.loading}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            className="full"
            type="primary" size="large"
            loading={this.state.loading}
            icon="reload"
          >重置密码</Button>
        </Form.Item>
      </Form>
    );
  }
}
