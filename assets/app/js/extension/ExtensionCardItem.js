/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Switch, Button } = antd;

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  activate (activation) {
    this.setState({loading: true});
    axios.put('extension/' + this.props.package, {activation}).then(r => {
      this.props.done();
      this.setState({loading: false});
    }).catch(e => {
      this.setState({loading: false});
    });
  }
  upgrade () {
    alert('not supported yet!');
  }
  uninstall () {
    alert('not supported yet!');
  }
  render () {
    return (
      <Card
        title={this.props.package}
        extra={this.props.version}
        actions={[
          <Switch
            checked={this.props.isActivated}
            checkedChildren="启用"
            unCheckedChildren="停用"
            onChange={this.activate.bind(this)}
            loading={this.state.loading}
          />,
          <Button
            type="primary" size="small"
            onClick={this.upgrade.bind(this)}
          >升级</Button>,
          <Button
            type="danger" size="small"
            onClick={this.uninstall.bind(this)}
          >卸载</Button>
        ]}
      >
        <div>{this.props.description}</div>
      </Card>
    );
  }
}
