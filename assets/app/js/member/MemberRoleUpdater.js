/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Button } = antd;
import MemberRoleChooser from 'teamelf/member/MemberRoleChooser';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      role: this.props.role
    };
  }
  update () {
    const data = {
      role: this.state.role
    };
    axios.put(`member/${this.props.username}/role`, data).then(r => {
      window.location.reload();
    });
  }
  render () {
    return (
      <Card
        title="角色更改"
        extra={<Button type="primary" onClick={this.update.bind(this)}>确认</Button>}
        style={{marginBottom: 20}}
      >
        <MemberRoleChooser
          role={this.state.role}
          onChoose={e => this.setState({role: e.target.value})}
        />
      </Card>
    );
  }
}
