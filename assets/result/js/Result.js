/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import SimpleLayout from 'teamelf/common/SimpleLayout';
const { Icon } = antd;

export default class extends SimpleLayout {
  constructor (props) {
    super(props);
    let fontSize = '64px';
    this.icons = {
      success: <Icon type="check-circle" style={{color: '#52c41a', fontSize}}/>
    };
  }
  getQuiries () {
    let q = {};
    for (let kv of window.location.search.substr(1).split('&')) {
      let [key, value] = kv.split('=');
      q[key] = decodeURIComponent(value || '');
    }
    q.redirect = +q.redirect || 0;
    if (q.redirect > 0) {
      setTimeout(() => window.location.href = '/', q.redirect * 1000);
    }
    return q;
  }
  view () {
    let query = this.getQuiries();
    const Icon = this.icons[query.type] || this.icons.success;
    return (
      <div>
        <div style={{margin: '50px 0'}}>{Icon}</div>
        <h3>{query.message}</h3>
        <div>
          {query.redirect > 0 && <span>将在 {query.redirect} 秒后自动跳转首页，或点此立即</span>}
          <a href="/">返回首页</a>
        </div>
      </div>
    );
  }
}
