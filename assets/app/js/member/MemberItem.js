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
const { Tag, Divider } = antd;
import Gender from 'teamelf/components/Gender';
import InfoEditor from 'teamelf/components/InfoEditor';

class MemberItem extends Page {
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
  view () {
    if (!this.member) return <div/>;
    return (
      <div style={{padding: 24, background: '#fff'}}>
        <Tag
          style={{float: 'right'}}
          color={this.member.role.color}
        >{this.member.role.name}</Tag>
        <h2>
          <Gender gender={this.member.gender}/>
          <span> {this.member.name}</span>
        </h2>
        <Divider/>
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
      </div>
    )
  }
}

export default withRouter(MemberItem);
