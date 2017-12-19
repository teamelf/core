'use strict';

System.register('teamelf/App', ['teamelf/Error', 'teamelf/layout/Header', 'teamelf/layout/Routes', 'teamelf/layout/Footer', 'teamelf/Home', 'teamelf/Member', 'teamelf/Profile'], function (_export, _context) {
  "use strict";

  var RedirectAs404, Header, Routes, Footer, Home, Member, Profile, _createClass, _ReactRouterDOM, Switch, Route, Redirect, _antd, Layout, Content, _class;

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
    }, function (_teamelfLayoutHeader) {
      Header = _teamelfLayoutHeader.default;
    }, function (_teamelfLayoutRoutes) {
      Routes = _teamelfLayoutRoutes.default;
    }, function (_teamelfLayoutFooter) {
      Footer = _teamelfLayoutFooter.default;
    }, function (_teamelfHome) {
      Home = _teamelfHome.default;
    }, function (_teamelfMember) {
      Member = _teamelfMember.default;
    }, function (_teamelfProfile) {
      Profile = _teamelfProfile.default;
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
      Content = Layout.Content;

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.routes = [{ path: '/home', component: Home }, { path: '/member', component: Member }, { path: '/profile', exact: true, component: Profile }];
          return _this;
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            return React.createElement(
              Layout,
              null,
              React.createElement(Header, null),
              React.createElement(
                Content,
                { style: { marginTop: '60px', padding: '0 50px' } },
                React.createElement(Routes, null),
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
                )
              ),
              React.createElement(Footer, null)
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

System.register('teamelf/Error', [], function (_export, _context) {
  "use strict";

  var _createClass, _ReactRouterDOM, Redirect, _class, RedirectAs404;

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
            return React.createElement(Redirect, { to: Object.assign({}, this.props.location, {
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

System.register('teamelf/Member', ['teamelf/layout/Page', 'teamelf/Error', 'teamelf/member/MemberList', 'teamelf/member/MemberItem'], function (_export, _context) {
  "use strict";

  var Page, RedirectAs404, MemberList, MemberItem, _createClass, _ReactRouterDOM, Switch, Route, _class;

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
    }, function (_teamelfError) {
      RedirectAs404 = _teamelfError.RedirectAs404;
    }, function (_teamelfMemberMemberList) {
      MemberList = _teamelfMemberMemberList.default;
    }, function (_teamelfMemberMemberItem) {
      MemberItem = _teamelfMemberMemberItem.default;
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

      _class = function (_Page) {
        _inherits(_class, _Page);

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
          }];
          return _this;
        }

        _createClass(_class, [{
          key: 'view',
          value: function view() {
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
      }(Page);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/Profile', ['teamelf/layout/Page'], function (_export, _context) {
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
              'Profile'
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
        null,
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

System.register('teamelf/layout/AuthBar', [], function (_export, _context) {
  "use strict";

  var _createClass, _ReactRouterDOM, Link, withRouter, _antd, Menu, Icon, Avatar, AuthBar;

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
      withRouter = _ReactRouterDOM.withRouter;
      _antd = antd;
      Menu = _antd.Menu;
      Icon = _antd.Icon;
      Avatar = _antd.Avatar;

      AuthBar = function (_React$Component) {
        _inherits(AuthBar, _React$Component);

        function AuthBar(props) {
          _classCallCheck(this, AuthBar);

          var _this = _possibleConstructorReturn(this, (AuthBar.__proto__ || Object.getPrototypeOf(AuthBar)).call(this, props));

          _this.state = {
            name: '',
            role: ''
          };
          _this.fetchAuth();
          return _this;
        }

        _createClass(AuthBar, [{
          key: 'fetchAuth',
          value: function fetchAuth() {
            var _this2 = this;

            axios.get('auth').then(function (r) {
              _this2.setState({
                name: r.data.name,
                role: r.data.role.name
              });
            });
          }
        }, {
          key: 'handleMenuClick',
          value: function handleMenuClick(_ref) {
            var key = _ref.key;

            switch (key) {
              case 'logout':
                this.logout();
                break;
              default:
            }
          }
        }, {
          key: 'getSelectedNav',
          value: function getSelectedNav() {
            var path = this.props.location.pathname;
            if (path.match('/profile')) {
              return 'profile';
            }
            return null;
          }
        }, {
          key: 'logout',
          value: function logout() {
            axios.post('auth/logout').then(function (r) {
              window.location.reload();
            });
          }
        }, {
          key: 'render',
          value: function render() {
            return React.createElement(
              Menu,
              {
                theme: 'dark', mode: 'horizontal',
                onClick: this.handleMenuClick.bind(this),
                style: { lineHeight: '64px', float: 'right' },
                selectedKeys: this.getSelectedNav()
              },
              React.createElement(
                Menu.Item,
                { key: 'profile' },
                React.createElement(
                  Link,
                  { to: '/profile' },
                  React.createElement(Avatar, { style: { marginTop: 16, float: 'left' } }),
                  React.createElement(
                    'div',
                    { style: { display: 'inline-block', marginLeft: 20, paddingTop: 17, height: 64 } },
                    React.createElement(
                      'div',
                      { style: { lineHeight: '20px' } },
                      this.state.name
                    ),
                    React.createElement(
                      'div',
                      { style: { lineHeight: '10px', fontSize: '.8em' } },
                      this.state.role
                    )
                  )
                )
              ),
              React.createElement(
                Menu.Item,
                { key: 'logout' },
                React.createElement(Icon, { type: 'logout' }),
                '\u5B89\u5168\u767B\u51FA'
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

System.register('teamelf/layout/Header', ['teamelf/layout/Logo', 'teamelf/layout/TopNav', 'teamelf/layout/AuthBar'], function (_export, _context) {
  "use strict";

  var Logo, TopNav, AuthBar, _createClass, _antd, Layout, Row, Col, Avatar, Icon, Header, _class;

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
    }, function (_teamelfLayoutTopNav) {
      TopNav = _teamelfLayoutTopNav.default;
    }, function (_teamelfLayoutAuthBar) {
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
      Row = _antd.Row;
      Col = _antd.Col;
      Avatar = _antd.Avatar;
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
            return React.createElement(
              Row,
              { style: { position: 'fixed', left: 0, right: 0, zIndex: 999 } },
              React.createElement(
                Col,
                { xs: 0, lg: 24 },
                React.createElement(
                  Header,
                  null,
                  React.createElement(Logo, { style: { float: 'left' } }),
                  React.createElement(TopNav, null),
                  React.createElement(AuthBar, null)
                )
              ),
              React.createElement(
                Col,
                { xs: 24, lg: 0 },
                React.createElement(
                  Header,
                  { style: { textAlign: 'center' } },
                  React.createElement(
                    'div',
                    { style: { float: 'left', paddingTop: 22, height: 64 } },
                    React.createElement(Icon, {
                      type: 'menu-unfold',
                      style: { fontSize: 20, color: '#fff' }
                    })
                  ),
                  React.createElement(Logo, null),
                  React.createElement(Avatar, { style: { marginTop: 16, float: 'right' } })
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
"use strict";

System.register("teamelf/layout/Logo", [], function (_export, _context) {
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
          key: "render",
          value: function render() {
            var style = Object.assign({}, {
              marginRight: 20
            }, this.props.style);
            return React.createElement(
              Link,
              { to: "/home", style: style },
              React.createElement("img", {
                style: { height: 45, width: 45 },
                src: window.config.logo
              }),
              React.createElement(
                "span",
                {
                  style: { marginLeft: 10, color: '#fff' }
                },
                window.config.name
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

System.register('teamelf/layout/Page', [], function (_export, _context) {
  "use strict";

  var _createClass, _ReactRouterDOM, Link, _antd, Layout, Menu, Sider, Content, Page;

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
      Menu = _antd.Menu;
      Sider = Layout.Sider;
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
          return _this;
        }

        _createClass(Page, [{
          key: 'getSelectedNav',
          value: function getSelectedNav() {
            var path = this.props.location.pathname;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.navigations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var nav = _step.value;

                if (path.match(nav.path)) {
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
            return React.createElement(
              Layout,
              { style: { padding: '24px 0', background: '#fff' } },
              this.navigations.length > 0 && React.createElement(
                Sider,
                { width: 200, style: { background: '#fff' } },
                React.createElement(
                  Menu,
                  {
                    mode: 'inline',
                    style: { height: '100%' },
                    selectedKeys: this.getSelectedNav() },
                  this.navigations.map(function (o) {
                    return React.createElement(
                      Menu.Item,
                      { key: o.path },
                      React.createElement(
                        Link,
                        { to: o.path },
                        React.createElement(Icon, { type: o.icon }),
                        o.title
                      )
                    );
                  })
                )
              ),
              React.createElement(
                Content,
                { style: { padding: '0 24px', minHeight: 'calc(100vh - 300px)' } },
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

System.register('teamelf/layout/Routes', [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Breadcrumb, _class;

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
      Breadcrumb = _antd.Breadcrumb;

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
              Breadcrumb,
              { style: { margin: '16px 0' } },
              React.createElement(
                Breadcrumb.Item,
                null,
                'Home'
              ),
              React.createElement(
                Breadcrumb.Item,
                null,
                'List'
              ),
              React.createElement(
                Breadcrumb.Item,
                null,
                'App'
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

System.register('teamelf/layout/TopNav', [], function (_export, _context) {
  "use strict";

  var _createClass, _ReactRouterDOM, Link, withRouter, _antd, Menu, Icon, TopNav;

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
      withRouter = _ReactRouterDOM.withRouter;
      _antd = antd;
      Menu = _antd.Menu;
      Icon = _antd.Icon;

      TopNav = function (_React$Component) {
        _inherits(TopNav, _React$Component);

        function TopNav(props) {
          _classCallCheck(this, TopNav);

          var _this = _possibleConstructorReturn(this, (TopNav.__proto__ || Object.getPrototypeOf(TopNav)).call(this, props));

          _this.navigations = [{ path: '/home', icon: React.createElement(Icon, { type: 'home' }), title: '概览' }, { path: '/member', icon: React.createElement(Icon, { type: 'user' }), title: '成员管理' }];
          return _this;
        }

        _createClass(TopNav, [{
          key: 'getSelectedNav',
          value: function getSelectedNav() {
            var path = this.props.location.pathname;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.navigations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var nav = _step.value;

                if (path.match(nav.path)) {
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
            return React.createElement(
              Menu,
              {
                theme: 'dark',
                mode: 'horizontal',
                style: { lineHeight: '64px', float: 'left' },
                selectedKeys: this.getSelectedNav()
              },
              this.navigations.map(function (o) {
                return React.createElement(
                  Menu.Item,
                  { key: o.path },
                  React.createElement(
                    Link,
                    { to: o.path },
                    o.icon,
                    ' ',
                    o.title
                  )
                );
              })
            );
          }
        }]);

        return TopNav;
      }(React.Component);

      _export('default', withRouter(TopNav));
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
              _this2.props.afterCreate();
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
            this.props.afterCreate();
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
                  visible: this.state.visible,
                  footer: null,
                  onCancel: this.closeModal.bind(this)
                },
                React.createElement(MemberCreateFormWrapper, {
                  loading: this.state.loading,
                  afterCreate: this.closeModal.bind(this)
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

System.register('teamelf/member/MemberInfoEditor', [], function (_export, _context) {
  "use strict";

  var _createClass, _antd, Input, Icon, Tooltip, _class;

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
          value: function submitChange() {
            var _this2 = this;

            this.props.onEdit(this.state.value).then(function (r) {
              _this2.toggleEditor();
            });
          }
        }, {
          key: 'render',
          value: function render() {
            var _this3 = this;

            return React.createElement(
              'div',
              { className: 'clearfix', style: { lineHeight: '40px' } },
              React.createElement(
                'h3',
                { style: { float: 'left', marginRight: 20 } },
                this.props.label
              ),
              this.state.editor || React.createElement(
                'span',
                null,
                this.props.value || '-'
              ),
              !this.props.disabled && !this.state.editor && React.createElement(
                Tooltip,
                { title: '\u70B9\u6B64\u7F16\u8F91', placement: 'right' },
                React.createElement(Icon, {
                  style: { marginLeft: 20, cursor: 'pointer' },
                  type: 'edit',
                  onClick: this.toggleEditor.bind(this) })
              ),
              this.state.editor && React.createElement(Input, {
                style: { width: 'auto', float: 'left' },
                value: this.state.value,
                onChange: function onChange(e) {
                  return _this3.setState({ value: e.target.value });
                },
                onPressEnter: this.submitChange.bind(this)
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

System.register('teamelf/member/MemberItem', ['teamelf/components/Gender', 'teamelf/member/MemberInfoEditor'], function (_export, _context) {
  "use strict";

  var Gender, MemberInfoEditor, _createClass, _ReactRouterDOM, withRouter, _antd, Tag, Divider, MemberItem;

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
    setters: [function (_teamelfComponentsGender) {
      Gender = _teamelfComponentsGender.default;
    }, function (_teamelfMemberMemberInfoEditor) {
      MemberInfoEditor = _teamelfMemberMemberInfoEditor.default;
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

      MemberItem = function (_React$Component) {
        _inherits(MemberItem, _React$Component);

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
          key: 'render',
          value: function render() {
            if (!this.member) return React.createElement('div', null);
            return React.createElement(
              'div',
              null,
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
                this.member.name
              ),
              React.createElement(Divider, null),
              React.createElement(MemberInfoEditor, {
                label: '\u767B\u5F55\u540D',
                value: this.member.username,
                disabled: true
              }),
              React.createElement(MemberInfoEditor, {
                label: '\u90AE\u3000\u7BB1',
                value: this.member.email,
                onEdit: this.edit.bind(this, 'email')
              }),
              React.createElement(MemberInfoEditor, {
                label: '\u624B\u3000\u673A',
                value: this.member.phone,
                onEdit: this.edit.bind(this, 'phone')
              })
            );
          }
        }]);

        return MemberItem;
      }(React.Component);

      _export('default', withRouter(MemberItem));
    }
  };
});
'use strict';

System.register('teamelf/member/MemberList', ['teamelf/member/MemberCardItem', 'teamelf/member/MemberCreatorModal'], function (_export, _context) {
  "use strict";

  var MemberCardItem, MemberCreatorModal, _extends, _createClass, _antd, Row, Col, Icon, Divider, Checkbox, _class;

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
    setters: [function (_teamelfMemberMemberCardItem) {
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

      _class = function (_React$Component) {
        _inherits(_class, _React$Component);

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
          key: 'render',
          value: function render() {
            var _this4 = this;

            return React.createElement(
              'div',
              { className: 'clearfix' },
              React.createElement(
                'div',
                { className: 'float-right' },
                React.createElement(MemberCreatorModal, {
                  afterCreate: function afterCreate() {
                    return _this4.fetchMemberList();
                  }
                })
              ),
              React.createElement(
                'div',
                null,
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
              ),
              React.createElement(Divider, null),
              React.createElement(
                Row,
                { gutter: 16 },
                this.state.members.map(function (o) {
                  return React.createElement(
                    Col,
                    { sm: 24, md: 12, lg: 6, xxl: 4, style: { height: 160 } },
                    React.createElement(MemberCardItem, _extends({ key: o.id }, o))
                  );
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