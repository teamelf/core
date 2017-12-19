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
      roles: []
    };
    this.fetchMemberList();
    this.fetchRoleList();
  }
  fetchMemberList () {
    return axios.get('member').then(r => {
      this.setState({members: r.data});
      return r;
    });
  }
  fetchRoleList () {
    return axios.get('role').then(r => {
      this.setState({roles: r.data});
      return r;
    });
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
            <Checkbox>
              <Icon type={o.icon} style={{color: o.color}}/>
              <span>{o.name}</span>
            </Checkbox>
          ))}
        </div>
        <Divider/>
        <Row gutter={16}>
          {this.state.members.map(o => (
            <Col sm={24} md={12} lg={6} style={{height: 160}}>
              <MemberCardItem key={o.id} {...o}/>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
