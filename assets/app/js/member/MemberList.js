/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import MemberCardItem from 'teamelf/member/MemberCardItem';
import MemberCreatorModal from 'teamelf/member/MemberCreatorModal';
const { Row, Col, Icon, Divider, Checkbox } = antd;

export default class extends React.Component {
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
  render () {
    return (
      <div className="clearfix">
        <div className="float-right">
          <MemberCreatorModal
            afterCreate={() => this.fetchMemberList()}
          />
        </div>
        <div>
          {this.state.roles.map(o => (
            <Checkbox
              onClick={this.handleRolesCheck.bind(this, o.slug)}
            >
              <Icon type={o.icon} style={{color: o.color}}/>
              <span>{o.name}</span>
            </Checkbox>
          ))}
        </div>
        <Divider/>
        <Row gutter={16}>
          {this.state.members.map(o => (
            <Col sm={24} md={12} lg={6} xxl={4} style={{height: 160}}>
              <MemberCardItem key={o.id} {...o}/>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
