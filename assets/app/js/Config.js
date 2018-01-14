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
import RoleCardList from 'teamelf/role/RoleCardList';
import ConfigBasicInfo from 'teamelf/config/ConfigBasicInfo';
import ConfigLogo from 'teamelf/config/ConfigLogo';

export default class extends Page {
  configs () {
    return [
      <ConfigBasicInfo/>,
      <ConfigLogo/>
    ];
  }
  title () {
    return '团队信息设置';
  }
  description () {
    return [
      <RoleCardList/>,
      <Button
        type="primary"
        icon="reload"
        onClick={e => window.location.reload()}
      >修改站点配置须点此刷新方可生效</Button>
    ];
  }
  view () {
    return (
      <Row gutter={16} type="flex">
        {this.configs().map(o => <Col>{o}</Col>)}
      </Row>
    );
  }
}
