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
    this.members = [];
    this.fetchMemberList();
  }
  fetchMemberList () {
    axios.get('member').then(r => {
      this.members = r.data;
      this.forceUpdate();
    })
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
