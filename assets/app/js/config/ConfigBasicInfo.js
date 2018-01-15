/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card } = antd;
import InfoEditor from 'teamelf/components/InfoEditor';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ...window.config
    }
  }
  edit (key, value) {
    return axios.put('config/' + key, {value}).then(r => {
      this.setState({[key]: value});
    });
  }
  render () {
    return (
      <Card
        title="基本信息"
        style={{marginBottom: 16}}
      >
        <InfoEditor
          label="团队名称"
          value={this.state.name}
          onEdit={this.edit.bind(this, 'name')}
          readonly={!can('config.update')}
        />
        <InfoEditor
          label="团队描述"
          value={this.state.description}
          onEdit={this.edit.bind(this, 'description')}
          readonly={!can('config.update')}
        />
      </Card>
    );
  }
}
