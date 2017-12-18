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
      username: '',
      password: '',
      passwordConfirmation: '',
      loading: false
    };
  }
  token () {
    let token = window.location.href.split('/');
    token = token[token.length - 1];
    return token;
  }
  handleSubmit (e) {
    e.preventDefault();
    let user = {
      username: this.state.username || '',
      password: this.state.password ? CryptoJS.SHA1(this.state.password).toString() : '',
      passwordConfirmation: this.state.passwordConfirmation ? CryptoJS.SHA1(this.state.passwordConfirmation).toString() : '',
    };
    this.setState({loading: true});
    axios.post('/auth/reset/' + this.token(), user).then(r => {
      window.location.href = '/r' +
        '?type=success' +
        '&message=密码重置成功' +
        '&redirect=5';
    }).catch(e => {
      this.setState({loading: false});
    });
  }
  view () {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Item>
          <Input
            size="large" value={this.token()}
            disabled
          />
        </Form.Item>
        <Form.Item>
          <Input
            size="large" placeholder="用户名 / 邮箱"
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}
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
            type="passwordConfirmation" size="large" placeholder="确认密码"
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
          >重置</Button>
        </Form.Item>
      </Form>
    );
  }
}
