/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Input, Icon, Tooltip } = antd;

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editor: false,
      value: this.props.value
    };
  }
  toggleEditor () {
    let editor = !this.state.editor;
    this.setState({
      editor,
      value: this.props.value
    });
  }
  submitChange () {
    this.props.onEdit(this.state.value).then(r => {
      this.toggleEditor();
    })
  }
  render () {
    return (
      <div className="clearfix" style={{lineHeight: '40px'}}>
        <h3 style={{float: 'left', marginRight: 20}}>{this.props.label}</h3>

        {this.state.editor || <span>{this.props.value}</span>}

        {(!this.props.disabled && !this.state.editor) && (
          <Tooltip title="点此编辑" placement="right">
            <Icon
              style={{marginLeft: 20, cursor: 'pointer'}}
              type="edit"
              onClick={this.toggleEditor.bind(this)}/>
          </Tooltip>
        )}

        {this.state.editor &&
        <Input
          style={{width: 'auto', float: 'left'}}
          value={this.state.value}
          onChange={e => this.setState({value: e.target.value})}
          onPressEnter={this.submitChange.bind(this)}
        />}
      </div>
    );
  }
}
