/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

moment.locale('zh-cn');
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

function handleFormError(e, form, v) {
  if (e.response.status !== 422) return;
  for (let key in e.response.data) {
    let message = e.response.data[key][0];
    form.setFields({
      [key]: {
        value: v[key],
        errors: [new Error(message)],
      },
    });
  }
}
