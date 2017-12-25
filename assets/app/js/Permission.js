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
import RoleEditorCardItem from 'teamelf/role/RoleEditorCardItem';
import RoleCreateCardItem from 'teamelf/role/RoleCreateCardItem';
import PermissionCardItem from 'teamelf/permission/PermissionCardItem';

export default class extends Page {
  constructor (props) {
    super(props);
    this.state = {
      roles: []
    };
    this.fetch();
  }
  async fetch () {
    const roles = (await this.fetchRoles()).data;
  }
  fetchRoles () {
    return axios.get('role').then(r => {
      this.setState({roles: r.data});
      return r
    })
  }
  title () {
    return '成员组权限设置';
  }
  description () {
    return (
      <Row type="flex" gutter={16}>
        {this.state.roles.map(o => (
          <Col xs={12} md={6} lg={3}>
            <RoleEditorCardItem
              {...o}
              done={this.fetch.bind(this)}
            />
          </Col>
        ))}
        <Col xs={12} md={6} lg={3}>
          <RoleCreateCardItem
            done={this.fetch.bind(this)}
          />
        </Col>
      </Row>
    );
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
