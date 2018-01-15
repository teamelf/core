/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Row, Col } = antd;
import RoleEditorCardItem from 'teamelf/role/RoleEditorCardItem';
import RoleCreateCardItem from 'teamelf/role/RoleCreateCardItem';

export default class extends React.Component {
  render () {
    return (
      <Row type="flex" gutter={16}>
        {window.roles.map(o => (
          <Col xs={12} md={6} lg={3}>
            <RoleEditorCardItem
              {...o}
              done={e => window.location.reload()}
            />
          </Col>
        ))}
        {can('role.create') && (
          <Col xs={12} md={6} lg={3}>
            <RoleCreateCardItem
              done={e => window.location.reload()}
            />
          </Col>
        )}
      </Row>
    );
  }
}
