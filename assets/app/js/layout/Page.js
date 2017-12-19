/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Link } = ReactRouterDOM;
const { Layout, Breadcrumb, Icon, Menu } = antd;
const { Content } = Layout;

export default class Page extends React.Component {
  constructor (props) {
    if (new.target === Page) {
      throw new Error('ContentComponent cannot be instanced directly!');
    }
    super(props);

    this.navigations = []; // [{path, icon, title}]
    this.title = null;
    this.description = null;
  }
  header () {
    if (!this.navigations.length && !this.title && !this.description) {
      return null;
    }
    return (
      <div>
        {this.navigations.length > 0 && <Breadcrumb style={{marginBottom: 16}}>
          {this.navigations.map(o => (
            <Breadcrumb.Item>
              <Link to={o.path}>
                <Icon type={o.icon}/>
                {o.title}
              </Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>}
        {!!this.title && <h2>{this.title}</h2>}
        {!!this.description && <div>{this.description}</div>}
      </div>
    );
  }
  view () {
    return <div>page works</div>;
  }
  render () {
    const Header = this.header();
    return (
      <Layout style={{margin: -24}}>
        {!!Header && (
          <div style={{padding: '16px 32px', background: '#fff'}}>
          {Header}
          </div>
        )}
        <Content style={{margin: 24}}>
          {this.view()}
        </Content>
      </Layout>
    );
  }
}
