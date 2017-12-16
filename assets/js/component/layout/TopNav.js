/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Link } = ReactRouterDOM;
import Component from 'teamelf/lib/Component';
const { Menu, Icon } = antd;

export default class extends Component {
  constructor (props) {
    super(props);
    this.navigations = this.props.navigations || [];
    this.state = {
      selectedNav: null
    };
  }
  componentDidMount () {
    this.handleSelectedNav();
  }
  handleSelectedNav () {
    let path = window.location.pathname;
    for (let nav of this.navigations) {
      if (path.match(nav.path)) {
        this.setState({selectedNav: nav.path});
        return nav.path;
      }
    }
    this.setState({selectedNav: null});
    return null;
  }
  render () {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={this.state.selectedNav}
        style={{lineHeight: '64px', float: 'left'}}
      >
        {this.navigations.map(o => (
          <Menu.Item key={o.path}>
            <Link to={o.path}>
              <Icon type={o.icon}/>{o.title}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    )
  }
}
