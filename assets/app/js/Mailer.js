/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Page from 'teamelf/layout/Page';
const { Button } = antd;
import MailerCardItem from 'teamelf/mailer/MailerCardItem';

export default class extends Page {
  constructor (props) {
    super(props);
    this.title = '邮箱发信设置';
    this.description = <Button type="primary">新建发信邮箱</Button>;
    this.state = {
      mailers: []
    };
    this.fetchEmailAccounts();
  }
  fetchEmailAccounts () {
    axios.get('mailer').then(r => {
      this.setState({mailers: r.data});
      console.log(r);
    })
  }
  view () {
    return (
      <div>
        {this.state.mailers.map(o => <MailerCardItem {...o}/>)}
      </div>
    );
  }
}
