"use strict";

System.register("teamelf/auth/Header", [], function (_export, _context) {
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
          key: "render",
          value: function render() {
            return React.createElement(
              "div",
              null,
              React.createElement(
                "a",
                { href: "/" },
                React.createElement("img", { height: "100px", src: "" }),
                React.createElement(
                  "h2",
                  { style: { padding: '20px 0' } },
                  window.config.name
                )
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

System.register('teamelf/auth/Layout', ['teamelf/auth/Header'], function (_export, _context) {
  "use strict";

  var Header, _createClass, _antd, Layout, Content, Footer, _class;

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
    setters: [function (_teamelfAuthHeader) {
      Header = _teamelfAuthHeader.default;
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
      Content = Layout.Content;
      Footer = Layout.Footer;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'view',
          value: function view() {
            return React.createElement(
              'div',
              null,
              'auth basic layout'
            );
          }
        }, {
          key: 'render',
          value: function render() {
            var layoutStyle = {
              position: 'relative',
              minHeight: '100vh', padding: '70px 0', textAlign: 'center',
              background: 'url(/static/bg.png) no-repeat center center',
              backgroundSize: '100%'
            };
            var contentStyle = {
              width: 350, maxWidth: '90%', margin: '0 auto'
            };
            var footerStyle = {
              background: 'transparent',
              position: 'absolute', bottom: 0, left: 0, right: 0
            };
            return React.createElement(
              Layout,
              { style: layoutStyle },
              React.createElement(
                Content,
                { style: contentStyle },
                React.createElement(Header, null),
                this.view()
              ),
              React.createElement(
                Footer,
                { style: footerStyle },
                React.createElement(
                  'span',
                  null,
                  ' \xA92017 Created by '
                ),
                React.createElement(
                  'a',
                  { href: 'https://github.com/teamelf/teamelf', target: '_blank' },
                  'TeamELF'
                )
              )
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/auth/result/Result', ['teamelf/auth/Layout'], function (_export, _context) {
  "use strict";

  var AuthLayout, _slicedToArray, _createClass, _antd, Icon, _class;

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
    setters: [function (_teamelfAuthLayout) {
      AuthLayout = _teamelfAuthLayout.default;
    }],
    execute: function () {
      _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

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
      Icon = _antd.Icon;

      _class = function (_AuthLayout) {
        _inherits(_class, _AuthLayout);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          var fontSize = '64px';
          _this.icons = {
            success: React.createElement(Icon, { type: 'check-circle', style: { color: '#52c41a', fontSize: fontSize } })
          };
          return _this;
        }

        _createClass(_class, [{
          key: 'getQuiries',
          value: function getQuiries() {
            var q = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = window.location.search.substr(1).split('&')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var kv = _step.value;

                var _kv$split = kv.split('='),
                    _kv$split2 = _slicedToArray(_kv$split, 2),
                    key = _kv$split2[0],
                    value = _kv$split2[1];

                q[key] = decodeURIComponent(value || '');
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            q.redirect = +q.redirect || 0;
            if (q.redirect > 0) {
              setTimeout(function () {
                return window.location.href = '/';
              }, q.redirect * 1000);
            }
            return q;
          }
        }, {
          key: 'view',
          value: function view() {
            var query = this.getQuiries();
            var Icon = this.icons[query.type] || this.icons.success;
            return React.createElement(
              'div',
              null,
              React.createElement(
                'div',
                { style: { margin: '50px 0' } },
                Icon
              ),
              React.createElement(
                'h3',
                null,
                query.message
              ),
              React.createElement(
                'div',
                null,
                query.redirect > 0 && React.createElement(
                  'span',
                  null,
                  '\u5C06\u5728 ',
                  query.redirect,
                  ' \u79D2\u540E\u81EA\u52A8\u8DF3\u8F6C\u9996\u9875\uFF0C\u6216\u70B9\u6B64\u7ACB\u5373'
                ),
                React.createElement(
                  'a',
                  { href: '/' },
                  '\u8FD4\u56DE\u9996\u9875'
                )
              )
            );
          }
        }]);

        return _class;
      }(AuthLayout);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/auth/result/main', ['teamelf/auth/result/Result'], function (_export, _context) {
  "use strict";

  var Result, target;
  return {
    setters: [function (_teamelfAuthResultResult) {
      Result = _teamelfAuthResultResult.default;
    }],
    execute: function () {
      target = document.getElementById('react-render-target-result');

      if (target) {
        ReactDOM.render(React.createElement(Result, null), target);
      }
    }
  };
});
'use strict';

System.register('teamelf/auth/forget/ForgetPassword', ['teamelf/auth/Layout'], function (_export, _context) {
  "use strict";

  var AuthLayout, _createClass, _antd, Form, Button, Input, _class;

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
    setters: [function (_teamelfAuthLayout) {
      AuthLayout = _teamelfAuthLayout.default;
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

      _class = function (_AuthLayout) {
        _inherits(_class, _AuthLayout);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            username: '',
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
              username: this.state.username || ''
            };
            this.setState({ loading: true });
            axios.post('/auth/forget', user).then(function (r) {
              window.location.href = '/r' + '?type=success' + ('&message=\u5BC6\u7801\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u53D1\u9001\u5230\u90AE\u7BB1 [ ' + r.data.email + ' ]\uFF0C\u8BF7\u6CE8\u610F\u67E5\u6536\u90AE\u4EF6');
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
              { onSubmit: this.handleSubmit.bind(this) },
              React.createElement(
                Form.Item,
                null,
                React.createElement(Input, {
                  size: 'large', placeholder: '\u7528\u6237\u540D / \u90AE\u7BB1',
                  value: this.state.username,
                  onChange: function onChange(e) {
                    return _this3.setState({ username: e.target.value });
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
      }(AuthLayout);

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

System.register('teamelf/auth/reset/ResetPassword', ['teamelf/auth/Layout'], function (_export, _context) {
  "use strict";

  var AuthLayout, _createClass, _antd, Form, Button, Input, _class;

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
    setters: [function (_teamelfAuthLayout) {
      AuthLayout = _teamelfAuthLayout.default;
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

      _class = function (_AuthLayout) {
        _inherits(_class, _AuthLayout);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            username: '',
            password: '',
            passwordConfirmation: '',
            loading: false
          };
          return _this;
        }

        _createClass(_class, [{
          key: 'token',
          value: function token() {
            var token = window.location.href.split('/');
            token = token[token.length - 1];
            return token;
          }
        }, {
          key: 'handleSubmit',
          value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            var user = {
              username: this.state.username || '',
              password: this.state.password ? CryptoJS.SHA1(this.state.password).toString() : '',
              passwordConfirmation: this.state.passwordConfirmation ? CryptoJS.SHA1(this.state.passwordConfirmation).toString() : ''
            };
            this.setState({ loading: true });
            axios.post('/auth/reset/' + this.token(), user).then(function (r) {
              window.location.href = '/r' + '?type=success' + '&message=密码重置成功' + '&redirect=5';
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
              { onSubmit: this.handleSubmit.bind(this) },
              React.createElement(
                Form.Item,
                null,
                React.createElement(Input, {
                  size: 'large', value: this.token(),
                  disabled: true
                })
              ),
              React.createElement(
                Form.Item,
                null,
                React.createElement(Input, {
                  size: 'large', placeholder: '\u7528\u6237\u540D / \u90AE\u7BB1',
                  value: this.state.username,
                  onChange: function onChange(e) {
                    return _this3.setState({ username: e.target.value });
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
                    return _this3.setState({ password: e.target.value });
                  },
                  disabled: this.state.loading
                })
              ),
              React.createElement(
                Form.Item,
                null,
                React.createElement(Input, {
                  type: 'passwordConfirmation', size: 'large', placeholder: '\u786E\u8BA4\u5BC6\u7801',
                  value: this.state.passwordConfirmation,
                  onChange: function onChange(e) {
                    return _this3.setState({ passwordConfirmation: e.target.value });
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
                  '\u91CD\u7F6E'
                )
              )
            );
          }
        }]);

        return _class;
      }(AuthLayout);

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
'use strict';

System.register('teamelf/auth/login/Login', ['teamelf/auth/Layout', 'teamelf/auth/login/LoginForm'], function (_export, _context) {
  "use strict";

  var AuthLayout, LoginForm, _createClass, _antd, Button, Icon, LoginPage;

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
    setters: [function (_teamelfAuthLayout) {
      AuthLayout = _teamelfAuthLayout.default;
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

      LoginPage = function (_AuthLayout) {
        _inherits(LoginPage, _AuthLayout);

        function LoginPage(props) {
          _classCallCheck(this, LoginPage);

          var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

          _this.loginInterfaces = [{ icon: React.createElement(Icon, { type: 'qq' }), to: 'qq' }, { icon: React.createElement(Icon, { type: 'wechat' }), to: 'wechat' }, { icon: React.createElement(Icon, { type: 'gitlab' }), to: 'gitlab' }, { icon: React.createElement(Icon, { type: 'github' }), to: 'github' }];
          return _this;
        }

        _createClass(LoginPage, [{
          key: 'view',
          value: function view() {
            return React.createElement(
              'div',
              null,
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
            );
          }
        }]);

        return LoginPage;
      }(AuthLayout);

      _export('default', LoginPage);
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
                window.location.href = '/';
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