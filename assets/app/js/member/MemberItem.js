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
const { Row, Col, Tag, Icon, Card } = antd;
import Gender from 'teamelf/components/Gender';
import InfoEditor from 'teamelf/components/InfoEditor';
import MemberRoleUpdater from 'teamelf/member/MemberRoleUpdater';

class MemberItem extends Page {
  constructor (props) {
    super(props);
    this.member = null;
    this.fetchMember();
  }
  profiles () {
    return [
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
    ];
  }
  operators () {
    return [
      <MemberRoleUpdater
        username={this.props.match.params.username}
        role={this.member ? this.member.role.slug : null}
      />
    ];
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
            {this.profiles()}
          </Col>
          <Col xs={24} lg={12}>
            {this.operators()}
          </Col>
        </Row>
      );
    }
  }
}

export default withRouter(MemberItem);
