/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Page from 'teamelf/layout/Page';
import MemberCardItem from 'teamelf/member/MemberCardItem';
import MemberCreatorModal from 'teamelf/member/MemberCreatorModal';
const { Row, Col, Icon, Divider, Checkbox } = antd;

export default class extends Page {
  constructor (props) {
    super(props);
    this.state = {
      members: [],
      roles: [],
      chosenRoles: []
    };
    this.fetchMemberList();
    this.fetchRoleList();
  }
  fetchMemberList () {
    let params = {
      roles: this.state.chosenRoles.join(',')
    };
    return axios.get('member', { params }).then(r => {
      this.setState({members: r.data});
      return r;
    });
  }
  fetchRoleList () {
    return axios.get('role').then(r => {
      this.setState({roles: r.data});
    });
  }
  handleRolesCheck (role, e) {
    let chosenRoles = this.state.chosenRoles;
    let idx = chosenRoles.indexOf(role);
    if (idx === -1) {
      chosenRoles.push(role);
    } else {
      chosenRoles.splice(idx, 1);
    }
    this.setState({chosenRoles});
    this.fetchMemberList();
  }
  description () {
    return (
      <Row type="flex">
        <Col xs={24} md={{span: 6, order: 2}} align="right">
          <MemberCreatorModal
            done={() => this.fetchMemberList()}
          />
        </Col>
        <Col xs={24} md={{span: 18, order: 1}} style={{lineHeight: '32px'}}>
          {this.state.roles.map(o => (
            <Checkbox
              onClick={this.handleRolesCheck.bind(this, o.slug)}
            >
              <Icon type={o.icon} style={{color: o.color}}/>
              <span>{o.name}</span>
            </Checkbox>
          ))}
        </Col>
      </Row>
    );
  }
  view () {
    return (
      <Row gutter={16}>
        {this.state.members.map(o => (
          <Col sm={24} md={12} lg={8} xxl={6} style={{height: 160}}>
            <MemberCardItem key={o.id} {...o}/>
          </Col>
        ))}
      </Row>
    );
  }
}
