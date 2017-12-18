/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import SimpleLayout from 'teamelf/common/SimpleLayout';
const { Button, Icon } = antd;
import LoginForm from 'teamelf/auth/login/LoginForm';

export default class LoginPage extends SimpleLayout {
  constructor (props) {
    super(props);
    this.loginInterfaces = [
      {icon: <Icon type="qq"/>, to: 'qq'},
      {icon: <Icon type="wechat"/>, to: 'wechat'},
      {icon: <Icon type="gitlab"/>, to: 'gitlab'},
      {icon: <Icon type="github"/>, to: 'github'},
    ];
  }
  view () {
    return (
      <div>
        <LoginForm/>
        <div className="clearfix">
          <div className="float-left" style={{lineHeight: '50px'}}>
            <span>其他登陆方式</span>
            {this.loginInterfaces.map(o => (
              <Button
                style={{marginLeft: 8, paddingTop: 6}}
                type="ghost" shape="circle"
                href={o.to}
              >{o.icon}</Button>
            ))}
          </div>
          <div className="float-right" style={{lineHeight: '50px'}}>
            <a href="/login">加入我们</a>
          </div>
        </div>
      </div>
    )
  }
}
