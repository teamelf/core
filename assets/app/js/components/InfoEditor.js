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
 *   readonly  true|false
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
  renderTextArea () {
    return (
      <Input.TextArea
        autosize={{minRows: 2,maxRows: 6}}
        style={{width: 'auto', resize: 'horizontal'}}
        value={this.state.value}
        onChange={e => this.setState({value: e.target.value})}
        onPressEnter={this.submitChange.bind(this)}
      />
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
      case 'textarea':
        return this.renderTextArea();
      case 'text':
      case 'password':
      default:
        return this.renderInput();
    }
  }
  render () {
    return (
      <div className="clearfix" style={{lineHeight: '40px'}}>
        <h3 style={{display: 'inline-block', marginRight: 16}}>{this.props.label}</h3>

        {!this.state.editor && (
          <div style={{display: 'inline'}}>
            {this.props.value || <span style={{color: '#ddd'}}>&lt;无&gt;</span>}
          </div>
        )}

        {(!this.props.readonly && !this.state.editor) && (
          <Tooltip title="点此编辑" placement="right">
            <Icon
              style={{marginLeft: 16, cursor: 'pointer'}}
              type="edit"
              onClick={this.toggleEditor.bind(this)}/>
          </Tooltip>
        )}

        {this.state.editor && [
          this.renderEditor(),
          <Tooltip title="确认修改" placement="top">
            <Icon
              type="check"
              style={{color: 'green', cursor: 'pointer', marginLeft: 8}}
              onClick={this.submitChange.bind(this)}
            />
          </Tooltip>,
          <Tooltip title="放弃修改" placement="top">
            <Icon
              type="close"
              style={{color: 'red', cursor: 'pointer', marginLeft: 8}}
              onClick={this.toggleEditor.bind(this)}
            />
          </Tooltip>
        ]}
      </div>
    );
  }
}
