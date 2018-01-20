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
    const query = new URLSearchParams(window.location.search);
    this.state = {
      email: query.get('email'),
      token: '',
      password: '',
      passwordConfirmation: '',
      loading: false,
      status: 'default',
      retry: 0
    };
  }
  getSendButtonLoading () {
    return this.state.status === 'sending';
  }
  getSendButtonDisabled () {
    return this.state.status === 'success'
      || this.state.status === 'error';
  }
  getSendButtonType () {
    if (this.state.status === 'error') {
      return 'danger';
    } else {
      return 'primary';
    }
  }
  getSendButtonText () {
    switch (this.state.status) {
      case 'success':
      case 'error':
        return this.state.retry + '秒后重试';
      case 'sending':
        return '发送中';
      case 'default':
      default:
        return '发送验证码';
    }
  }
  retryAfter (seconds) {
    const timer = setInterval(() => {
      if (seconds === 0) {
        clearInterval(timer);
        this.setState({status: 'default', retry: seconds});
      } else {
        seconds -= 1;
        this.setState({retry: seconds});
      }
    }, 1000);
  }
  sendResetToken () {
    let user = {
      email: this.state.email || ''
    };
    this.setState({status: 'sending'});
    axios.post('/auth/forget', user).then(r => {
      this.setState({status: 'success', retry: 60});
      this.retryAfter(60);
    }).catch(e => {
      if (e.response.status === 422) {
        this.setState({status: 'default'});
      } else {
        this.setState({status: 'error', retry: 20});
        this.retryAfter(20);
      }
    })
  }
  handleSubmit (e) {
    e.preventDefault();
    let user = {
      email: this.state.email || '',
      password: this.state.password ? CryptoJS.SHA1(this.state.password).toString() : '',
      passwordConfirmation: this.state.passwordConfirmation ? CryptoJS.SHA1(this.state.passwordConfirmation).toString() : '',
      passwordOrigin: this.state.password
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
            size="large" type={this.getSendButtonType()}
            onClick={this.sendResetToken.bind(this)}
            loading={this.getSendButtonLoading()}
            disabled={this.getSendButtonDisabled()}
          >{this.getSendButtonText()}</Button>
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
