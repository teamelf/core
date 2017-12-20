/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Button } = antd;

export default class extends React.Component {
  logout () {
    axios.post('auth/logout').then(r => {
      window.location.reload();
    });
  }
  render () {
    return (
      <Card
        style={{marginBottom: 16}}
        title="退出系统"
      >
        <Button
          className="full"
          type="primary"
          onClick={this.logout.bind(this)}
        >点此安全登出</Button>
      </Card>
    );
  }
}
