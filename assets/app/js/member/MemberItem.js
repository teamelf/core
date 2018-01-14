/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Page from 'teamelf/layout/Page';
const { withRouter } = ReactRouterDOM;
const { Row, Col, Tag, Icon, Card, Button } = antd;
import Gender from 'teamelf/components/Gender';
import InfoEditor from 'teamelf/components/InfoEditor';

class MemberItem extends Page {
  constructor (props) {
    super(props);
    this.member = null;
    this.fetchMember();
  }
  fetchMember () {
    axios.get('member/' + this.props.match.params.username).then(r => {
      this.member = r.data;
      this.forceUpdate();
    })
  }
  edit (key, value) {
    return axios.put('member/' + this.member.username, {[key]: value}).then(r => {
      this.member[key] = value;
      this.forceUpdate();
      return r;
    });
  }
  navigations () {
    if (this.member) {
      return [
        {path: '/member', icon: 'user', title: '成员管理'},
        {path: '/member/' + this.member.username, icon: this.member.role.icon, title: this.member.name}
      ]
    } else {
      return [];
    }
  }
  title () {
    if (this.member) {
      return [
        <Gender gender={this.member.gender}/>,
        this.member.name
      ];
    }
  }
  description () {
    if (this.member) {
      return (
        <Tag color={this.member.role.color}>
          <Icon type={this.member.role.icon}/>
          {this.member.role.name}
        </Tag>
      );
    }
  }
  view () {
    if (this.member) {
      return (
        <Row gutter={16}>
          <Col xs={24} lg={12}>
            <Card
              title="基本信息"
              style={{marginBottom: 20}}
            >
              <InfoEditor
                label="登录名"
                value={this.member.username}
                disabled
              />
              <InfoEditor
                label="邮　箱"
                value={this.member.email}
                onEdit={this.edit.bind(this, 'email')}
              />
              <InfoEditor
                label="手　机"
                value={this.member.phone}
                onEdit={this.edit.bind(this, 'phone')}
              />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              title="角色更改"
              extra={<Button type="primary">确认修改</Button>}
              style={{marginBottom: 20}}
            />
            <Card
              title="密码重置"
              style={{marginBottom: 20}}
              extra={<Button type="danger">重置密码</Button>}
            />
            <Card
              title="状态修改"
              style={{marginBottom: 20}}
              extra={<Button type="danger">退出工作室</Button>}
            />
          </Col>
        </Row>
      );
    }
  }
}

export default withRouter(MemberItem);
