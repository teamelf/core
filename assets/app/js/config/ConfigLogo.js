/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Upload, Button, Icon } = antd;

export default class extends React.Component {
  handleChange (info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      window.location.reload();
    } else if (info.file.status === 'error') {
      antd.message.error(`${info.file.name} file upload failed.`);
    }
  }
  render () {
    const Uploader = (
      <Upload
        name="logo"
        action="/api/config/logo"
        onChange={this.handleChange.bind(this)}
        showUploadList={false}
      >
        <Button>
          <Icon type="upload" />
          <span> 上传新LOGO</span>
        </Button>
      </Upload>
    );
    return (
      <Card
        title={Uploader}
        style={{marginBottom: 16}}
      >
        <div align="center">
          <img src={window.config.logo} style={{width: 150}}/>
        </div>
      </Card>
    );
  }
}
