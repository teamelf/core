'use strict';

System.register('teamelf/App', ['teamelf/Error', 'teamelf/layout/SideNav', 'teamelf/layout/Header', 'teamelf/layout/Footer', 'teamelf/Home', 'teamelf/Member', 'teamelf/Config', 'teamelf/Mailer', 'teamelf/Profile', 'teamelf/Permission'], function (_export, _context) {
  "use strict";

  var RedirectAs404, SideNav, Header, Footer, Home, Member, Config, Mailer, Profile, Permission, _createClass, _ReactRouterDOM, Switch, Route, Redirect, _antd, Layout, _class;

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
    setters: [function (_teamelfError) {
      RedirectAs404 = _teamelfError.RedirectAs404;
    }, function (_teamelfLayoutSideNav) {
      SideNav = _teamelfLayoutSideNav.default;
    }, function (_teamelfLayoutHeader) {
      Header = _teamelfLayoutHeader.default;
    }, function (_teamelfLayoutFooter) {
      Footer = _teamelfLayoutFooter.default;
    }, function (_teamelfHome) {
      Home = _teamelfHome.default;
    }, function (_teamelfMember) {
      Member = _teamelfMember.default;
    }, function (_teamelfConfig) {
      Config = _teamelfConfig.default;
    }, function (_teamelfMailer) {
      Mailer = _teamelfMailer.default;
    }, function (_teamelfProfile) {
      Profile = _teamelfProfile.default;
    }, function (_teamelfPermission) {
      Permission = _teamelfPermission.default;
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

      _ReactRouterDOM = ReactRouterDOM;
      Switch = _ReactRouterDOM.Switch;
      Route = _ReactRouterDOM.Route;
      Redirect = _ReactRouterDOM.Redirect;
      _antd = antd;
      Layout = _antd.Layout;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.routes = [{ path: '/home', component: Home }, { path: '/member', component: Member }, { path: '/config', component: Config }, { path: '/mailer', component: Mailer }, { path: '/profile', exact: true, component: Profile }, { path: '/permission', exact: true, component: Permission }];
          // use localStorage.sideNavCollapsed to avoid page jump due to collapsed judge
          _this.state = {
            collapsed: localStorage.sideNavCollapsed === 'true'
          };
          return _this;
        }

        _createClass(_class, [{
          key: 'toggleCollapsed',
          value: function toggleCollapsed() {
            var collapsed = !this.state.collapsed;
            this.setState({ collapsed: collapsed });
            localStorage.sideNavCollapsed = collapsed;
          }
        }, {
          key: 'render',
          value: function render() {
            return React.createElement(
              Layout,
              null,
              React.createElement(SideNav, {
                collapsed: this.state.collapsed,
                toggleCollapsed: this.toggleCollapsed.bind(this)
              }),
              React.createElement(
                Layout,
                null,
                React.createElement(Header, {
                  collapsed: this.state.collapsed,
                  toggleCollapsed: this.toggleCollapsed.bind(this)
                }),
                React.createElement(
                  Layout,
                  { style: { margin: 24 } },
                  React.createElement(
                    Switch,
                    null,
                    React.createElement(Route, { exact: true, path: '/', render: function render() {
                        return React.createElement(Redirect, { to: '/home' });
                      } }),
                    this.routes.map(function (o) {
                      return React.createElement(Route, { path: o.path, exact: o.exact, component: o.component });
                    }),
                    React.createElement(Route, { component: RedirectAs404 })
                  ),
                  React.createElement(Footer, null)
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

System.register('teamelf/Config', ['teamelf/layout/Page', 'teamelf/components/InfoEditor'], function (_export, _context) {
  "use strict";

  var Page, InfoEditor, _extends, _createClass, _antd, Button, _class;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

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
    setters: [function (_teamelfLayoutPage) {
      Page = _teamelfLayoutPage.default;
    }, function (_teamelfComponentsInfoEditor) {
      InfoEditor = _teamelfComponentsInfoEditor.default;
    }],
    execute: function () {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

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

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.title = '站点基本设置';
          _this.description = React.createElement(
            Button,
            {
              type: 'primary',
              icon: 'reload',
              onClick: _this.reload.bind(_this)
            },
            '\u4FEE\u6539\u7AD9\u70B9\u914D\u7F6E\u987B\u70B9\u6B64\u5237\u65B0\u65B9\u53EF\u751F\u6548'
          );
          _this.state = _extends({}, window.config);
          return _this;
        }

        _createClass(_class, [{
          key: 'reload',
          value: function reload() {
            window.location.reload();
          }
        }, {
          key: 'edit',
          value: function edit(key, value) {
            var _this2 = this;

            return axios.put('config/' + key, { value: value }).then(function (r) {
              _this2.setState(_defineProperty({}, key, value));
            });
          }
        }, {
          key: 'view',
          value: function view() {
            return React.createElement(
              'div',
              null,
              React.createElement(InfoEditor, {
                label: '\u56E2\u961F\u540D\u79F0',
                value: this.state.name,
                onEdit: this.edit.bind(this, 'name')
              }),
              React.createElement(InfoEditor, {
                label: '\u56E2\u961F\u63CF\u8FF0',
                value: this.state.description,
                onEdit: this.edit.bind(this, 'description')
              })
            );
          }
        }]);

        return _class;
      }(Page);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/Error', [], function (_export, _context) {
  "use strict";

  var _extends, _createClass, _ReactRouterDOM, Redirect, _class, RedirectAs404;

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
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

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

      _ReactRouterDOM = ReactRouterDOM;
      Redirect = _ReactRouterDOM.Redirect;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            return React.createElement(
              'div',
              null,
              React.createElement(
                'h1',
                null,
                'ERROR'
              ),
              React.createElement(
                'div',
                null,
                'code: ',
                this.props.error.code
              ),
              React.createElement(
                'div',
                null,
                'message: ',
                this.props.error.message
              )
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export('default', _class);

      _export('RedirectAs404', RedirectAs404 = function (_React$Component2) {
        _inherits(RedirectAs404, _React$Component2);

        function RedirectAs404() {
          _classCallCheck(this, RedirectAs404);

          return _possibleConstructorReturn(this, (RedirectAs404.__proto__ || Object.getPrototypeOf(RedirectAs404)).apply(this, arguments));
        }

        _createClass(RedirectAs404, [{
          key: 'render',
          value: function render() {
            return React.createElement(Redirect, { to: _extends({}, this.props.location, {
                isError: true,
                error: {
                  code: 404,
                  message: 'Not found'
                }
              }) });
          }
        }]);

        return RedirectAs404;
      }(React.Component));

      _export('RedirectAs404', RedirectAs404);
    }
  };
});
'use strict';

System.register('teamelf/Home', ['teamelf/layout/Page'], function (_export, _context) {
  "use strict";

  var Page, _createClass, _class;

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
    setters: [function (_teamelfLayoutPage) {
      Page = _teamelfLayoutPage.default;
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

      _class = function (_Page) {
        _inherits(_class, _Page);

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
              'HOME'
            );
          }
        }]);

        return _class;
      }(Page);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/Mailer', ['teamelf/layout/Page', 'teamelf/mailer/MailerCardItem'], function (_export, _context) {
  "use strict";

  var Page, MailerCardItem, _extends, _createClass, _antd, Row, Col, Button, _class;

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
    setters: [function (_teamelfLayoutPage) {
      Page = _teamelfLayoutPage.default;
    }, function (_teamelfMailerMailerCardItem) {
      MailerCardItem = _teamelfMailerMailerCardItem.default;
    }],
    execute: function () {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

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
      Row = _antd.Row;
      Col = _antd.Col;
      Button = _antd.Button;

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.title = '邮箱发信设置';
          _this.description = React.createElement(
            Button,
            {
              type: 'primary',
              icon: 'mail',
              onClick: _this.createMailer.bind(_this)
            },
            '\u65B0\u5EFA\u53D1\u4FE1\u90AE\u7BB1'
          );
          _this.state = {
            mailers: []
          };
          _this.fetchEmailAccounts();
          return _this;
        }

        _createClass(_class, [{
          key: 'fetchEmailAccounts',
          value: function fetchEmailAccounts() {
            var _this2 = this;

            axios.get('mailer').then(function (r) {
              _this2.setState({ mailers: r.data });
            });
          }
        }, {
          key: 'createMailer',
          value: function createMailer() {
            var _this3 = this;

            axios.post('mailer').then(function (r) {
              _this3.fetchEmailAccounts();
              antd.notification.success({
                message: '新建成功',
                description: '新建发信邮箱成功，请修改配置详情'
              });
            });
          }
        }, {
          key: 'view',
          value: function view() {
            var _this4 = this;

            return React.createElement(
              Row,
              { gutter: 16, type: 'flex' },
              this.state.mailers.map(function (o) {
                return React.createElement(
                  Col,
                  { xs: 24, md: 12, lg: 8 },
                  React.createElement(MailerCardItem, _extends({}, o, {
                    done: function done() {
                      return _this4.fetchEmailAccounts();
                    }
                  }))
                );
              })
            );
          }
        }]);

        return _class;
      }(Page);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/Member', ['teamelf/Error', 'teamelf/member/MemberList', 'teamelf/member/MemberItem', 'teamelf/member/RoleList'], function (_export, _context) {
  "use strict";

  var RedirectAs404, MemberList, MemberItem, RoleList, _createClass, _ReactRouterDOM, Switch, Route, _class;

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
    setters: [function (_teamelfError) {
      RedirectAs404 = _teamelfError.RedirectAs404;
    }, function (_teamelfMemberMemberList) {
      MemberList = _teamelfMemberMemberList.default;
    }, function (_teamelfMemberMemberItem) {
      MemberItem = _teamelfMemberMemberItem.default;
    }, function (_teamelfMemberRoleList) {
      RoleList = _teamelfMemberRoleList.default;
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

      _ReactRouterDOM = ReactRouterDOM;
      Switch = _ReactRouterDOM.Switch;
      Route = _ReactRouterDOM.Route;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.routes = [{
            path: '/member',
            exact: true,
            component: MemberList
          }, {
            path: '/member/:username',
            exact: true,
            component: MemberItem
          }, {
            path: '/role',
            exact: true,
            component: RoleList
          }];
          return _this;
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            return React.createElement(
              Switch,
              null,
              this.routes.map(function (o) {
                return React.createElement(Route, { exact: o.exact, path: o.path, component: o.component });
              }),
              React.createElement(Route, { component: RedirectAs404 })
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

System.register('teamelf/Permission', ['teamelf/layout/Page', 'teamelf/permission/PermissionCardItem'], function (_export, _context) {
  "use strict";

  var Page, PermissionCardItem, _extends, _createClass, _antd, Row, Col, _class;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

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
    setters: [function (_teamelfLayoutPage) {
      Page = _teamelfLayoutPage.default;
    }, function (_teamelfPermissionPermissionCardItem) {
      PermissionCardItem = _teamelfPermissionPermissionCardItem.default;
    }],
    execute: function () {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

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
      Row = _antd.Row;
      Col = _antd.Col;

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.title = '成员组权限设置';
          _this.state = {
            roles: []
          };
          _this.fetch();
          return _this;
        }

        _createClass(_class, [{
          key: 'fetch',
          value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var roles;
              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.fetchRoles();

                    case 2:
                      roles = _context2.sent.data;

                    case 3:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee, this);
            }));

            function fetch() {
              return _ref.apply(this, arguments);
            }

            return fetch;
          }()
        }, {
          key: 'fetchRoles',
          value: function fetchRoles() {
            var _this2 = this;

            return axios.get('role').then(function (r) {
              _this2.setState({ roles: r.data });
              return r;
            });
          }
        }, {
          key: 'view',
          value: function view() {
            var _this3 = this;

            return React.createElement(
              Row,
              { type: 'flex', justify: 'space-between' },
              this.state.roles.map(function (o) {
                return React.createElement(
                  Col,
                  null,
                  React.createElement(PermissionCardItem, _extends({}, o, {
                    done: function done() {
                      return _this3.fetch();
                    }
                  }))
                );
              })
            );
          }
        }]);

        return _class;
      }(Page);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/Profile', ['teamelf/layout/Page', 'teamelf/profile/Security', 'teamelf/profile/Logout'], function (_export, _context) {
  "use strict";

  var Page, Security, Logout, _createClass, _antd, Row, Col, _class;

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
    setters: [function (_teamelfLayoutPage) {
      Page = _teamelfLayoutPage.default;
    }, function (_teamelfProfileSecurity) {
      Security = _teamelfProfileSecurity.default;
    }, function (_teamelfProfileLogout) {
      Logout = _teamelfProfileLogout.default;
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
      Row = _antd.Row;
      Col = _antd.Col;

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.bulletins = [];
          _this.operations = [React.createElement(Security, null), React.createElement(Logout, null)];
          _this.title = window.auth.name;
          _this.description = window.auth.role.name;
          return _this;
        }

        _createClass(_class, [{
          key: 'view',
          value: function view() {
            return React.createElement(
              Row,
              { gutter: 16, className: 'profile-page' },
              React.createElement(
                Col,
                { xs: 24, lg: 16 },
                this.bulletins
              ),
              React.createElement(
                Col,
                { xs: 24, lg: 8 },
                this.operations
              )
            );
          }
        }]);

        return _class;
      }(Page);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/main', ['teamelf/App', 'teamelf/Error'], function (_export, _context) {
  "use strict";

  var App, Error, _ReactRouterDOM, BrowserRouter, Route, app, target;

  return {
    setters: [function (_teamelfApp) {
      App = _teamelfApp.default;
    }, function (_teamelfError) {
      Error = _teamelfError.default;
    }],
    execute: function () {
      _ReactRouterDOM = ReactRouterDOM;
      BrowserRouter = _ReactRouterDOM.BrowserRouter;
      Route = _ReactRouterDOM.Route;
      app = React.createElement(
        BrowserRouter,
        { forceRefresh: true },
        React.createElement(Route, { render: function render(_ref) {
            var location = _ref.location;
            return location.isError ? React.createElement(Error, { error: location.error }) : React.createElement(App, null);
          } })
      );
      target = document.getElementById('react-render-target-app');

      if (target) {
        ReactDOM.render(app, target);
      }
    }
  };
});
"use strict";

System.register("teamelf/components/Gender", [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Icon, _class;

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
      Icon = _antd.Icon;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: "render",
          value: function render() {
            if (!this.props.gender) {
              return React.createElement(Icon, { type: "man" });
            } else {
              return React.createElement(Icon, { type: "woman" });
            }
          }
        }]);

        return _class;
      }(React.Component);

      _export("default", _class);
    }
  };
});
'use strict';

System.register('teamelf/components/InfoEditor', [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Input, Radio, Icon, Tooltip, _class;

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
      Input = _antd.Input;
      Radio = _antd.Radio;
      Icon = _antd.Icon;
      Tooltip = _antd.Tooltip;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            editor: false,
            value: _this.props.value
          };
          return _this;
        }

        _createClass(_class, [{
          key: 'toggleEditor',
          value: function toggleEditor() {
            var editor = !this.state.editor;
            this.setState({
              editor: editor,
              value: this.props.value
            });
          }
        }, {
          key: 'submitChange',
          value: function submitChange(e) {
            var _this2 = this;

            var v = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.value;

            this.props.onEdit(v).then(function (r) {
              _this2.toggleEditor();
            });
          }
        }, {
          key: 'renderRadioGroup',
          value: function renderRadioGroup() {
            var _this3 = this;

            var options = this.props.options || [];
            return React.createElement(
              Radio.Group,
              {
                value: this.props.value,
                onChange: function onChange(e) {
                  return _this3.submitChange(e, e.target.value);
                }
              },
              options.map(function (o) {
                return React.createElement(
                  Radio,
                  { value: o.value },
                  o.label
                );
              })
            );
          }
        }, {
          key: 'renderTextArea',
          value: function renderTextArea() {
            var _this4 = this;

            return React.createElement(Input.TextArea, {
              autosize: { minRows: 2, maxRows: 6 },
              style: { width: 'auto', resize: 'horizontal' },
              value: this.state.value,
              onChange: function onChange(e) {
                return _this4.setState({ value: e.target.value });
              },
              onPressEnter: this.submitChange.bind(this)
            });
          }
        }, {
          key: 'renderInput',
          value: function renderInput() {
            var _this5 = this;

            return React.createElement(Input, {
              type: this.props.type || 'text',
              style: { width: 'auto' },
              value: this.state.value,
              onChange: function onChange(e) {
                return _this5.setState({ value: e.target.value });
              },
              onPressEnter: this.submitChange.bind(this)
            });
          }
        }, {
          key: 'renderEditor',
          value: function renderEditor() {
            switch (this.props.type) {
              case 'radio':
                return this.renderRadioGroup();
              case 'textarea':
                return this.renderTextArea();
              case 'text':
              case 'password':
              default:
                return this.renderInput();
            }
          }
        }, {
          key: 'render',
          value: function render() {
            return React.createElement(
              'div',
              { className: 'clearfix', style: { lineHeight: '40px' } },
              React.createElement(
                'h3',
                { style: { display: 'inline-block', marginRight: 20 } },
                this.props.label
              ),
              !this.state.editor && React.createElement(
                'div',
                { style: { display: 'inline' } },
                this.props.value || React.createElement(
                  'span',
                  { style: { color: '#ddd' } },
                  '<\u65E0>'
                )
              ),
              !this.props.disabled && !this.state.editor && React.createElement(
                Tooltip,
                { title: '\u70B9\u6B64\u7F16\u8F91', placement: 'right' },
                React.createElement(Icon, {
                  style: { marginLeft: 20, cursor: 'pointer' },
                  type: 'edit',
                  onClick: this.toggleEditor.bind(this) })
              ),
              this.state.editor && this.renderEditor()
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

System.register('teamelf/layout/AuthBar', [], function (_export, _context) {
  "use strict";

  var _extends, _createClass, _ReactRouterDOM, Link, withRouter, _antd, Avatar, AuthBar;

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
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

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

      _ReactRouterDOM = ReactRouterDOM;
      Link = _ReactRouterDOM.Link;
      withRouter = _ReactRouterDOM.withRouter;
      _antd = antd;
      Avatar = _antd.Avatar;

      AuthBar = function (_React$Component) {
        _inherits(AuthBar, _React$Component);

        function AuthBar(props) {
          _classCallCheck(this, AuthBar);

          var _this = _possibleConstructorReturn(this, (AuthBar.__proto__ || Object.getPrototypeOf(AuthBar)).call(this, props));

          _this.state = {
            hover: false,
            active: _this.props.location.pathname === '/profile'
          };
          return _this;
        }

        _createClass(AuthBar, [{
          key: 'getStyle',
          value: function getStyle() {
            var style = {
              padding: '0 20px',
              cursor: 'pointer',
              transition: 'background .3s'
            };
            if (this.state.active || this.state.hover) {
              return _extends({}, style, {
                background: '#e6f7ff'
              });
            } else {
              return style;
            }
          }
        }, {
          key: 'handleHover',
          value: function handleHover(e) {
            this.setState({ hover: e.type === 'mouseenter' });
          }
        }, {
          key: 'render',
          value: function render() {
            return React.createElement(
              Link,
              { to: '/profile' },
              React.createElement(
                'div',
                {
                  style: this.getStyle(),
                  onMouseEnter: this.handleHover.bind(this),
                  onMouseLeave: this.handleHover.bind(this)
                },
                React.createElement(Avatar, { style: { marginTop: 16, float: 'left' } }),
                React.createElement(
                  'div',
                  { style: { display: 'inline-block', marginLeft: 20, paddingTop: (64 - 20 - 16) / 2, height: 64 } },
                  React.createElement(
                    'div',
                    { style: { lineHeight: '20px' } },
                    window.auth.name
                  ),
                  React.createElement(
                    'div',
                    { style: { lineHeight: '16px', fontSize: '.8em' } },
                    window.auth.role.name
                  )
                )
              )
            );
          }
        }]);

        return AuthBar;
      }(React.Component);

      _export('default', withRouter(AuthBar));
    }
  };
});
"use strict";

System.register("teamelf/layout/Footer", [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Layout, Footer, _class;

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
      Layout = _antd.Layout;
      Footer = Layout.Footer;

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
              Footer,
              { style: { textAlign: 'center' } },
              React.createElement(
                "span",
                null,
                window.config.name
              ),
              React.createElement(
                "span",
                null,
                " \xA92017 Created by "
              ),
              React.createElement(
                "a",
                { href: "https://github.com/teamelf/teamelf", target: "_blank" },
                "TeamELF"
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

System.register('teamelf/layout/Header', ['teamelf/layout/AuthBar'], function (_export, _context) {
  "use strict";

  var AuthBar, _createClass, _antd, Layout, Icon, Header, _class;

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
    setters: [function (_teamelfLayoutAuthBar) {
      AuthBar = _teamelfLayoutAuthBar.default;
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
      Icon = _antd.Icon;
      Header = Layout.Header;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            var style = {
              position: 'relative',
              background: '#fff',
              boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)',
              padding: '0 24px 0 0'
            };
            return React.createElement(
              Header,
              { style: style },
              React.createElement(Icon, {
                className: 'trigger',
                type: this.props.collapsed ? 'menu-unfold' : 'menu-fold',
                onClick: this.props.toggleCollapsed
              }),
              React.createElement(
                'div',
                { style: { float: 'right' } },
                React.createElement(AuthBar, null)
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

System.register('teamelf/layout/Logo', [], function (_export, _context) {
  "use strict";

  var _createClass, _ReactRouterDOM, Link, _class;

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

      _ReactRouterDOM = ReactRouterDOM;
      Link = _ReactRouterDOM.Link;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            var imgStyle = {
              display: 'inline-block',
              height: 64,
              paddingTop: (64 - 45) / 2
            };
            var textStyle = {
              display: 'inline-block',
              marginLeft: 10,
              color: '#fff',
              fontSize: 16
            };
            return React.createElement(
              Link,
              { to: '/home', style: this.props.style },
              React.createElement(
                'div',
                { style: imgStyle },
                React.createElement('img', { height: '45px', src: window.config.logo })
              ),
              React.createElement(
                'div',
                { style: textStyle },
                window.config.name
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

System.register('teamelf/layout/Page', [], function (_export, _context) {
  "use strict";

  var _createClass, _ReactRouterDOM, Link, _antd, Layout, Breadcrumb, Icon, Menu, Content, Page;

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

      _ReactRouterDOM = ReactRouterDOM;
      Link = _ReactRouterDOM.Link;
      _antd = antd;
      Layout = _antd.Layout;
      Breadcrumb = _antd.Breadcrumb;
      Icon = _antd.Icon;
      Menu = _antd.Menu;
      Content = Layout.Content;

      Page = function (_React$Component) {
        _inherits(Page, _React$Component);

        function Page(props) {
          _classCallCheck(this, Page);

          if (new.target === Page) {
            throw new Error('ContentComponent cannot be instanced directly!');
          }

          var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

          _this.navigations = []; // [{path, icon, title}]
          _this.title = null;
          _this.description = null;
          return _this;
        }

        _createClass(Page, [{
          key: 'header',
          value: function header() {
            if (!this.navigations.length && !this.title && !this.description) {
              return null;
            }
            return React.createElement(
              'div',
              null,
              this.navigations.length > 0 && React.createElement(
                Breadcrumb,
                { style: { marginBottom: 16 } },
                this.navigations.map(function (o) {
                  return React.createElement(
                    Breadcrumb.Item,
                    null,
                    React.createElement(
                      Link,
                      { to: o.path },
                      React.createElement(Icon, { type: o.icon }),
                      o.title
                    )
                  );
                })
              ),
              !!this.title && React.createElement(
                'h2',
                null,
                this.title
              ),
              !!this.description && React.createElement(
                'div',
                null,
                this.description
              )
            );
          }
        }, {
          key: 'view',
          value: function view() {
            return React.createElement(
              'div',
              null,
              'page works'
            );
          }
        }, {
          key: 'render',
          value: function render() {
            var Header = this.header();
            var headerStyle = {
              padding: '16px 32px',
              background: '#fff',
              boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)'
            };
            return React.createElement(
              Layout,
              { style: { margin: -24 } },
              !!Header && React.createElement(
                'div',
                { style: headerStyle },
                Header
              ),
              React.createElement(
                Content,
                { style: { margin: 24 } },
                this.view()
              )
            );
          }
        }]);

        return Page;
      }(React.Component);

      _export('default', Page);
    }
  };
});
'use strict';

System.register('teamelf/layout/SideNav', ['teamelf/layout/Logo'], function (_export, _context) {
  "use strict";

  var Logo, _extends, _createClass, _ReactRouterDOM, Link, withRouter, _antd, Layout, Menu, Icon, Sider, SideNav;

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
    setters: [function (_teamelfLayoutLogo) {
      Logo = _teamelfLayoutLogo.default;
    }],
    execute: function () {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

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

      _ReactRouterDOM = ReactRouterDOM;
      Link = _ReactRouterDOM.Link;
      withRouter = _ReactRouterDOM.withRouter;
      _antd = antd;
      Layout = _antd.Layout;
      Menu = _antd.Menu;
      Icon = _antd.Icon;
      Sider = Layout.Sider;

      SideNav = function (_React$Component) {
        _inherits(SideNav, _React$Component);

        function SideNav(props) {
          _classCallCheck(this, SideNav);

          var _this = _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call(this, props));

          _this.navigations = [{ key: 'home', icon: 'home', title: '概览', children: [{ path: '/home', icon: 'home', title: '工作台' }] }, { key: 'user', icon: 'user', title: '成员', children: [{ path: '/member', pattern: /^\/member(\/[^\/]*)?$/, icon: 'user', title: '编辑成员' }, { path: '/permission', icon: 'key', title: '成员组权限管理' }] }, { key: 'config', icon: 'tool', title: '站点', children: [{ path: '/config', icon: 'tool', title: '基本设置' }, { path: '/mailer', icon: 'mail', title: '邮箱设置' }] }];
          _this.state = _extends({}, _this.getNavigationFromRoute());
          return _this;
        }

        _createClass(SideNav, [{
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
            // change navigation selected status when routes changed
            var navigations = this.getNavigationFromRoute(nextProps.location.pathname);
            if (nextProps.collapsed) {
              navigations.openedNavigationGroup = null;
            }
            this.setState(navigations);
          }
        }, {
          key: 'getNavigationFromRoute',
          value: function getNavigationFromRoute() {
            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.location.pathname;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.navigations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var nav = _step.value;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = nav.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var o = _step2.value;

                    if (path.match(o.pattern || o.path)) {
                      return {
                        openedNavigationGroup: nav.key,
                        currentNavigation: o.path
                      };
                    }
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                      _iterator2.return();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
                }
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

            return {
              openedNavigationGroup: null,
              currentNavigation: null
            };
          }
        }, {
          key: 'handleOpenNavigation',
          value: function handleOpenNavigation(keys) {
            var openedNavigationGroup = this.state.openedNavigationGroup;
            if (keys.length === 0 || openedNavigationGroup === keys[keys.length - 1]) {
              openedNavigationGroup = null;
            } else {
              openedNavigationGroup = keys[keys.length - 1];
            }
            this.setState({ openedNavigationGroup: openedNavigationGroup });
          }
        }, {
          key: 'render',
          value: function render() {
            var logoStyle = {
              position: 'relative',
              height: 64,
              background: '#002140',
              textAlign: 'center',
              overflow: 'hidden'
            };
            return React.createElement(
              Sider,
              {
                width: 256, breakpoint: 'md',
                style: { boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)', zIndex: '999' },
                collapsible: true, trigger: null,
                collapsed: this.props.collapsed,
                onCollapse: this.props.toggleCollapsed
              },
              React.createElement(
                'div',
                { style: logoStyle },
                React.createElement(Logo, { style: { lineHeight: '64px' } })
              ),
              React.createElement(
                Menu,
                {
                  theme: 'dark',
                  mode: 'inline',
                  style: { margin: '20px 0' },
                  openKeys: [this.state.openedNavigationGroup],
                  onOpenChange: this.handleOpenNavigation.bind(this),
                  selectedKeys: [this.state.currentNavigation]
                },
                this.navigations.map(function (grp, idx) {
                  return React.createElement(
                    Menu.SubMenu,
                    {
                      key: grp.key,
                      title: React.createElement(
                        'span',
                        null,
                        React.createElement(Icon, { type: grp.icon }),
                        React.createElement(
                          'span',
                          null,
                          grp.title
                        )
                      )
                    },
                    grp.children.map(function (o) {
                      return React.createElement(
                        Menu.Item,
                        { key: o.path },
                        React.createElement(
                          Link,
                          { to: o.path },
                          React.createElement(Icon, { type: o.icon }),
                          React.createElement(
                            'span',
                            null,
                            o.title
                          )
                        )
                      );
                    })
                  );
                })
              )
            );
          }
        }]);

        return SideNav;
      }(React.Component);

      _export('default', withRouter(SideNav));
    }
  };
});
'use strict';

System.register('teamelf/mailer/MailerCardItem', ['teamelf/components/InfoEditor'], function (_export, _context) {
  "use strict";

  var InfoEditor, _createClass, _antd, Card, Button, Tag, _class;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

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
    setters: [function (_teamelfComponentsInfoEditor) {
      InfoEditor = _teamelfComponentsInfoEditor.default;
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
      Card = _antd.Card;
      Button = _antd.Button;
      Tag = _antd.Tag;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.testBtnStatus = {
            default: {
              loading: false,
              type: '',
              text: '测试连接'
            },
            testing: {
              loading: true,
              type: 'dashed',
              text: '测试中'
            },
            success: {
              loading: false,
              type: 'primary',
              text: '连接成功'
            },
            error: {
              loading: false,
              type: 'danger',
              text: '连接失败，再试一次？'
            }
          };
          _this.state = {
            status: 'default'
          };
          return _this;
        }

        _createClass(_class, [{
          key: 'setAsDefault',
          value: function setAsDefault() {
            var _this2 = this;

            axios.put('mailer/' + this.props.id + '/default').then(function (r) {
              _this2.props.done();
              antd.notification.success({
                message: '默认发信邮箱设置成功'
              });
            });
          }
        }, {
          key: 'delete',
          value: function _delete() {
            var _this3 = this;

            antd.Modal.confirm({
              title: '不可恢复',
              content: '确定要删除么？该操作可能无法恢复',
              onOk: function onOk() {
                axios.delete('mailer/' + _this3.props.id).then(function (r) {
                  _this3.props.done();
                  antd.notification.success({
                    message: '删除成功'
                  });
                });
              }
            });
          }
        }, {
          key: 'edit',
          value: function edit(key, value) {
            var _this4 = this;

            return axios.put('mailer/' + this.props.id, _defineProperty({}, key, value)).then(function (r) {
              _this4.props.done();
              return r;
            });
          }
        }, {
          key: 'testConnection',
          value: function testConnection() {
            var _this5 = this;

            this.setState({ status: 'testing' });
            axios.post('mailer/' + this.props.id + '/test').then(function (r) {
              if (r.data.connection === true) {
                _this5.setState({ status: 'success' });
              } else {
                _this5.setState({ status: 'error' });
              }
            });
          }
        }, {
          key: 'render',
          value: function render() {
            return React.createElement(
              Card,
              {
                style: { marginBottom: 20 },
                title: this.props.sender,
                extra: this.props.default && React.createElement(
                  Tag,
                  { color: 'red' },
                  '\u9ED8\u8BA4'
                ),
                actions: [React.createElement(
                  Button,
                  {
                    ghost: true, type: 'primary',
                    disabled: this.props.default,
                    onClick: this.setAsDefault.bind(this)
                  },
                  '\u8BBE\u4E3A\u9ED8\u8BA4'
                ), React.createElement(
                  Button,
                  {
                    type: 'danger',
                    onClick: this.delete.bind(this)
                  },
                  '\u5220\u9664'
                )]
              },
              React.createElement(InfoEditor, {
                label: '\u9A71\u52A8',
                value: this.props.driver,
                onEdit: this.edit.bind(this, 'driver'),
                type: 'radio',
                options: [{ label: 'SMTP', value: 'smtp' }]
              }),
              React.createElement(InfoEditor, {
                label: '\u4E3B\u673A',
                value: this.props.host,
                onEdit: this.edit.bind(this, 'host')
              }),
              React.createElement(InfoEditor, {
                label: '\u7AEF\u53E3',
                value: this.props.port,
                onEdit: this.edit.bind(this, 'port')
              }),
              React.createElement(InfoEditor, {
                label: '\u52A0\u5BC6\u65B9\u5F0F',
                value: this.props.encryption,
                onEdit: this.edit.bind(this, 'encryption'),
                type: 'radio',
                options: [{ label: 'SSL', value: 'ssl' }, { label: 'TLS', value: 'tls' }, { label: '不加密', value: '' }]
              }),
              React.createElement(InfoEditor, {
                label: '\u767B\u5F55\u540D',
                value: this.props.username,
                onEdit: this.edit.bind(this, 'username')
              }),
              React.createElement(InfoEditor, {
                label: '\u5BC6\u7801',
                value: this.props.password,
                onEdit: this.edit.bind(this, 'password')
              }),
              React.createElement(InfoEditor, {
                label: '\u53D1\u4FE1\u90AE\u7BB1',
                value: this.props.sender,
                onEdit: this.edit.bind(this, 'sender')
              }),
              React.createElement(InfoEditor, {
                label: '\u5907\u6CE8',
                value: this.props.remark,
                onEdit: this.edit.bind(this, 'remark')
              }),
              React.createElement(
                Button,
                {
                  className: 'full',
                  loading: this.testBtnStatus[this.state.status].loading,
                  type: this.testBtnStatus[this.state.status].type,
                  onClick: this.testConnection.bind(this)
                },
                this.testBtnStatus[this.state.status].text
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

System.register('teamelf/member/MemberCardItem', ['teamelf/components/Gender'], function (_export, _context) {
  "use strict";

  var Gender, _createClass, _ReactRouterDOM, Link, _antd, Card, Tag, Avatar, Meta, _class;

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
    setters: [function (_teamelfComponentsGender) {
      Gender = _teamelfComponentsGender.default;
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

      _ReactRouterDOM = ReactRouterDOM;
      Link = _ReactRouterDOM.Link;
      _antd = antd;
      Card = _antd.Card;
      Tag = _antd.Tag;
      Avatar = _antd.Avatar;
      Meta = Card.Meta;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            return React.createElement(
              Link,
              { to: '/member/' + this.props.username },
              React.createElement(
                Card,
                {
                  hoverable: true,
                  title: React.createElement(
                    'div',
                    null,
                    React.createElement(Gender, { gender: this.props.gender }),
                    ' ',
                    this.props.name
                  ),
                  extra: React.createElement(
                    Tag,
                    { color: this.props.role.color },
                    this.props.role.name
                  )
                },
                React.createElement(
                  Avatar,
                  {
                    style: { float: 'right' },
                    size: 'large'
                  },
                  this.props.name.substr(0, 1)
                ),
                React.createElement(Meta, {
                  style: { marginRight: 50, overflow: 'hidden' },
                  description: React.createElement(
                    'div',
                    null,
                    React.createElement(
                      'div',
                      null,
                      this.props.email
                    ),
                    React.createElement(
                      'div',
                      null,
                      this.props.phone
                    )
                  )
                })
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

System.register('teamelf/member/MemberCreatorModal', [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Modal, Button, Form, Input, Radio, MemberCreateForm, _class;

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

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
      Modal = _antd.Modal;
      Button = _antd.Button;
      Form = _antd.Form;
      Input = _antd.Input;
      Radio = _antd.Radio;

      MemberCreateForm = function (_React$Component) {
        _inherits(MemberCreateForm, _React$Component);

        function MemberCreateForm(props) {
          _classCallCheck(this, MemberCreateForm);

          var _this = _possibleConstructorReturn(this, (MemberCreateForm.__proto__ || Object.getPrototypeOf(MemberCreateForm)).call(this, props));

          _this.state = {
            username: '',
            email: '',
            name: '',
            gender: 0
          };
          return _this;
        }

        _createClass(MemberCreateForm, [{
          key: 'submitForm',
          value: function submitForm() {
            var _this2 = this;

            var member = {
              username: this.state.username,
              email: this.state.email,
              name: this.state.name,
              gender: this.state.gender
            };
            axios.post('member', member).then(function (r) {
              _this2.props.done();
              _this2.props.form.resetFields();
            });
          }
        }, {
          key: 'getUsernameByName',
          value: function getUsernameByName() {
            var _this3 = this;

            var params = { chinese: this.state.name };
            axios.get('helper/pinyin', { params: params }).then(function (r) {
              var _r$data$pinyin = _toArray(r.data.pinyin),
                  lastname = _r$data$pinyin[0],
                  firstname = _r$data$pinyin.slice(1);

              var username = firstname.join('') + '.' + lastname;
              _this3.setState({ username: username });
              _this3.props.form.setFieldsValue({ username: username });
            });
          }
        }, {
          key: 'render',
          value: function render() {
            var _this4 = this;

            var getFieldDecorator = this.props.form.getFieldDecorator;

            return React.createElement(
              Form,
              null,
              React.createElement(
                Form.Item,
                { style: { float: 'right', marginTop: 10, marginBottom: -10 } },
                React.createElement(
                  Radio.Group,
                  {
                    value: this.state.gender,
                    onChange: function onChange(e) {
                      return _this4.setState({ gender: e.target.value });
                    },
                    disabled: this.props.loading
                  },
                  React.createElement(
                    Radio,
                    { value: 0 },
                    '\u7537'
                  ),
                  React.createElement(
                    Radio,
                    { value: 1 },
                    '\u5973'
                  )
                )
              ),
              React.createElement(
                Form.Item,
                { style: { width: 'calc(100% - 150px)' } },
                getFieldDecorator('name', {
                  rules: [{
                    required: true, message: '请输入姓名'
                  }]
                })(React.createElement(Input, {
                  size: 'large', placeholder: '\u59D3\u540D',
                  value: this.state.name,
                  onChange: function onChange(e) {
                    return _this4.setState({ name: e.target.value });
                  },
                  onBlur: this.getUsernameByName.bind(this),
                  disabled: this.props.loading
                }))
              ),
              React.createElement(
                Form.Item,
                null,
                getFieldDecorator('username', {
                  rules: [{
                    required: true, message: '请输入用户名'
                  }]
                })(React.createElement(Input, {
                  size: 'large', placeholder: '\u7528\u6237\u540D',
                  value: this.state.username,
                  onChange: function onChange(e) {
                    return _this4.setState({ username: e.target.value });
                  },
                  disabled: this.props.loading
                }))
              ),
              React.createElement(
                Form.Item,
                null,
                getFieldDecorator('email', {
                  rules: [{
                    required: true, message: '请输入用户名'
                  }, {
                    type: 'email', message: '邮箱不合法'
                  }]
                })(React.createElement(Input, {
                  size: 'large', placeholder: '\u90AE\u7BB1',
                  value: this.state.email,
                  onChange: function onChange(e) {
                    return _this4.setState({ email: e.target.value });
                  },
                  disabled: this.props.loading
                }))
              ),
              React.createElement(
                Form.Item,
                null,
                React.createElement(
                  Button,
                  {
                    className: 'full',
                    type: 'primary', size: 'large',
                    onClick: this.submitForm.bind(this)
                  },
                  '\u521B\u65B0\u65B0\u6210\u5458'
                )
              )
            );
          }
        }]);

        return MemberCreateForm;
      }(React.Component);

      _class = function (_React$Component2) {
        _inherits(_class, _React$Component2);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this5 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this5.state = {
            visible: false,
            loading: false
          };
          return _this5;
        }

        _createClass(_class, [{
          key: 'closeModal',
          value: function closeModal() {
            this.setState({ visible: false });
            this.props.done();
          }
        }, {
          key: 'render',
          value: function render() {
            var _this6 = this;

            var MemberCreateFormWrapper = Form.create()(MemberCreateForm);
            return React.createElement(
              'span',
              null,
              React.createElement(
                Button,
                {
                  type: 'primary',
                  icon: 'user-add',
                  onClick: function onClick() {
                    return _this6.setState({ visible: true });
                  }
                },
                '\u6DFB\u52A0\u65B0\u6210\u5458'
              ),
              React.createElement(
                Modal,
                {
                  title: '\u65B0\u5EFA\u6210\u5458',
                  maskClosable: false,
                  visible: this.state.visible,
                  footer: null,
                  onCancel: this.closeModal.bind(this)
                },
                React.createElement(MemberCreateFormWrapper, {
                  loading: this.state.loading,
                  done: this.closeModal.bind(this)
                })
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

System.register('teamelf/member/MemberItem', ['teamelf/layout/Page', 'teamelf/components/Gender', 'teamelf/components/InfoEditor'], function (_export, _context) {
  "use strict";

  var Page, Gender, InfoEditor, _createClass, _ReactRouterDOM, withRouter, _antd, Tag, Divider, MemberItem;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

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
    setters: [function (_teamelfLayoutPage) {
      Page = _teamelfLayoutPage.default;
    }, function (_teamelfComponentsGender) {
      Gender = _teamelfComponentsGender.default;
    }, function (_teamelfComponentsInfoEditor) {
      InfoEditor = _teamelfComponentsInfoEditor.default;
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

      _ReactRouterDOM = ReactRouterDOM;
      withRouter = _ReactRouterDOM.withRouter;
      _antd = antd;
      Tag = _antd.Tag;
      Divider = _antd.Divider;

      MemberItem = function (_Page) {
        _inherits(MemberItem, _Page);

        function MemberItem(props) {
          _classCallCheck(this, MemberItem);

          var _this = _possibleConstructorReturn(this, (MemberItem.__proto__ || Object.getPrototypeOf(MemberItem)).call(this, props));

          _this.member = null;
          _this.fetchMember();
          return _this;
        }

        _createClass(MemberItem, [{
          key: 'fetchMember',
          value: function fetchMember() {
            var _this2 = this;

            axios.get('member/' + this.props.match.params.username).then(function (r) {
              _this2.member = r.data;
              _this2.forceUpdate();
            });
          }
        }, {
          key: 'edit',
          value: function edit(key, value) {
            var _this3 = this;

            return axios.put('member/' + this.member.username, _defineProperty({}, key, value)).then(function (r) {
              _this3.member[key] = value;
              _this3.forceUpdate();
              return r;
            });
          }
        }, {
          key: 'view',
          value: function view() {
            if (!this.member) return React.createElement('div', null);
            return React.createElement(
              'div',
              { style: { padding: 24, background: '#fff' } },
              React.createElement(
                Tag,
                {
                  style: { float: 'right' },
                  color: this.member.role.color
                },
                this.member.role.name
              ),
              React.createElement(
                'h2',
                null,
                React.createElement(Gender, { gender: this.member.gender }),
                React.createElement(
                  'span',
                  null,
                  ' ',
                  this.member.name
                )
              ),
              React.createElement(Divider, null),
              React.createElement(InfoEditor, {
                label: '\u767B\u5F55\u540D',
                value: this.member.username,
                disabled: true
              }),
              React.createElement(InfoEditor, {
                label: '\u90AE\u3000\u7BB1',
                value: this.member.email,
                onEdit: this.edit.bind(this, 'email')
              }),
              React.createElement(InfoEditor, {
                label: '\u624B\u3000\u673A',
                value: this.member.phone,
                onEdit: this.edit.bind(this, 'phone')
              })
            );
          }
        }]);

        return MemberItem;
      }(Page);

      _export('default', withRouter(MemberItem));
    }
  };
});
'use strict';

System.register('teamelf/member/MemberList', ['teamelf/layout/Page', 'teamelf/member/MemberCardItem', 'teamelf/member/MemberCreatorModal'], function (_export, _context) {
  "use strict";

  var Page, MemberCardItem, MemberCreatorModal, _extends, _createClass, _antd, Row, Col, Icon, Divider, Checkbox, _class;

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
    setters: [function (_teamelfLayoutPage) {
      Page = _teamelfLayoutPage.default;
    }, function (_teamelfMemberMemberCardItem) {
      MemberCardItem = _teamelfMemberMemberCardItem.default;
    }, function (_teamelfMemberMemberCreatorModal) {
      MemberCreatorModal = _teamelfMemberMemberCreatorModal.default;
    }],
    execute: function () {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

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
      Row = _antd.Row;
      Col = _antd.Col;
      Icon = _antd.Icon;
      Divider = _antd.Divider;
      Checkbox = _antd.Checkbox;

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            members: [],
            roles: [],
            chosenRoles: []
          };
          _this.fetchMemberList();
          _this.fetchRoleList();
          return _this;
        }

        _createClass(_class, [{
          key: 'fetchMemberList',
          value: function fetchMemberList() {
            var _this2 = this;

            var params = {
              roles: this.state.chosenRoles.join(',')
            };
            return axios.get('member', { params: params }).then(function (r) {
              _this2.setState({ members: r.data });
              return r;
            });
          }
        }, {
          key: 'fetchRoleList',
          value: function fetchRoleList() {
            var _this3 = this;

            return axios.get('role').then(function (r) {
              _this3.setState({ roles: r.data });
            });
          }
        }, {
          key: 'handleRolesCheck',
          value: function handleRolesCheck(role, e) {
            var chosenRoles = this.state.chosenRoles;
            var idx = chosenRoles.indexOf(role);
            if (idx === -1) {
              chosenRoles.push(role);
            } else {
              chosenRoles.splice(idx, 1);
            }
            this.setState({ chosenRoles: chosenRoles });
            this.fetchMemberList();
          }
        }, {
          key: 'header',
          value: function header() {
            var _this4 = this;

            return React.createElement(
              Row,
              { type: 'flex' },
              React.createElement(
                Col,
                { xs: 24, md: { span: 6, order: 2 }, align: 'right' },
                React.createElement(MemberCreatorModal, {
                  done: function done() {
                    return _this4.fetchMemberList();
                  }
                })
              ),
              React.createElement(
                Col,
                { xs: 24, md: { span: 18, order: 1 }, style: { lineHeight: '32px' } },
                this.state.roles.map(function (o) {
                  return React.createElement(
                    Checkbox,
                    {
                      onClick: _this4.handleRolesCheck.bind(_this4, o.slug)
                    },
                    React.createElement(Icon, { type: o.icon, style: { color: o.color } }),
                    React.createElement(
                      'span',
                      null,
                      o.name
                    )
                  );
                })
              )
            );
          }
        }, {
          key: 'view',
          value: function view() {
            return React.createElement(
              Row,
              { gutter: 16 },
              this.state.members.map(function (o) {
                return React.createElement(
                  Col,
                  { sm: 24, md: 12, lg: 8, xxl: 6, style: { height: 160 } },
                  React.createElement(MemberCardItem, _extends({ key: o.id }, o))
                );
              })
            );
          }
        }]);

        return _class;
      }(Page);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/model/AbstractModel', [], function (_export, _context) {
  "use strict";

  var _createClass, AbstractModel;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
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

      AbstractModel = function () {
        function AbstractModel(props) {
          _classCallCheck(this, AbstractModel);

          if (new.target === AbstractModel) {
            throw new Error('AbstractModel cannot be instanced directly!');
          }

          /**
           * model's attributes
           *
           * @type {Object}
           * @private
           */
          this._attributes = {};

          /**
           * the fetching api url
           * @type {String}
           * @private
           */
          this._url = '';
        }

        /**
         * getter & setter of _attributes
         */


        _createClass(AbstractModel, [{
          key: 'fetch',
          value: function fetch() {
            throw new Error('AbstractModel@fetch must be implemented by subclass');
          }
        }, {
          key: 'create',
          value: function create() {
            throw new Error('AbstractModel@create must be implemented by subclass');
          }
        }, {
          key: 'update',
          value: function update() {
            throw new Error('AbstractModel@update must be implemented by subclass');
          }
        }, {
          key: 'delete',
          value: function _delete() {
            throw new Error('AbstractModel@delete must be implemented by subclass');
          }
        }, {
          key: 'attributes',
          get: function get() {
            return this._attributes;
          },
          set: function set(attributes) {
            this._attributes = attributes;
          }
        }, {
          key: 'url',
          get: function get() {
            return this._url;
          },
          set: function set(url) {
            this._url = url;
          }
        }]);

        return AbstractModel;
      }();

      _export('default', AbstractModel);
    }
  };
});
'use strict';

System.register('teamelf/permission/PermissionCardItem', ['teamelf/components/InfoEditor'], function (_export, _context) {
  "use strict";

  var InfoEditor, _createClass, _antd, Card, Button, Tag, _class;

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
    setters: [function (_teamelfComponentsInfoEditor) {
      InfoEditor = _teamelfComponentsInfoEditor.default;
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
      Card = _antd.Card;
      Button = _antd.Button;
      Tag = _antd.Tag;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            return React.createElement(
              Card,
              {
                style: { marginBottom: 20 },
                title: this.props.name
              },
              React.createElement(
                'div',
                null,
                '\u66F4\u65B0\u7AD9\u70B9\u4FE1\u606F config.update'
              ),
              React.createElement(
                'div',
                null,
                '\u521B\u5EFA\u65B0\u6210\u5458 member.create'
              ),
              React.createElement(
                'div',
                null,
                '\u6210\u5458\u5347\u7EA7 member.role.update'
              ),
              React.createElement(
                'div',
                null,
                '\u6210\u5458\u5BC6\u7801\u91CD\u8BBE member.password.reset'
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
"use strict";

System.register("teamelf/profile/Logout", [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Card, Button, _class;

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
      Card = _antd.Card;
      Button = _antd.Button;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: "logout",
          value: function logout() {
            axios.post('auth/logout').then(function (r) {
              window.location.reload();
            });
          }
        }, {
          key: "render",
          value: function render() {
            return React.createElement(
              Card,
              {
                style: { marginBottom: 16 },
                title: "\u9000\u51FA\u7CFB\u7EDF"
              },
              React.createElement(
                Button,
                {
                  className: "full",
                  type: "primary",
                  onClick: this.logout.bind(this)
                },
                "\u70B9\u6B64\u5B89\u5168\u767B\u51FA"
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
"use strict";

System.register("teamelf/profile/Security", [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Card, Button, _class;

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
      Card = _antd.Card;
      Button = _antd.Button;

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
              Card,
              {
                style: { marginBottom: 16 },
                title: "\u4FEE\u6539\u5BC6\u7801"
              },
              React.createElement(
                Button,
                {
                  className: "full",
                  type: "danger"
                },
                "\u53D1\u9001\u91CD\u7F6E\u5BC6\u7801\u90AE\u4EF6"
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