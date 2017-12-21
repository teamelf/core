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
      loading: false
    };
  }
  handleSubmit (e) {
    e.preventDefault();
    let user = {
      email: this.state.email || ''
    };
    this.setState({loading: true});
    axios.post('/auth/forget', user).then(r => {
      window.location.href = '/r' +
        '?type=success' +
        '&message=' + encodeURIComponent(`如果该账户存在，密码重置邮件将发送到邮箱<br/>${user.email}<br/>请注意查收邮件`);
    }).catch(e => {
      this.setState({loading: false});
    });
  }
  view () {
    return (
      <Form
        style={{marginTop: 50}}
        onSubmit={this.handleSubmit.bind(this)}
      >
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
