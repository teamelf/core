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
    return (
      <Select
        style={{width: 200}}
        mode="combobox"
        placeholder="搜索成员"
        onSelect={this.handleSelect.bind(this)}
        allowClear
      >
        {this.state.members.map(o => (
          <Select.Option key={o.username}>
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
