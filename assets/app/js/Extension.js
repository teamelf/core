/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Page from 'teamelf/layout/Page';
const { Row, Col, Button } = antd;
import ExtensionCardItem from 'teamelf/extension/ExtensionCardItem';

export default class extends Page {
  constructor (props) {
    super(props);
    this.state = {
      extensions: []
    };
    this.fetchExtensions();
  }
  fetchExtensions () {
    axios.get('extension').then(r => {
      this.setState({extensions: r.data});
    })
  }
  title () {
    return '插件管理';
  }
  description () {
    return [
      <p>安装插件后可能需要刷新页面后才能生效</p>,
      <Button
        type="primary"
        icon="reload"
        onClick={e => window.location.reload()}
      >刷新页面</Button>
    ];
  }
  view () {
    return (
      <Row>
        {this.state.extensions.map(o => (
          <Col sm={24} md={12} lg={8} xxl={6} style={{height: 160}}>
            <ExtensionCardItem
              {...o}
              done={this.fetchExtensions.bind(this)}
            />
          </Col>
        ))}
      </Row>
    );
  }
}
