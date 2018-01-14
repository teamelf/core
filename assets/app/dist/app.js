'use strict';

System.register('teamelf/App', ['teamelf/Error', 'teamelf/layout/SideNav', 'teamelf/layout/Header', 'teamelf/layout/Footer', 'teamelf/Home', 'teamelf/Member', 'teamelf/Config', 'teamelf/Profile', 'teamelf/Permission', 'teamelf/Extension'], function (_export, _context) {
  "use strict";

  var RedirectAs404, SideNav, Header, Footer, Home, Member, Config, Profile, Permission, Extension, _createClass, _ReactRouterDOM, Switch, Route, Redirect, _antd, Layout, _class;

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
    }, function (_teamelfProfile) {
      Profile = _teamelfProfile.default;
    }, function (_teamelfPermission) {
      Permission = _teamelfPermission.default;
    }, function (_teamelfExtension) {
      Extension = _teamelfExtension.default;
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

          // use localStorage.sideNavCollapsed to avoid page jump due to collapsed judge
          _this.state = {
            collapsed: localStorage.sideNavCollapsed === 'true'
          };
          return _this;
        }

        _createClass(_class, [{
          key: 'routes',
          value: function routes() {
            return [{ path: '/home', exact: true, component: Home }, { path: '/member', component: Member }, { path: '/config', exact: true, component: Config }, { path: '/profile', exact: true, component: Profile }, { path: '/permission', exact: true, component: Permission }, { path: '/extension', exact: true, component: Extension }];
          }
        }, {
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
                    this.routes().map(function (o) {
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

System.register('teamelf/Config', ['teamelf/layout/Page', 'teamelf/role/RoleCardList', 'teamelf/config/ConfigBasicInfo', 'teamelf/config/ConfigLogo'], function (_export, _context) {
  "use strict";

  var Page, RoleCardList, ConfigBasicInfo, ConfigLogo, _createClass, _antd, Row, Col, Button, _class;

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
    }, function (_teamelfRoleRoleCardList) {
      RoleCardList = _teamelfRoleRoleCardList.default;
    }, function (_teamelfConfigConfigBasicInfo) {
      ConfigBasicInfo = _teamelfConfigConfigBasicInfo.default;
    }, function (_teamelfConfigConfigLogo) {
      ConfigLogo = _teamelfConfigConfigLogo.default;
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
      Button = _antd.Button;

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'configs',
          value: function configs() {
            return [React.createElement(ConfigBasicInfo, null), React.createElement(ConfigLogo, null)];
          }
        }, {
          key: 'title',
          value: function title() {
            return '团队信息设置';
          }
        }, {
          key: 'description',
          value: function description() {
            return [React.createElement(RoleCardList, null), React.createElement(
              Button,
              {
                type: 'primary',
                icon: 'reload',
                onClick: function onClick(e) {
                  return window.location.reload();
                }
              },
              '\u4FEE\u6539\u7AD9\u70B9\u914D\u7F6E\u987B\u70B9\u6B64\u5237\u65B0\u65B9\u53EF\u751F\u6548'
            )];
          }
        }, {
          key: 'view',
          value: function view() {
            return React.createElement(
              Row,
              { gutter: 16, type: 'flex' },
              this.configs().map(function (o) {
                return React.createElement(
                  Col,
                  null,
                  o
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

System.register('teamelf/Error', [], function (_export, _context) {
  "use strict";

  var _extends, _createClass, _ReactRouterDOM, Redirect, RedirectAs404;

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

      _export('RedirectAs404', RedirectAs404 = function (_React$Component) {
        _inherits(RedirectAs404, _React$Component);

        function RedirectAs404() {
          _classCallCheck(this, RedirectAs404);

          return _possibleConstructorReturn(this, (RedirectAs404.__proto__ || Object.getPrototypeOf(RedirectAs404)).apply(this, arguments));
        }

        _createClass(RedirectAs404, [{
          key: 'render',
          value: function render() {
            var query = new URLSearchParams(window.location.search);
            query.set('error', 404);
            query.set('message', 'Not found');
            return React.createElement(Redirect, { to: _extends({}, this.props.location, {
                search: '?' + query.toString()
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

System.register('teamelf/Extension', ['teamelf/layout/Page', 'teamelf/extension/ExtensionCardItem'], function (_export, _context) {
  "use strict";

  var Page, ExtensionCardItem, _createClass, _antd, Row, Col, Button, _class;

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
    }, function (_teamelfExtensionExtensionCardItem) {
      ExtensionCardItem = _teamelfExtensionExtensionCardItem.default;
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
      Button = _antd.Button;

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            extensions: []
          };
          _this.fetchExtensions();
          return _this;
        }

        _createClass(_class, [{
          key: 'fetchExtensions',
          value: function fetchExtensions() {
            var _this2 = this;

            axios.get('extension').then(function (r) {
              _this2.setState({ extensions: r.data });
            });
          }
        }, {
          key: 'title',
          value: function title() {
            return '插件管理';
          }
        }, {
          key: 'description',
          value: function description() {
            return [React.createElement(
              'p',
              null,
              '\u5B89\u88C5\u63D2\u4EF6\u540E\u53EF\u80FD\u9700\u8981\u5237\u65B0\u9875\u9762\u540E\u624D\u80FD\u751F\u6548'
            ), React.createElement(
              Button,
              {
                type: 'primary',
                icon: 'reload',
                onClick: function onClick(e) {
                  return window.location.reload();
                }
              },
              '\u5237\u65B0\u9875\u9762'
            )];
          }
        }, {
          key: 'view',
          value: function view() {
            return React.createElement(
              Row,
              { type: 'flex', gutter: 16 },
              this.state.extensions.map(function (o) {
                return React.createElement(
                  Col,
                  { sm: 24, md: 12, lg: 8, xxl: 6 },
                  React.createElement(ExtensionCardItem, o)
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
          key: 'title',
          value: function title() {
            return window.config.name;
          }
        }, {
          key: 'description',
          value: function description() {
            return window.config.description;
          }
        }, {
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

System.register('teamelf/Permission', ['teamelf/layout/Page', 'teamelf/role/RoleCardList'], function (_export, _context) {
  "use strict";

  var Page, RoleCardList, _createClass, _antd, Table, Icon, Checkbox, _class;

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
    }, function (_teamelfRoleRoleCardList) {
      RoleCardList = _teamelfRoleRoleCardList.default;
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
      Table = _antd.Table;
      Icon = _antd.Icon;
      Checkbox = _antd.Checkbox;

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            permissions: [],
            dataSource: [],
            columns: [],
            loading: false
          };
          _this.fetch();
          return _this;
        }

        _createClass(_class, [{
          key: 'permissions',
          value: function permissions() {
            return [{
              name: '更新站点信息',
              permission: 'config.update'
            }, {
              name: '查看权限列表',
              permission: 'permission.list'
            }, {
              name: '更新权限',
              permission: 'permission.update'
            }, {
              name: '查看插件列表',
              permission: 'extension.list'
            }, {
              name: '激活/停用插件',
              permission: 'extension.activate'
            }, {
              name: '查看成员列表',
              permission: 'member.list'
            }, {
              name: '查看成员详情',
              permission: 'member.item'
            }, {
              name: '创建新成员',
              permission: 'member.create'
            }, {
              name: '更新成员信息',
              permission: 'member.update'
            }, {
              name: '成员角色更改',
              permission: 'member.role.update'
            }, {
              name: '创新新角色',
              permission: 'role.create'
            }, {
              name: '更新角色信息',
              permission: 'role.update'
            }, {
              name: '删除角色',
              permission: 'role.delete'
            }];
          }
        }, {
          key: 'fetch',
          value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var roles, permissions, columns, dataSource, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, permission, _loop2, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, role;

              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      roles = window.roles;
                      _context2.next = 3;
                      return this.fetchPermissions();

                    case 3:
                      permissions = _context2.sent.data;
                      columns = [{
                        title: '权限',
                        dataIndex: 'name',
                        colSpan: 2
                      }, {
                        dataIndex: 'permission',
                        colSpan: 0
                      }];
                      dataSource = this.permissions();

                      _loop = function _loop(permission) {
                        var d = dataSource.find(function (o) {
                          return o.permission === permission.permission;
                        });
                        if (d) {
                          d['r_' + permission.role.id] = true;
                        }
                      };

                      _iteratorNormalCompletion = true;
                      _didIteratorError = false;
                      _iteratorError = undefined;
                      _context2.prev = 10;

                      for (_iterator = permissions[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        permission = _step.value;

                        _loop(permission);
                      }
                      _context2.next = 18;
                      break;

                    case 14:
                      _context2.prev = 14;
                      _context2.t0 = _context2['catch'](10);
                      _didIteratorError = true;
                      _iteratorError = _context2.t0;

                    case 18:
                      _context2.prev = 18;
                      _context2.prev = 19;

                      if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                      }

                    case 21:
                      _context2.prev = 21;

                      if (!_didIteratorError) {
                        _context2.next = 24;
                        break;
                      }

                      throw _iteratorError;

                    case 24:
                      return _context2.finish(21);

                    case 25:
                      return _context2.finish(18);

                    case 26:
                      _loop2 = function _loop2(role) {
                        columns.push({
                          title: React.createElement(
                            'div',
                            { style: { color: role.color, textAlign: 'center' } },
                            React.createElement(Icon, { type: role.icon }),
                            React.createElement(
                              'div',
                              null,
                              role.name
                            )
                          ),
                          dataIndex: 'r_' + role.id,
                          render: function render(text, record, index) {
                            return React.createElement(
                              'div',
                              { style: { textAlign: 'center' } },
                              React.createElement(Checkbox, {
                                checked: text,
                                onClick: function onClick(e) {
                                  return _this2.updatePermission(role.id, record.permission, e.target.checked);
                                }
                              })
                            );
                          }
                        });
                      };

                      _iteratorNormalCompletion2 = true;
                      _didIteratorError2 = false;
                      _iteratorError2 = undefined;
                      _context2.prev = 30;
                      for (_iterator2 = roles[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        role = _step2.value;

                        _loop2(role);
                      }
                      _context2.next = 38;
                      break;

                    case 34:
                      _context2.prev = 34;
                      _context2.t1 = _context2['catch'](30);
                      _didIteratorError2 = true;
                      _iteratorError2 = _context2.t1;

                    case 38:
                      _context2.prev = 38;
                      _context2.prev = 39;

                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                      }

                    case 41:
                      _context2.prev = 41;

                      if (!_didIteratorError2) {
                        _context2.next = 44;
                        break;
                      }

                      throw _iteratorError2;

                    case 44:
                      return _context2.finish(41);

                    case 45:
                      return _context2.finish(38);

                    case 46:
                      this.setState({ columns: columns, dataSource: dataSource });

                    case 47:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee, this, [[10, 14, 18, 26], [19,, 21, 25], [30, 34, 38, 46], [39,, 41, 45]]);
            }));

            function fetch() {
              return _ref.apply(this, arguments);
            }

            return fetch;
          }()
        }, {
          key: 'fetchPermissions',
          value: function fetchPermissions() {
            var _this3 = this;

            this.setState({ loading: true });
            return axios.get('permission').then(function (r) {
              _this3.setState({ loading: false });
              _this3.setState({ permissions: r.data });
              return r;
            });
          }
        }, {
          key: 'updatePermission',
          value: function updatePermission(role_id, permission, value) {
            var _this4 = this;

            var data = {
              role_id: role_id,
              permission: permission,
              value: value
            };
            this.setState({ loading: true });
            axios.put('permission', data).then(function (r) {
              _this4.setState({ loading: false });
              _this4.fetch();
            }).catch(function (e) {
              _this4.setState({ loading: false });
            });
          }
        }, {
          key: 'title',
          value: function title() {
            return '成员组权限设置';
          }
        }, {
          key: 'description',
          value: function description() {
            return React.createElement(RoleCardList, null);
          }
        }, {
          key: 'view',
          value: function view() {
            return React.createElement(
              'div',
              { style: { background: '#fff' } },
              React.createElement(Table, {
                loading: this.state.loading,
                dataSource: this.state.dataSource,
                columns: this.state.columns,
                pagination: false
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

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));
        }

        _createClass(_class, [{
          key: 'bulletins',
          value: function bulletins() {
            return [];
          }
        }, {
          key: 'operations',
          value: function operations() {
            return [React.createElement(Security, null), React.createElement(Logout, null)];
          }
        }, {
          key: 'title',
          value: function title() {
            return window.auth.name;
          }
        }, {
          key: 'description',
          value: function description() {
            return window.auth.role.name;
          }
        }, {
          key: 'view',
          value: function view() {
            return React.createElement(
              Row,
              { gutter: 16 },
              React.createElement(
                Col,
                { xs: 24, lg: 16 },
                this.bulletins()
              ),
              React.createElement(
                Col,
                { xs: 24, lg: 8 },
                this.operations()
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

System.register('teamelf/main', ['teamelf/App'], function (_export, _context) {
  "use strict";

  var App, _ReactRouterDOM, BrowserRouter, Route, app, target;

  return {
    setters: [function (_teamelfApp) {
      App = _teamelfApp.default;
    }],
    execute: function () {
      _ReactRouterDOM = ReactRouterDOM;
      BrowserRouter = _ReactRouterDOM.BrowserRouter;
      Route = _ReactRouterDOM.Route;
      app = React.createElement(
        BrowserRouter,
        { forceRefresh: true },
        React.createElement(Route, { component: App })
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

System.register('teamelf/config/ConfigBasicInfo', ['teamelf/components/InfoEditor'], function (_export, _context) {
  "use strict";

  var InfoEditor, _extends, _createClass, _antd, Card, _class;

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
      Card = _antd.Card;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = _extends({}, window.config);
          return _this;
        }

        _createClass(_class, [{
          key: 'edit',
          value: function edit(key, value) {
            var _this2 = this;

            return axios.put('config/' + key, { value: value }).then(function (r) {
              _this2.setState(_defineProperty({}, key, value));
            });
          }
        }, {
          key: 'render',
          value: function render() {
            return React.createElement(
              Card,
              {
                title: '\u57FA\u672C\u4FE1\u606F',
                style: { marginBottom: 16 }
              },
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
      }(React.Component);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/config/ConfigLogo', [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Card, Upload, Button, Icon, _class;

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
      Upload = _antd.Upload;
      Button = _antd.Button;
      Icon = _antd.Icon;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'handleChange',
          value: function handleChange(info) {
            if (info.file.status !== 'uploading') {
              console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
              window.location.reload();
            } else if (info.file.status === 'error') {
              antd.message.error(info.file.name + ' file upload failed.');
            }
          }
        }, {
          key: 'render',
          value: function render() {
            var Uploader = React.createElement(
              Upload,
              {
                name: 'logo',
                action: '/api/config/logo',
                onChange: this.handleChange.bind(this),
                showUploadList: false
              },
              React.createElement(
                Button,
                null,
                React.createElement(Icon, { type: 'upload' }),
                React.createElement(
                  'span',
                  null,
                  ' \u4E0A\u4F20\u65B0LOGO'
                )
              )
            );
            return React.createElement(
              Card,
              {
                title: Uploader,
                style: { marginBottom: 16 }
              },
              React.createElement(
                'div',
                { align: 'center' },
                React.createElement('img', { src: window.config.logo, style: { width: 150 } })
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

System.register('teamelf/extension/ExtensionCardItem', [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Card, Switch, Button, _class;

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
      Switch = _antd.Switch;
      Button = _antd.Button;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            loading: false
          };
          return _this;
        }

        _createClass(_class, [{
          key: 'activate',
          value: function activate(activation) {
            var _this2 = this;

            this.setState({ loading: true });
            axios.put('extension/' + this.props.vendor + '/' + this.props.package, { activation: activation }).then(function (r) {
              window.location.reload();
            }).catch(function (e) {
              _this2.setState({ loading: false });
            });
          }
        }, {
          key: 'upgrade',
          value: function upgrade() {
            alert('not supported yet!');
          }
        }, {
          key: 'uninstall',
          value: function uninstall() {
            var _this3 = this;

            antd.Modal.confirm({
              title: '不可恢复',
              content: '确定要删除么？该操作将删除所有插件数据并且无法恢复。如不使用插件建议停用即可',
              onOk: function onOk() {
                _this3.setState({ loading: true });
                axios.delete('extension/' + _this3.props.vendor + '/' + _this3.props.package).then(function (r) {
                  window.location.reload();
                }).catch(function (e) {
                  _this3.setState({ loading: false });
                });
              }
            });
          }
        }, {
          key: 'render',
          value: function render() {
            return React.createElement(
              Card,
              {
                style: { marginBottom: 16 },
                title: this.props.package,
                extra: this.props.version,
                actions: [React.createElement(Switch, {
                  checked: this.props.isActivated,
                  checkedChildren: '\u542F\u7528',
                  unCheckedChildren: '\u505C\u7528',
                  onChange: this.activate.bind(this),
                  loading: this.state.loading
                }), React.createElement(
                  Button,
                  {
                    type: 'primary', size: 'small',
                    onClick: this.upgrade.bind(this)
                  },
                  '\u5347\u7EA7'
                ), React.createElement(
                  Button,
                  {
                    type: 'danger', size: 'small',
                    onClick: this.uninstall.bind(this)
                  },
                  '\u5378\u8F7D'
                )]
              },
              React.createElement(
                'div',
                null,
                this.props.description
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
                " \xA92017 Powered by "
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
          return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));
        }

        _createClass(Page, [{
          key: 'breadcrumbs',
          value: function breadcrumbs() {
            return []; // [{path, icon, title}]
          }
        }, {
          key: 'title',
          value: function title() {
            return null;
          }
        }, {
          key: 'description',
          value: function description() {
            return null;
          }
        }, {
          key: 'header',
          value: function header() {
            var title = this.title();
            var description = this.description();
            var breadcrumbs = this.breadcrumbs();
            if (!breadcrumbs.length && !title && !description) {
              return null;
            }
            return React.createElement(
              'div',
              null,
              breadcrumbs.length > 0 && React.createElement(
                Breadcrumb,
                { style: { marginBottom: 16 } },
                breadcrumbs.map(function (o) {
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
              !!title && React.createElement(
                'h2',
                null,
                title
              ),
              !!description && React.createElement(
                'div',
                null,
                description
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

  var Logo, _createClass, _ReactRouterDOM, Link, withRouter, _antd, Layout, Menu, Icon, Sider, SideNav;

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

      _export('SideNav', SideNav = function (_React$Component) {
        _inherits(SideNav, _React$Component);

        function SideNav(props) {
          _classCallCheck(this, SideNav);

          var _this = _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call(this, props));

          _this.state = {
            currentNavigation: _this.getNavigationFromRoute()
          };
          return _this;
        }

        _createClass(SideNav, [{
          key: 'navigations',
          value: function navigations() {
            return [{ path: '/home', icon: 'home', title: '工作台' }, { path: '/member', icon: 'user', title: '成员管理' }, { path: '/permission', icon: 'key', title: '权限管理' }, { path: '/config', icon: 'tool', title: '团队信息' }, { path: '/extension', icon: 'appstore-o', title: '插件管理' }];
          }
        }, {
          key: 'getNavigationFromRoute',
          value: function getNavigationFromRoute() {
            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.location.pathname;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.navigations()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var nav = _step.value;

                if (path.match(nav.pattern || nav.path)) {
                  return nav.path;
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

            return null;
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
                  selectedKeys: [this.state.currentNavigation]
                },
                this.navigations().map(function (o) {
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
              )
            );
          }
        }]);

        return SideNav;
      }(React.Component));

      _export('SideNav', SideNav);

      _export('default', withRouter(SideNav));
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
"use strict";

System.register("teamelf/member/MemberBasicProfileCard", ["teamelf/components/InfoEditor"], function (_export, _context) {
  "use strict";

  var InfoEditor, _createClass, _antd, Card, _class;

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
                title: "\u57FA\u672C\u4FE1\u606F",
                style: { marginBottom: 16 }
              },
              React.createElement(InfoEditor, {
                label: "\u767B\u5F55\u540D",
                value: this.props.username,
                disabled: true
              }),
              React.createElement(InfoEditor, {
                label: "\u90AE\u3000\u7BB1",
                value: this.props.email,
                onEdit: this.props.onEdit.bind(this, 'email')
              }),
              React.createElement(InfoEditor, {
                label: "\u624B\u3000\u673A",
                value: this.props.phone,
                onEdit: this.props.onEdit.bind(this, 'phone')
              })
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

System.register('teamelf/member/MemberCardItem', ['teamelf/components/Gender'], function (_export, _context) {
  "use strict";

  var Gender, _createClass, _ReactRouterDOM, Link, _antd, Card, Tag, Icon, Avatar, Meta, _class;

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
      Icon = _antd.Icon;
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
                  style: { marginBottom: 16 },
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
                    React.createElement(Icon, { type: this.props.role.icon }),
                    ' ',
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

System.register('teamelf/member/MemberCreatorModal', ['teamelf/member/MemberRoleChooser'], function (_export, _context) {
  "use strict";

  var MemberRoleChooser, _createClass, _antd, Modal, Button, Form, Input, Radio, Checkbox, Icon, MemberCreateForm, _class;

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
    setters: [function (_teamelfMemberMemberRoleChooser) {
      MemberRoleChooser = _teamelfMemberMemberRoleChooser.default;
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
      Modal = _antd.Modal;
      Button = _antd.Button;
      Form = _antd.Form;
      Input = _antd.Input;
      Radio = _antd.Radio;
      Checkbox = _antd.Checkbox;
      Icon = _antd.Icon;

      MemberCreateForm = function (_React$Component) {
        _inherits(MemberCreateForm, _React$Component);

        function MemberCreateForm(props) {
          _classCallCheck(this, MemberCreateForm);

          var _this = _possibleConstructorReturn(this, (MemberCreateForm.__proto__ || Object.getPrototypeOf(MemberCreateForm)).call(this, props));

          _this.state = {
            loading: false,
            username: '',
            email: '',
            name: '',
            gender: 0,
            role: null,
            activate: false
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
              gender: this.state.gender,
              role: this.state.role,
              activate: this.state.activate || false
            };
            this.setState({ loading: true });
            axios.post('member', member).then(function (r) {
              _this2.setState({ loading: false });
              _this2.props.done();
              _this2.props.form.resetFields();
            }).catch(function (e) {
              _this2.setState({ loading: false });
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
                React.createElement(MemberRoleChooser, {
                  role: this.state.role,
                  onChoose: function onChoose(e) {
                    return _this4.setState({ role: e.target.value });
                  }
                })
              ),
              React.createElement(
                Form.Item,
                null,
                React.createElement(
                  Checkbox,
                  {
                    value: this.state.activate,
                    onChange: function onChange(e) {
                      return _this4.setState({ activate: e.target.checked });
                    }
                  },
                  '\u53D1\u9001\u6FC0\u6D3B\u90AE\u4EF6'
                )
              ),
              React.createElement(
                Form.Item,
                null,
                React.createElement(
                  Button,
                  {
                    className: 'full',
                    type: 'primary', size: 'large',
                    onClick: this.submitForm.bind(this),
                    loading: this.state.loading
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

System.register('teamelf/member/MemberItem', ['teamelf/layout/Page', 'teamelf/components/Gender', 'teamelf/member/MemberRoleUpdater', 'teamelf/member/MemberBasicProfileCard'], function (_export, _context) {
  "use strict";

  var Page, Gender, MemberRoleUpdater, MemberBasicProfileCard, _extends, _createClass, _ReactRouterDOM, withRouter, _antd, Row, Col, Tag, Icon, MemberItem;

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
    }, function (_teamelfMemberMemberRoleUpdater) {
      MemberRoleUpdater = _teamelfMemberMemberRoleUpdater.default;
    }, function (_teamelfMemberMemberBasicProfileCard) {
      MemberBasicProfileCard = _teamelfMemberMemberBasicProfileCard.default;
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
      withRouter = _ReactRouterDOM.withRouter;
      _antd = antd;
      Row = _antd.Row;
      Col = _antd.Col;
      Tag = _antd.Tag;
      Icon = _antd.Icon;

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
          key: 'profiles',
          value: function profiles() {
            return [React.createElement(MemberBasicProfileCard, _extends({
              onEdit: this.edit.bind(this)
            }, this.member))];
          }
        }, {
          key: 'operators',
          value: function operators() {
            return [React.createElement(MemberRoleUpdater, {
              username: this.props.match.params.username,
              role: this.member ? this.member.role.slug : null
            })];
          }
        }, {
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
          key: 'title',
          value: function title() {
            if (this.member) {
              return [React.createElement(Gender, { gender: this.member.gender }), this.member.name];
            }
          }
        }, {
          key: 'description',
          value: function description() {
            if (this.member) {
              return React.createElement(
                Tag,
                { color: this.member.role.color },
                React.createElement(Icon, { type: this.member.role.icon }),
                this.member.role.name
              );
            }
          }
        }, {
          key: 'view',
          value: function view() {
            if (this.member) {
              return React.createElement(
                Row,
                { gutter: 16 },
                React.createElement(
                  Col,
                  { xs: 24, lg: 12 },
                  this.profiles()
                ),
                React.createElement(
                  Col,
                  { xs: 24, lg: 12 },
                  this.operators()
                )
              );
            }
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

  var Page, MemberCardItem, MemberCreatorModal, _extends, _createClass, _antd, Row, Col, Icon, Checkbox, _class;

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
      Checkbox = _antd.Checkbox;

      _class = function (_Page) {
        _inherits(_class, _Page);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            members: [],
            roles: window.roles,
            chosenRoles: []
          };
          _this.fetchMemberList();
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
          key: 'description',
          value: function description() {
            var _this3 = this;

            return React.createElement(
              Row,
              { type: 'flex' },
              React.createElement(
                Col,
                { xs: 24, md: { span: 6, order: 2 }, align: 'right' },
                React.createElement(MemberCreatorModal, {
                  done: function done() {
                    return _this3.fetchMemberList();
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
                      onClick: _this3.handleRolesCheck.bind(_this3, o.slug)
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
              { type: 'flex', gutter: 16 },
              this.state.members.map(function (o) {
                return React.createElement(
                  Col,
                  { sm: 24, md: 12, lg: 8, xxl: 6 },
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
"use strict";

System.register("teamelf/member/MemberRoleChooser", [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Radio, Icon, _class;

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
      Radio = _antd.Radio;
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
            var _this2 = this;

            return React.createElement(
              Radio.Group,
              {
                value: this.props.role,
                onChange: this.props.onChoose.bind(this)
              },
              window.roles.map(function (o) {
                return React.createElement(
                  Radio.Button,
                  {
                    style: { color: _this2.props.role === o.slug ? o.color : null },
                    value: o.slug
                  },
                  React.createElement(Icon, { type: o.icon }),
                  React.createElement(
                    "span",
                    null,
                    " ",
                    o.name
                  )
                );
              })
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

System.register("teamelf/member/MemberRoleUpdater", ["teamelf/member/MemberRoleChooser"], function (_export, _context) {
  "use strict";

  var MemberRoleChooser, _createClass, _antd, Card, Button, _class;

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
    setters: [function (_teamelfMemberMemberRoleChooser) {
      MemberRoleChooser = _teamelfMemberMemberRoleChooser.default;
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

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            role: _this.props.role
          };
          return _this;
        }

        _createClass(_class, [{
          key: "update",
          value: function update() {
            var data = {
              role: this.state.role
            };
            axios.put("member/" + this.props.username + "/role", data).then(function (r) {
              window.location.reload();
            });
          }
        }, {
          key: "render",
          value: function render() {
            var _this2 = this;

            return React.createElement(
              Card,
              {
                title: "\u89D2\u8272\u66F4\u6539",
                extra: React.createElement(
                  Button,
                  { type: "primary", onClick: this.update.bind(this) },
                  "\u786E\u8BA4"
                ),
                style: { marginBottom: 16 }
              },
              React.createElement(MemberRoleChooser, {
                role: this.state.role,
                onChoose: function onChoose(e) {
                  return _this2.setState({ role: e.target.value });
                }
              })
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
                  type: "danger",
                  href: "/password/reset"
                },
                "\u70B9\u6B64\u4FEE\u6539\u5BC6\u7801"
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

System.register('teamelf/role/RoleCardList', ['teamelf/role/RoleEditorCardItem', 'teamelf/role/RoleCreateCardItem'], function (_export, _context) {
  "use strict";

  var RoleEditorCardItem, RoleCreateCardItem, _extends, _createClass, _antd, Row, Col, _class;

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
    setters: [function (_teamelfRoleRoleEditorCardItem) {
      RoleEditorCardItem = _teamelfRoleRoleEditorCardItem.default;
    }, function (_teamelfRoleRoleCreateCardItem) {
      RoleCreateCardItem = _teamelfRoleRoleCreateCardItem.default;
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
              Row,
              { type: 'flex', gutter: 16 },
              window.roles.map(function (o) {
                return React.createElement(
                  Col,
                  { xs: 12, md: 6, lg: 3 },
                  React.createElement(RoleEditorCardItem, _extends({}, o, {
                    done: function done(e) {
                      return window.location.reload();
                    }
                  }))
                );
              }),
              React.createElement(
                Col,
                { xs: 12, md: 6, lg: 3 },
                React.createElement(RoleCreateCardItem, {
                  done: function done(e) {
                    return window.location.reload();
                  }
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

System.register('teamelf/role/RoleCreateCardItem', ['teamelf/components/InfoEditor'], function (_export, _context) {
  "use strict";

  var InfoEditor, _createClass, _antd, Card, Icon, Modal, Button, _class;

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
      Icon = _antd.Icon;
      Modal = _antd.Modal;
      Button = _antd.Button;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            visible: false,
            name: '',
            slug: '',
            color: '',
            icon: ''
          };
          return _this;
        }

        _createClass(_class, [{
          key: 'renderCard',
          value: function renderCard() {
            var _this2 = this;

            return React.createElement(
              Card,
              {
                hoverable: true,
                style: { textAlign: 'center', color: '#aaa', marginBottom: 16 },
                onClick: function onClick(e) {
                  return _this2.setState({ visible: true });
                }
              },
              React.createElement(Icon, {
                type: 'plus',
                style: { fontSize: 20 }
              }),
              React.createElement(
                'div',
                null,
                '\u6DFB\u52A0'
              )
            );
          }
        }, {
          key: 'edit',
          value: function edit(key, value) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3.setState(_defineProperty({}, key, value), function () {
                resolve();
              });
            });
          }
        }, {
          key: 'createRole',
          value: function createRole() {
            var _this4 = this;

            var role = {
              name: this.state.name,
              slug: this.state.slug,
              color: this.state.color,
              icon: this.state.icon
            };
            return axios.post('role', role).then(function (r) {
              _this4.props.done();
              _this4.closeModal();
              return r;
            });
          }
        }, {
          key: 'closeModal',
          value: function closeModal() {
            this.setState({ visible: false });
          }
        }, {
          key: 'renderModal',
          value: function renderModal() {
            return React.createElement(
              Modal,
              {
                title: '\u6DFB\u52A0\u65B0\u89D2\u8272',
                visible: this.state.visible,
                onOk: this.createRole.bind(this),
                onCancel: this.closeModal.bind(this),
                okText: '\u786E\u8BA4\u521B\u5EFA'
              },
              React.createElement(InfoEditor, {
                label: '\u540D\u79F0',
                value: this.state.name,
                onEdit: this.edit.bind(this, 'name')
              }),
              React.createElement(InfoEditor, {
                label: '\u77ED\u540D',
                value: this.state.slug,
                onEdit: this.edit.bind(this, 'slug')
              }),
              React.createElement(InfoEditor, {
                label: '\u989C\u8272',
                value: this.state.color,
                onEdit: this.edit.bind(this, 'color')
              }),
              React.createElement(InfoEditor, {
                label: '\u56FE\u6807',
                value: this.state.icon,
                onEdit: this.edit.bind(this, 'icon')
              })
            );
          }
        }, {
          key: 'render',
          value: function render() {
            return React.createElement(
              'div',
              null,
              this.renderCard(),
              this.renderModal()
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

System.register('teamelf/role/RoleEditorCardItem', ['teamelf/components/InfoEditor'], function (_export, _context) {
  "use strict";

  var InfoEditor, _createClass, _antd, Card, Icon, Modal, Button, _class;

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
      Icon = _antd.Icon;
      Modal = _antd.Modal;
      Button = _antd.Button;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.state = {
            visible: false
          };
          return _this;
        }

        _createClass(_class, [{
          key: 'renderCard',
          value: function renderCard() {
            var _this2 = this;

            return React.createElement(
              Card,
              {
                hoverable: true,
                style: { textAlign: 'center', color: this.props.color, marginBottom: 16 },
                onClick: function onClick(e) {
                  return _this2.setState({ visible: true });
                }
              },
              React.createElement(Icon, {
                type: this.props.icon,
                style: { fontSize: 20 }
              }),
              React.createElement(
                'div',
                null,
                this.props.name
              )
            );
          }
        }, {
          key: 'edit',
          value: function edit(key, value) {
            var _this3 = this;

            return axios.put('role/' + this.props.id, _defineProperty({}, key, value)).then(function (r) {
              _this3.props.done();
              return r;
            });
          }
        }, {
          key: 'deleteRole',
          value: function deleteRole() {
            var _this4 = this;

            Modal.confirm({
              title: '不可恢复',
              content: '确定要删除么？该操作可能无法恢复',
              onOk: function onOk() {
                axios.delete('role/' + _this4.props.id).then(function (r) {
                  _this4.props.done();
                  _this4.closeModal();
                  return r;
                });
              }
            });
          }
        }, {
          key: 'closeModal',
          value: function closeModal() {
            this.setState({ visible: false });
          }
        }, {
          key: 'renderModal',
          value: function renderModal() {
            return React.createElement(
              Modal,
              {
                title: '编辑 ' + this.props.name,
                visible: this.state.visible,
                footer: [React.createElement(
                  Button,
                  {
                    onClick: this.closeModal.bind(this)
                  },
                  '\u5173\u95ED'
                ), React.createElement(
                  Button,
                  {
                    type: 'danger',
                    onClick: this.deleteRole.bind(this)
                  },
                  '\u5220\u9664'
                )],
                onCancel: this.closeModal.bind(this)
              },
              React.createElement(InfoEditor, {
                label: '\u540D\u79F0',
                value: this.props.name,
                onEdit: this.edit.bind(this, 'name')
              }),
              React.createElement(InfoEditor, {
                label: '\u77ED\u540D',
                value: this.props.slug,
                onEdit: this.edit.bind(this, 'slug')
              }),
              React.createElement(InfoEditor, {
                label: '\u989C\u8272',
                value: this.props.color,
                onEdit: this.edit.bind(this, 'color')
              }),
              React.createElement(InfoEditor, {
                label: '\u56FE\u6807',
                value: this.props.icon,
                onEdit: this.edit.bind(this, 'icon')
              })
            );
          }
        }, {
          key: 'render',
          value: function render() {
            return React.createElement(
              'div',
              null,
              this.renderCard(),
              this.renderModal()
            );
          }
        }]);

        return _class;
      }(React.Component);

      _export('default', _class);
    }
  };
});