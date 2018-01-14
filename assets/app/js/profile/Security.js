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
  render () {
    return (
      <Card
        style={{marginBottom: 16}}
        title="修改密码"
      >
        <Button
          className="full"
          type="danger"
          href="/password/reset"
        >点此修改密码</Button>
      </Card>
    );
  }
}
