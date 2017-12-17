"use strict";

System.register("teamelf/login/Header", [], function (_export, _context) {
  "use strict";

  var _createClass, _class;

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

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: "handleSubmit",
          value: function handleSubmit() {}
        }, {
          key: "render",
          value: function render() {
            return React.createElement(
              "div",
              null,
              React.createElement(
                "div",
                null,
                "LOGO"
              ),
              React.createElement(
                "div",
                null,
                "SubTitle"
              )
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export("default", _class);
    }
  };
});
'use strict';

System.register('teamelf/login/LoginForm', [], function (_export, _context) {
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
                password: CryptoJS.SHA1(_this2.state.password || '').toString(),
                remember: _this2.state.remember || false
              };
              _this2.setState({ loading: true });
              axios.post('auth/login', user).then(function (r) {
                window.location.href = '/';
              }).catch(function (e) {
                setTimeout(function () {
                  return _this2.setState({ loading: false });
                }, 1000);
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
                  size: 'large', placeholder: '\u767B\u5F55\u540D / \u90AE\u7BB1',
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
                    { href: '/login' },
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
                    icon: 'poweroff'
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

System.register('teamelf/login/main', ['teamelf/login/Header', 'teamelf/login/LoginForm'], function (_export, _context) {
  "use strict";

  var Header, LoginForm, _createClass, _antd, Layout, Button, Icon, Content, Footer, LoginPage, target;

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
    setters: [function (_teamelfLoginHeader) {
      Header = _teamelfLoginHeader.default;
    }, function (_teamelfLoginLoginForm) {
      LoginForm = _teamelfLoginLoginForm.default;
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
      Layout = _antd.Layout;
      Button = _antd.Button;
      Icon = _antd.Icon;
      Content = Layout.Content;
      Footer = Layout.Footer;

      LoginPage = function (_React$Component) {
        _inherits(LoginPage, _React$Component);

        function LoginPage(props) {
          _classCallCheck(this, LoginPage);

          var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

          _this.loginInterfaces = [{ icon: React.createElement(Icon, { type: 'qq' }), to: 'qq' }, { icon: React.createElement(Icon, { type: 'wechat' }), to: 'wechat' }, { icon: React.createElement(Icon, { type: 'gitlab' }), to: 'gitlab' }, { icon: React.createElement(Icon, { type: 'github' }), to: 'github' }];
          return _this;
        }

        _createClass(LoginPage, [{
          key: 'render',
          value: function render() {
            var layoutStyle = {
              paddingTop: '110px', textAlign: 'center'
            };
            var contentStyle = {
              width: 350, margin: '0 auto'
            };
            var footerStyle = {
              position: 'fixed', bottom: 0, left: 0, right: 0
            };
            return React.createElement(
              Layout,
              { style: layoutStyle },
              React.createElement(
                Content,
                { style: contentStyle },
                React.createElement(Header, null),
                React.createElement('div', { style: { height: 50 } }),
                React.createElement(LoginForm, null),
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
              ),
              React.createElement(
                Footer,
                { style: footerStyle },
                '\xA92017 TeamELF'
              )
            );
          }
        }]);

        return LoginPage;
      }(React.Component);

      target = document.getElementById('react-render-target-login');

      if (target) {
        ReactDOM.render(React.createElement(LoginPage, null), target);
      }
    }
  };
});