/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Page from 'teamelf/layout/Page';
const { Row, Col, Table, Icon, Checkbox } = antd;
import RoleEditorCardItem from 'teamelf/role/RoleEditorCardItem';
import RoleCreateCardItem from 'teamelf/role/RoleCreateCardItem';

export default class extends Page {
  constructor (props) {
    super(props);
    this.state = {
      roles: [],
      permissions: [],
      dataSource: [],
      columns: [],
      loading: false
    };
    this.fetch();
  }
  async fetch () {
    const roles = (await this.fetchRoles()).data;
    const permissions = (await this.fetchPermissions()).data;
    let columns = [{
      title: '权限',
      dataIndex: 'name',
      colSpan: 2,
      // width: 150,
      // fixed: 'left'
    }, {
      dataIndex: 'permission',
      colSpan: 0,
      // width: 250,
      // fixed: 'left'
    }];
    let dataSource = [{
      name: '更新站点信息',
      permission: 'config.update',
    }, {
      name: '创建新成员',
      permission: 'member.create',
    }, {
      name: '成员升级',
      permission: 'member.role.update',
    }, {
      name: '成员密码重设',
      permission: 'member.password.reset',
    }];
    for (const permission of permissions) {
      const d = dataSource.find(o => o.permission === permission.permission);
      d['r_' + permission.role.id] = true;
    }
    for (const role of roles) {
      columns.push({
        title: (
          <div style={{color: role.color, textAlign: 'center'}}>
            <Icon type={role.icon}/>
            <div>{role.name}</div>
          </div>
        ),
        dataIndex: 'r_' + role.id,
        render: (text, record, index) => {
          return (
            <div style={{textAlign: 'center'}}>
              <Checkbox
                checked={text}
                onClick={e => this.updatePermission(role.id, record.permission, e.target.checked)}
              />
            </div>
          );
        }
      })
    }
    this.setState({columns, dataSource});
  }
  fetchRoles () {
    this.setState({loading: true});
    return axios.get('role').then(r => {
      this.setState({loading: false});
      this.setState({roles: r.data});
      return r
    })
  }
  fetchPermissions () {
    this.setState({loading: true});
    return axios.get('permission').then(r => {
      this.setState({loading: false});
      this.setState({permissions: r.data});
      return r;
    })
  }
  updatePermission (role_id, permission, value) {
    const data = {
      role_id,
      permission,
      value
    };
    this.setState({loading: true});
    axios.put('permission', data).then(r => {
      this.setState({loading: false});
      this.fetch();
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
      <div style={{background: '#fff'}}>
        <Table
          loading={this.state.loading}
          dataSource={this.state.dataSource}
          columns={this.state.columns}
          pagination={false}
        />
      </div>
    );
  }
}
