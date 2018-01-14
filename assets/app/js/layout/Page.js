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
  }
  breadcrumbs () {
    return []; // [{path, icon, title}]
  }
  title () {
    return null;
  }
  description () {
    return null;
  }
  header () {
    const title = this.title();
    const description = this.description();
    const breadcrumbs = this.breadcrumbs();
    if (!breadcrumbs.length && !title && !description) {
      return null;
    }
    return (
      <div>
        {breadcrumbs.length > 0 && <Breadcrumb style={{marginBottom: 16}}>
          {breadcrumbs.map(o => (
            <Breadcrumb.Item>
              <Link to={o.path}>
                <Icon type={o.icon}/>
                {o.title}
              </Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>}
        {!!title && <h2>{title}</h2>}
        {!!description && <div>{description}</div>}
      </div>
    );
  }
  view () {
    return <div>page works</div>;
  }
  render () {
    const Header = this.header();
    const headerStyle = {
      padding: '16px 32px',
      background: '#fff',
      boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)'
    };
    return (
      <Layout style={{margin: -24}}>
        {!!Header && (
          <div style={headerStyle}>
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
