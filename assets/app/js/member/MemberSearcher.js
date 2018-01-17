/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Select, Avatar } = antd;

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      members: []
    };
    this.fetchMembers();
  }
  fetchMembers (keyword = null) {
    axios.get('member', {params: {keyword}}).then(r => {
      this.setState({members: r.data});
    });
  }
  handleSelect (e) {
    this.props.onSelect(e);
    this.setState({member: ''});
  }
  render () {
    const searchFilter = (input, option) => {
      let exclude = this.props.exclude || [];
      if (!_.isArray(exclude)) {
        exclude = [exclude];
      }
      if (exclude.find(o => o === option.key)) {
        return false;
      } else {
        return option.props.member.username.match(input)
          || option.props.member.name.match(input);
      }
    };
    return (
      <Select
        style={{width: 200}}
        mode="combobox"
        placeholder="搜索成员"
        onSelect={this.handleSelect.bind(this)}
        allowClear
        filterOption={searchFilter}
      >
        {this.state.members.map(o => (
          <Select.Option key={o.username} member={o}>
            <Avatar style={{float: 'left', marginTop: 5}}/>
            <div style={{marginLeft: 50}}>
              <div>{o.name}</div>
              <div style={{fontSize: 12, color: '#9d9d9d'}}>{o.username}</div>
            </div>
          </Select.Option>
        ))}
      </Select>
    );
  }
}
