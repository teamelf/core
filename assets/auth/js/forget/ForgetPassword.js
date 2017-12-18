/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AuthLayout from 'teamelf/auth/Layout';
const { Form, Button, Input } = antd;

export default class extends AuthLayout {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      loading: false
    };
  }
  handleSubmit (e) {
    e.preventDefault();
    let user = {
      username: this.state.username || ''
    };
    this.setState({loading: true});
    axios.post('/auth/forget', user).then(r => {
      window.location.href = '/r' +
        '?type=success' +
        `&message=密码重置邮件已发送到邮箱 [ ${r.data.email} ]，请注意查收邮件`;
    }).catch(e => {
      this.setState({loading: false});
    });
  }
  view () {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Item>
          <Input
            size="large" placeholder="用户名 / 邮箱"
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}
            disabled={this.state.loading}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            className="full"
            type="primary" size="large"
            loading={this.state.loading}
            icon="question"
          >忘记密码</Button>
        </Form.Item>
      </Form>
    );
  }
}
