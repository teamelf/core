/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Layout, Row, Col, Avatar, Icon } = antd;
const { Header } = Layout;
import Logo from 'teamelf/layout/Logo'
import TopNav from 'teamelf/layout/TopNav'
import AuthBar from 'teamelf/layout/AuthBar'

export default class extends React.Component {
  render () {
    return (
      <Row style={{position: 'fixed', left: 0, right: 0, zIndex: 999}}>
        <Col xs={0} lg={24}>
          <Header>
            <Logo style={{float: 'left'}}/>
            <TopNav/>
            <AuthBar/>
          </Header>
        </Col>
        <Col xs={24} lg={0}>
          <Header style={{textAlign: 'center'}}>
            <div style={{float: 'left', paddingTop: 22, height: 64}}>
              <Icon
                type="menu-unfold"
                style={{fontSize: 20, color: '#fff'}}
              />
            </div>
            <Logo/>
            <Avatar style={{marginTop: 16, float: 'right'}}/>
          </Header>
        </Col>
      </Row>
    )
  }
}
