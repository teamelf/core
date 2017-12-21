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
import PermissionCardItem from 'teamelf/permission/PermissionCardItem';

export default class extends Page {
  constructor (props) {
    super(props);
    this.title = '成员组权限设置';
    this.state = {
      roles: []
    };
    this.fetch();
  }
  async fetch () {
    let roles = (await this.fetchRoles()).data;
  }
  fetchRoles () {
    return axios.get('role').then(r => {
      this.setState({roles: r.data});
      return r
    })
  }
  view () {
    return (
      <Row type="flex" justify="space-between">
        {this.state.roles.map(o => (
          <Col>
            <PermissionCardItem
              {...o}
              done={() => this.fetch()}
            />
          </Col>
        ))}
      </Row>
    );
  }
}
