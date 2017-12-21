/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Input, Radio, Icon, Tooltip } = antd;

/**
 * props:
 *   label
 *   value
 *   onEdit
 *   disabled  true|false
 *   type      null|text|password|radio
 *   options   cooperate with type===radio
 */
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
  submitChange (e, v = this.state.value) {
    this.props.onEdit(v).then(r => {
      this.toggleEditor();
    })
  }
  renderRadioGroup () {
    const options = this.props.options || [];
    return (
      <Radio.Group
        value={this.props.value}
        onChange={e => this.submitChange(e, e.target.value)}
      >
        {options.map(o => <Radio value={o.value}>{o.label}</Radio>)}
      </Radio.Group>
    );
  }
  renderInput () {
    return (
      <Input
        type={this.props.type || 'text'}
        style={{width: 'auto'}}
        value={this.state.value}
        onChange={e => this.setState({value: e.target.value})}
        onPressEnter={this.submitChange.bind(this)}
      />
    );
  }
  renderEditor () {
    switch (this.props.type) {
      case 'radio':
        return this.renderRadioGroup();
      case 'text':
      case 'password':
      default:
        return this.renderInput()
    }
  }
  render () {
    return (
      <div className="clearfix" style={{lineHeight: '40px'}}>
        <h3 style={{display: 'inline-block', marginRight: 20}}>{this.props.label}</h3>

        {!this.state.editor && (
          <div style={{display: 'inline-block'}}>
            {this.props.value || <span style={{color: '#ddd'}}>&lt;无&gt;</span>}
          </div>
        )}

        {(!this.props.disabled && !this.state.editor) && (
          <Tooltip title="点此编辑" placement="right">
            <Icon
              style={{marginLeft: 20, cursor: 'pointer'}}
              type="edit"
              onClick={this.toggleEditor.bind(this)}/>
          </Tooltip>
        )}

        {this.state.editor && this.renderEditor()}
      </div>
    );
  }
}
