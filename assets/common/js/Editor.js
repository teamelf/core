/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Input } = antd;

class SimpleMarkdownEditor extends React.Component {
  handleTextAreaPaste (e) {
    e.preventDefault();
    const selectionStart = e.target.selectionStart;
    const selectionEnd = e.target.selectionEnd;
    const target = e.target;
    for (let item of e.clipboardData.items) {
      if (item.kind === 'string') {
        if (item.type === 'text/plain') {
          window.T = target;
          item.getAsString(str => {
            let text = this.props.value;
            text = text.substring(0, selectionStart) + str + text.substring(selectionEnd);
            this.props.onChange(text);
            const pos = selectionStart + str.length;
            target.setSelectionRange(pos, pos);
          });
        }
      } else if (item.kind === 'file') {
        console.log(item.type);
        if (item.type.match(/^image\//)) {
          const img = item.getAsFile();
          if (!img) return;

          let text = this.props.value;
          const uid = CryptoJS.SHA1(+new Date() + ',' + parseInt(Math.random() * 100000000)).toString();
          const placeholder = `![img 上传中...](${uid})`;
          text = text.substring(0, selectionStart) + placeholder + text.substring(selectionEnd);
          this.props.onChange(text);
          const pos = selectionStart + placeholder.length;
          target.setSelectionRange(pos, pos);

          const formData = new FormData();
          formData.append('attachment', img);
          axios.post(`attachment`, formData).then(r => {
            let text = this.props.value;
            const mark = `![img](${r.data.url})`;
            text = text.replace(placeholder, mark);
            this.props.onChange(text);
            const pos = selectionStart + mark.length;
            target.setSelectionRange(pos, pos);
          }).catch(e => {
            let text = this.props.value;
            text = text.replace(placeholder, '');
            this.props.onChange(text);
            const pos = selectionStart;
            target.setSelectionRange(pos, pos);
          });
        }
      }
    }
  }
  render () {
    let autosize;
    if (this.props.autosize) {
      autosize = this.props.autosize;
    } else if (this.props.rows) {
      autosize = {minRows: this.props.rows, maxRows: this.props.rows};
    } else {
      autosize = {minRows: 10, maxRows: 999999};
    }
    return (
      <div>
        <div align="right">
          <small>可粘贴上传图片，暂不支持其他附件上传</small>
        </div>
        <Input.TextArea
          autosize={autosize}
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
          onPaste={this.handleTextAreaPaste.bind(this)}
        />
      </div>
    );
  }
}

const Preview = ({value}) => (
  <div
    className="markdown"
    dangerouslySetInnerHTML={{__html: marked(value || '')}}
  />
);

/**
 * props:
 *   value
 *   onChange
 *   autosize
 *   rows
 *   preview
 */
export default class extends React.Component {
  editor (value, onChange) {
    return (
      <SimpleMarkdownEditor
        value={value}
        onChange={onChange}
      />
    );
  }
  preview (value) {
    return <Preview value={value}/>;
  }
  render () {
    return (
      <div style={this.props.style}>
        {this.props.preview
          ? this.preview(this.props.value)
          : this.editor(this.props.value, this.props.onChange)
        }
      </div>
    );
  }
}
