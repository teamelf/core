/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Input } = antd;

export default class extends React.Component {
  handleTextAreaPaste (e) {
    e.preventDefault();
    const selectionStart = e.target.selectionStart;
    const selectionEnd = e.target.selectionEnd;
    for (let item of e.clipboardData.items) {
      switch (item.kind) {
        case 'string':
          item.getAsString(str => {
            let text = this.props.value;
            text = text.substring(0, selectionStart) + str + text.substring(selectionEnd);
            this.props.onChange(text);
          });
          break;
        case 'file':
          console.log(item.type);
          if (item.type.match(/^image\//)) {
            const img = item.getAsFile();
            if (!img) return;

            let text = this.props.value;
            const uid = CryptoJS.SHA1(+new Date() + ',' + parseInt(Math.random()*100000000)).toString();
            const placeholder = `![img 上传中...](${uid})`;
            text = text.substring(0, selectionStart) + placeholder + text.substring(selectionEnd);
            this.props.onChange(text);

            const formData = new FormData();
            formData.append('attachment', img);
            axios.post(`attachment`, formData).then(r => {
              let text = this.props.value;
              const mark = `![img](${r.data.url})`;
              text = text.replace(placeholder, mark);
              this.props.onChange(text);
            }).catch(e => {
              let text = this.props.value;
              text = text.replace(placeholder, '');
              this.props.onChange(text);
            })
          }
          break;
      }
    }
  }
  render () {
    return (
      <div style={{marginBottom: 16, ...this.props.style}}>
        <div align="right">
          <small>可粘贴上传图片，暂不支持其他附件上传</small>
        </div>
        <Input.TextArea
          autosize={this.props.autosize || {minRows: 10, maxRows: 999999}}
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
          onPaste={this.handleTextAreaPaste.bind(this)}
        />
      </div>
    );
  }
}
