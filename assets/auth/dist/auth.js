'use strict';

System.register('teamelf/auth/forget/ForgetPassword', ['teamelf/common/SimpleLayout'], function (_export, _context) {
  "use strict";

  var SimpleLayout, _createClass, _antd, Form, Button, Input, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_teamelfCommonSimpleLayout) {
      SimpleLayout = _teamelfCommonSimpleLayout.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _antd = antd;
      Form = _antd.Form;
      Button = _antd.Button;
      Input = _antd.Input;

      _class = function (_SimpleLayout) {
        _inherits(_class, _SimpleLayout);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            email: '',
            loading: false
          };
          return _this;
        }

        _createClass(_class, [{
          key: 'handleSubmit',
          value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            var user = {
              email: this.state.email || ''
            };
            this.setState({ loading: true });
            axios.post('/auth/forget', user).then(function (r) {
              window.location.href = '/r' + '?type=success' + '&message=' + encodeURIComponent('\u5982\u679C\u8BE5\u8D26\u6237\u5B58\u5728\uFF0C\u5BC6\u7801\u91CD\u7F6E\u90AE\u4EF6\u5C06\u53D1\u9001\u5230\u90AE\u7BB1<br/>' + user.email + '<br/>\u8BF7\u6CE8\u610F\u67E5\u6536\u90AE\u4EF6');
            }).catch(function (e) {
              _this2.setState({ loading: false });
            });
          }
        }, {
          key: 'view',
          value: function view() {
            var _this3 = this;

            return React.createElement(
              Form,
              {
                style: { marginTop: 50 },
                onSubmit: this.handleSubmit.bind(this)
              },
              React.createElement(
                Form.Item,
                null,
                React.createElement(Input, {
                  size: 'large', placeholder: '\u90AE\u7BB1',
                  value: this.state.email,
                  onChange: function onChange(e) {
                    return _this3.setState({ email: e.target.value });
                  },
                  disabled: this.state.loading
                })
              ),
              React.createElement(
                Form.Item,
                null,
                React.createElement(
                  Button,
                  {
                    htmlType: 'submit',
                    className: 'full',
                    type: 'primary', size: 'large',
                    loading: this.state.loading,
                    icon: 'question'
                  },
                  '\u5FD8\u8BB0\u5BC6\u7801'
                )
              )
            );
          }
        }]);

        return _class;
      }(SimpleLayout);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/auth/forget/main', ['teamelf/auth/forget/ForgetPassword'], function (_export, _context) {
  "use strict";

  var ForgetPassword, target;
  return {
    setters: [function (_teamelfAuthForgetForgetPassword) {
      ForgetPassword = _teamelfAuthForgetForgetPassword.default;
    }],
    execute: function () {
      target = document.getElementById('react-render-target-password-forget');

      if (target) {
        ReactDOM.render(React.createElement(ForgetPassword, null), target);
      }
    }
  };
});
'use strict';

System.register('teamelf/auth/login/Login', ['teamelf/common/SimpleLayout', 'teamelf/auth/login/LoginForm'], function (_export, _context) {
  "use strict";

  var SimpleLayout, LoginForm, _createClass, _antd, Button, Icon, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_teamelfCommonSimpleLayout) {
      SimpleLayout = _teamelfCommonSimpleLayout.default;
    }, function (_teamelfAuthLoginLoginForm) {
      LoginForm = _teamelfAuthLoginLoginForm.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _antd = antd;
      Button = _antd.Button;
      Icon = _antd.Icon;

      _class = function (_SimpleLayout) {
        _inherits(_class, _SimpleLayout);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.loginInterfaces = [{ icon: React.createElement(Icon, { type: 'qq' }), to: 'qq' }, { icon: React.createElement(Icon, { type: 'wechat' }), to: 'wechat' }, { icon: React.createElement(Icon, { type: 'gitlab' }), to: 'gitlab' }, { icon: React.createElement(Icon, { type: 'github' }), to: 'github' }];
          return _this;
        }

        _createClass(_class, [{
          key: 'handleLoginSucceed',
          value: function handleLoginSucceed() {
            var params = new URLSearchParams(window.location.search);
            var redirect = params.get('from') || '/';
            window.location.replace(redirect);
          }
        }, {
          key: 'view',
          value: function view() {
            return React.createElement(
              'div',
              null,
              React.createElement(LoginForm, {
                loginSucceed: this.handleLoginSucceed.bind(this)
              }),
              React.createElement(
                'div',
                { className: 'clearfix' },
                React.createElement(
                  'div',
                  { className: 'float-left', style: { lineHeight: '50px' } },
                  React.createElement(
                    'span',
                    null,
                    '\u5176\u4ED6\u767B\u9646\u65B9\u5F0F'
                  ),
                  this.loginInterfaces.map(function (o) {
                    return React.createElement(
                      Button,
                      {
                        style: { marginLeft: 8, paddingTop: 6 },
                        type: 'ghost', shape: 'circle',
                        href: o.to
                      },
                      o.icon
                    );
                  })
                ),
                React.createElement(
                  'div',
                  { className: 'float-right', style: { lineHeight: '50px' } },
                  React.createElement(
                    'a',
                    { href: '/login' },
                    '\u52A0\u5165\u6211\u4EEC'
                  )
                )
              )
            );
          }
        }]);

        return _class;
      }(SimpleLayout);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/auth/login/LoginForm', [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Form, Input, Button, Checkbox, LoginForm;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _antd = antd;
      Form = _antd.Form;
      Input = _antd.Input;
      Button = _antd.Button;
      Checkbox = _antd.Checkbox;

      LoginForm = function (_React$Component) {
        _inherits(LoginForm, _React$Component);

        function LoginForm(props) {
          _classCallCheck(this, LoginForm);

          var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

          _this.state = {
            loading: false,
            username: '',
            password: '',
            remember: false
          };
          return _this;
        }

        _createClass(LoginForm, [{
          key: 'handleSubmit',
          value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            this.props.form.validateFieldsAndScroll(function (e, v) {
              if (e) return;
              var user = {
                username: _this2.state.username || '',
                password: _this2.state.password ? CryptoJS.SHA1(_this2.state.password).toString() : '',
                remember: _this2.state.remember || false
              };
              _this2.setState({ loading: true });
              axios.post('auth/login', user).then(function (r) {
                _this2.props.loginSucceed();
              }).catch(function (e) {
                _this2.setState({ loading: false });
              });
            });
          }
        }, {
          key: 'render',
          value: function render() {
            var _this3 = this;

            var getFieldDecorator = this.props.form.getFieldDecorator;

            return React.createElement(
              Form,
              { onSubmit: this.handleSubmit.bind(this) },
              React.createElement(
                Form.Item,
                null,
                getFieldDecorator('username', {
                  rules: [{
                    required: true, message: '请输入用户名 / 邮箱'
                  }]
                })(React.createElement(Input, {
                  size: 'large', placeholder: '\u7528\u6237\u540D / \u90AE\u7BB1',
                  value: this.state.username,
                  onChange: function onChange(e) {
                    return _this3.setState({ username: e.target.value });
                  },
                  disabled: this.state.loading
                }))
              ),
              React.createElement(
                Form.Item,
                null,
                getFieldDecorator('password', {
                  rules: [{
                    required: true, message: '请输入密码'
                  }]
                })(React.createElement(Input, {
                  type: 'password', size: 'large', placeholder: '\u5BC6\u7801',
                  value: this.state.password,
                  onChange: function onChange(e) {
                    return _this3.setState({ password: e.target.value });
                  },
                  disabled: this.state.loading
                }))
              ),
              React.createElement(
                Form.Item,
                null,
                React.createElement(
                  'div',
                  { className: 'float-left' },
                  React.createElement(
                    Checkbox,
                    {
                      value: this.state.remember,
                      onChange: function onChange(e) {
                        return _this3.setState({ remember: e.target.checked });
                      },
                      disabled: this.state.loading
                    },
                    '\u8BB0\u4F4F\u6211'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'float-right' },
                  React.createElement(
                    'a',
                    { href: '/password/reset' },
                    '\u5FD8\u8BB0\u5BC6\u7801'
                  )
                )
              ),
              React.createElement(
                Form.Item,
                null,
                React.createElement(
                  Button,
                  {
                    htmlType: 'submit',
                    className: 'full',
                    type: 'primary', size: 'large',
                    loading: this.state.loading,
                    icon: 'login'
                  },
                  '\u767B\u9646'
                )
              )
            );
          }
        }]);

        return LoginForm;
      }(React.Component);

      _export('default', Form.create()(LoginForm));
    }
  };
});
'use strict';

System.register('teamelf/auth/login/main', ['teamelf/auth/login/Login'], function (_export, _context) {
  "use strict";

  var Login, target;
  return {
    setters: [function (_teamelfAuthLoginLogin) {
      Login = _teamelfAuthLoginLogin.default;
    }],
    execute: function () {
      target = document.getElementById('react-render-target-login');

      if (target) {
        ReactDOM.render(React.createElement(Login, null), target);
      }
    }
  };
});
'use strict';

System.register('teamelf/auth/reset/ResetPassword', ['teamelf/common/SimpleLayout'], function (_export, _context) {
  "use strict";

  var SimpleLayout, _createClass, _antd, Form, Button, Input, _class;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_teamelfCommonSimpleLayout) {
      SimpleLayout = _teamelfCommonSimpleLayout.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _antd = antd;
      Form = _antd.Form;
      Button = _antd.Button;
      Input = _antd.Input;

      _class = function (_SimpleLayout) {
        _inherits(_class, _SimpleLayout);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            email: '',
            token: '',
            password: '',
            passwordConfirmation: '',
            loading: false,
            sending: false
          };
          return _this;
        }

        _createClass(_class, [{
          key: 'sendResetToken',
          value: function sendResetToken() {
            var _this2 = this;

            var user = {
              email: this.state.email || ''
            };
            this.setState({ sending: true });
            axios.post('/auth/forget', user).then(function (r) {
              _this2.setState({ sending: false });
            }).catch(function (e) {
              _this2.setState({ sending: false });
            });
          }
        }, {
          key: 'handleSubmit',
          value: function handleSubmit(e) {
            var _this3 = this;

            e.preventDefault();
            var user = {
              email: this.state.email || '',
              password: this.state.password ? CryptoJS.SHA1(this.state.password).toString() : '',
              passwordConfirmation: this.state.passwordConfirmation ? CryptoJS.SHA1(this.state.passwordConfirmation).toString() : ''
            };
            this.setState({ loading: true });
            axios.post('/auth/reset/' + this.state.token, user).then(function (r) {
              var redirect = {
                link: '/login',
                name: '登录页',
                time: 5
              };
              window.location.href = '/r' + '?type=success' + '&message=密码重置成功' + '&redirect=' + encodeURIComponent(JSON.stringify(redirect));
            }).catch(function (e) {
              _this3.setState({ loading: false });
            });
          }
        }, {
          key: 'view',
          value: function view() {
            var _this4 = this;

            return React.createElement(
              Form,
              { onSubmit: this.handleSubmit.bind(this) },
              React.createElement(
                Form.Item,
                null,
                React.createElement(Input, {
                  size: 'large', placeholder: '\u90AE\u7BB1',
                  value: this.state.email,
                  onChange: function onChange(e) {
                    return _this4.setState({ email: e.target.value });
                  },
                  disabled: this.state.loading
                })
              ),
              React.createElement(
                Form.Item,
                null,
                React.createElement(
                  Button,
                  {
                    style: { float: 'right', width: 120 },
                    size: 'large', type: 'primary',
                    onClick: this.sendResetToken.bind(this),
                    loading: this.state.sending
                  },
                  '\u53D1\u9001\u9A8C\u8BC1\u7801'
                ),
                React.createElement(Input, {
                  style: { float: 'left', width: 'calc(100% - 130px)' },
                  size: 'large', placeholder: '\u9A8C\u8BC1\u7801',
                  value: this.state.token,
                  onChange: function onChange(e) {
                    return _this4.setState({ token: e.target.value });
                  },
                  disabled: this.state.loading
                })
              ),
              React.createElement(
                Form.Item,
                null,
                React.createElement(Input, {
                  type: 'password', size: 'large', placeholder: '\u65B0\u5BC6\u7801',
                  value: this.state.password,
                  onChange: function onChange(e) {
                    return _this4.setState({ password: e.target.value });
                  },
                  disabled: this.state.loading
                })
              ),
              React.createElement(
                Form.Item,
                null,
                React.createElement(Input, {
                  type: 'password', size: 'large', placeholder: '\u786E\u8BA4\u5BC6\u7801',
                  value: this.state.passwordConfirmation,
                  onChange: function onChange(e) {
                    return _this4.setState({ passwordConfirmation: e.target.value });
                  },
                  disabled: this.state.loading
                })
              ),
              React.createElement(
                Form.Item,
                null,
                React.createElement(
                  Button,
                  {
                    htmlType: 'submit',
                    className: 'full',
                    type: 'primary', size: 'large',
                    loading: this.state.loading,
                    icon: 'reload'
                  },
                  '\u91CD\u7F6E\u5BC6\u7801'
                )
              )
            );
          }
        }]);

        return _class;
      }(SimpleLayout);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/auth/reset/main', ['teamelf/auth/reset/ResetPassword'], function (_export, _context) {
  "use strict";

  var ResetPassword, target;
  return {
    setters: [function (_teamelfAuthResetResetPassword) {
      ResetPassword = _teamelfAuthResetResetPassword.default;
    }],
    execute: function () {
      target = document.getElementById('react-render-target-password-reset');

      if (target) {
        ReactDOM.render(React.createElement(ResetPassword, null), target);
      }
    }
  };
});