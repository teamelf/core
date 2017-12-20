/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Page from 'teamelf/layout/Page';
const { Row, Col } = antd;
import Security from 'teamelf/profile/Security';
import Logout from 'teamelf/profile/Logout';

export default class extends Page {
  constructor (props) {
    super(props);
    this.bulletins = [];
    this.operations = [
      <Security/>,
      <Logout/>
    ];
    this.fetchUserData();
  }
  fetchUserData () {
    axios.get('auth').then(r => {
      this.title = r.data.name;
      this.description = r.data.role.name;
      this.forceUpdate();
    })
  }
  view () {
    return (
      <Row gutter={16} className="profile-page">
        <Col xs={24} lg={16}>
          {this.bulletins}
        </Col>
        <Col xs={24} lg={8}>
          {this.operations}
        </Col>
      </Row>
    )
  }
}
