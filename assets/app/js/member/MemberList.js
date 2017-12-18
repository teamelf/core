/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import MemberCardItem from 'teamelf/member/MemberCardItem';
const { Row, Col } = antd;

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.members = [
      {id: 1, name: 'A', role: {name: '负责人', color: '#ff5500'}, email: 'A@teamelf.com', phone: '13012345678'},
      {id: 2, name: 'B', role: {name: '核心成员', color: '#108ee9'}, email: 'B@teamelf.com', phone: '13012345678'},
      {id: 3, name: 'C', role: {name: '成员', color: '#2db7f5'}, email: 'C@teamelf.com', phone: '13012345678'},
      {id: 4, name: 'D', role: {name: '新人', color: '#87d068'}, email: 'D@teamelf.com', phone: '13012345678'},
    ];
  }
  render () {
    return (
      <Row gutter={16}>
        {this.members.map(o => (
          <Col sm={24} md={12} lg={6} style={{height: 160}}>
            <MemberCardItem key={o.id} {...o}/>
          </Col>
        ))}
      </Row>
    );
  }
}
