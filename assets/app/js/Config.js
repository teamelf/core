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
import InfoEditor from 'teamelf/components/InfoEditor';

export default class extends Page {
  constructor (props) {
    super(props);
    this.state = {
      ...window.config
    }
  }
  reload () {
    window.location.reload();
  }
  edit (key, value) {
    return axios.put('config/' + key, {value}).then(r => {
      this.setState({[key]: value});
    });
  }
  title () {
    return '团队基本设置';
  }
  description () {
    return [
      <Button
        type="primary"
        icon="reload"
        onClick={this.reload.bind(this)}
      >修改站点配置须点此刷新方可生效</Button>
    ];
  }
  view () {
    return (
      <div>
        <InfoEditor
          label="团队名称"
          value={this.state.name}
          onEdit={this.edit.bind(this, 'name')}
        />
        <InfoEditor
          label="团队描述"
          value={this.state.description}
          onEdit={this.edit.bind(this, 'description')}
        />
      </div>
    );
  }
}
