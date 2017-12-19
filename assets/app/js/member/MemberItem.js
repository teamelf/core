/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { withRouter } = ReactRouterDOM;
const { Tag, Divider } = antd;
import Gender from 'teamelf/components/Gender';
import MemberInfoEditor from 'teamelf/member/MemberInfoEditor';

class MemberItem extends React.Component {
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
  render () {
    if (!this.member) return <div/>;
    return (
      <div>
        <Tag
          style={{float: 'right'}}
          color={this.member.role.color}
        >{this.member.role.name}</Tag>
        <h2>
          <Gender gender={this.member.gender}/>
          {this.member.name}
        </h2>
        <Divider/>
        <MemberInfoEditor
          label="学号"
          value={this.member.number}
          disabled
        />
        <MemberInfoEditor
          label="邮箱"
          value={this.member.email}
          onEdit={this.edit.bind(this, 'email')}
        />
        <MemberInfoEditor
          label="手机"
          value={this.member.phone}
          onEdit={this.edit.bind(this, 'phone')}
        />
      </div>
    )
  }
}

export default withRouter(MemberItem);
