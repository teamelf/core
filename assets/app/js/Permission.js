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
      roles: window.roles,
      permissions: [],
      dataSource: [],
      columns: [],
      loading: false
    };
    this.permissions = [{
      name: '更新站点信息',
      permission: 'config.update',
    }, {
      name: '查看权限列表',
      permission: 'permission.list',
    }, {
      name: '更新权限',
      permission: 'permission.update',
    }, {
      name: '查看插件列表',
      permission: 'extension.list',
    }, {
      name: '激活/停用插件',
      permission: 'extension.activate',
    }, {
      name: '查看成员列表',
      permission: 'member.list',
    }, {
      name: '查看成员详情',
      permission: 'member.item',
    }, {
      name: '创建新成员',
      permission: 'member.create',
    }, {
      name: '更新成员信息',
      permission: 'member.update',
    }, {
      name: '成员角色更改',
      permission: 'member.role.update',
    }, {
      name: '成员密码重设',
      permission: 'member.password.reset',
    }, {
      name: '创新新角色',
      permission: 'role.create',
    }, {
      name: '更新角色信息',
      permission: 'role.update',
    }, {
      name: '删除角色',
      permission: 'role.delete',
    }, ...(this.permissions || [])];
    this.fetch();
  }
  async fetch () {
    const roles = window.roles;
    const permissions = (await this.fetchPermissions()).data;
    let columns = [{
      title: '权限',
      dataIndex: 'name',
      colSpan: 2
    }, {
      dataIndex: 'permission',
      colSpan: 0
    }];
    let dataSource = _.cloneDeep(this.permissions);
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
    }).catch(e => {
      this.setState({loading: false});
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
