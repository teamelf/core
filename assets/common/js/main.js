/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

moment.locale('zh-cn');

const renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
  let html = marked.Renderer.prototype.link.call(renderer, href, title, text);
  return html.replace(/^<a /, '<a target="_blank" ');
};
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return '暂不支持好看的代码哦';
  },
  renderer: renderer
});

axios.defaults.baseURL = '/api/';
axios.interceptors.response.use(r => r, e => {
  switch (e.response.status) {
    case 401:
      antd.notification.error({
        message: '用户验证失败',
        description: '登陆失败或授权已过期，请重新登陆'
      });
      break;
    case 422:
      antd.notification.warning({
        message: '数据错误',
        description: '输入数据有误，请检查输入'
      });
      break;
    default:
      antd.notification.error({
        message: '操作失败',
        description: `[${e.response.status}] ${e.response.data.message}`
      });
      break;
  }
  return Promise.reject(e);
});
