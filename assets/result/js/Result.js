/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import SimpleLayout from 'teamelf/common/SimpleLayout';
const { Icon, Button } = antd;

export default class extends SimpleLayout {
  constructor (props) {
    super(props);
    let fontSize = '64px';
    this.icons = {
      success: <Icon type="check-circle" style={{color: '#52c41a', fontSize}}/>
    };
    this.query = new URLSearchParams(window.location.search);
    this.redirect = this.query.get('redirect');
    this.redirect = JSON.parse(this.query.get('redirect'));
    if (this.redirect) {
      this.flushSeconds();
    }
  }
  componentDidMount () {
    document.getElementById('message').innerHTML = this.query.get('message');
  }
  flushSeconds () {
    if (this.redirect.time > 0) {
      setTimeout(() => {
        this.redirect.time -= 1;
        this.forceUpdate();
        this.flushSeconds();
      }, 1000)
    } else if (this.redirect.time === 0) {
      window.location.href = this.redirect.link;
    }
  }
  renderRedirect () {
    if (this.redirect) {
      return (
        <div style={{margin: '20px 0'}}>
          将在 {this.redirect.time} 秒后自动跳转至 {this.redirect.name}，
          <a href={this.redirect.link}>或点此立即跳转</a>
        </div>
      );
    } else {
      return null;
    }
  }
  view () {
    const Icon = this.icons[this.query.type] || this.icons.success;
    return (
      <div>
        <div style={{margin: '50px 0'}}>{Icon}</div>
        <h3 id="message"/>
        {this.renderRedirect()}
        <Button type="primary" href="/">返回首页</Button>
      </div>
    );
  }
}
