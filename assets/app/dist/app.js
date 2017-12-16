'use strict';

System.register('teamelf/App', ['teamelf/lib/Component', 'teamelf/component/Error', 'teamelf/component/layout/Logo', 'teamelf/component/layout/TopNav', 'teamelf/component/layout/AuthBar', 'teamelf/component/layout/Routes', 'teamelf/component/layout/Footer', 'teamelf/component/Home', 'teamelf/component/Member', 'teamelf/component/Profile'], function (_export, _context) {
  "use strict";

  var Component, RedirectAs404, Logo, TopNav, AuthBar, Routes, Footer, Home, Member, Profile, _createClass, _ReactRouterDOM, Switch, Route, Redirect, _antd, Layout, Header, Content, _class;

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
    setters: [function (_teamelfLibComponent) {
      Component = _teamelfLibComponent.default;
    }, function (_teamelfComponentError) {
      RedirectAs404 = _teamelfComponentError.RedirectAs404;
    }, function (_teamelfComponentLayoutLogo) {
      Logo = _teamelfComponentLayoutLogo.default;
    }, function (_teamelfComponentLayoutTopNav) {
      TopNav = _teamelfComponentLayoutTopNav.default;
    }, function (_teamelfComponentLayoutAuthBar) {
      AuthBar = _teamelfComponentLayoutAuthBar.default;
    }, function (_teamelfComponentLayoutRoutes) {
      Routes = _teamelfComponentLayoutRoutes.default;
    }, function (_teamelfComponentLayoutFooter) {
      Footer = _teamelfComponentLayoutFooter.default;
    }, function (_teamelfComponentHome) {
      Home = _teamelfComponentHome.default;
    }, function (_teamelfComponentMember) {
      Member = _teamelfComponentMember.default;
    }, function (_teamelfComponentProfile) {
      Profile = _teamelfComponentProfile.default;
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
      Header = Layout.Header;
      Content = Layout.Content;

      _class = function (_Component) {
        _inherits(_class, _Component);

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
              React.createElement(
                Header,
                { style: { position: 'fixed', left: 0, right: 0, zIndex: 999 } },
                React.createElement(Logo, null),
                React.createElement(TopNav, null),
                React.createElement(AuthBar, null)
              ),
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
      }(Component);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/main', ['teamelf/App', 'teamelf/component/Error'], function (_export, _context) {
  "use strict";

  var App, Error, _ReactRouterDOM, BrowserRouter, Route, app, target;

  return {
    setters: [function (_teamelfApp) {
      App = _teamelfApp.default;
    }, function (_teamelfComponentError) {
      Error = _teamelfComponentError.default;
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
'use strict';

System.register('teamelf/component/Error', ['teamelf/lib/Component'], function (_export, _context) {
  "use strict";

  var Component, _createClass, _ReactRouterDOM, Redirect, _class, RedirectAs404;

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
    setters: [function (_teamelfLibComponent) {
      Component = _teamelfLibComponent.default;
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
      Redirect = _ReactRouterDOM.Redirect;

      _class = function (_Component) {
        _inherits(_class, _Component);

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
      }(Component);

      _export('default', _class);

      _export('RedirectAs404', RedirectAs404 = function (_Component2) {
        _inherits(RedirectAs404, _Component2);

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
      }(Component));

      _export('RedirectAs404', RedirectAs404);
    }
  };
});
'use strict';

System.register('teamelf/component/Home', ['teamelf/lib/PageComponent'], function (_export, _context) {
  "use strict";

  var Component, _createClass, _class;

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
    setters: [function (_teamelfLibPageComponent) {
      Component = _teamelfLibPageComponent.default;
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

      _class = function (_Component) {
        _inherits(_class, _Component);

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
      }(Component);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/component/Member', ['teamelf/lib/PageComponent', 'teamelf/component/Error', 'teamelf/component/member/MemberList', 'teamelf/component/member/MemberItem'], function (_export, _context) {
  "use strict";

  var Component, RedirectAs404, MemberList, MemberItem, _createClass, _ReactRouterDOM, Switch, Route, _class;

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
    setters: [function (_teamelfLibPageComponent) {
      Component = _teamelfLibPageComponent.default;
    }, function (_teamelfComponentError) {
      RedirectAs404 = _teamelfComponentError.RedirectAs404;
    }, function (_teamelfComponentMemberMemberList) {
      MemberList = _teamelfComponentMemberMemberList.default;
    }, function (_teamelfComponentMemberMemberItem) {
      MemberItem = _teamelfComponentMemberMemberItem.default;
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

      _class = function (_Component) {
        _inherits(_class, _Component);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          _this.routes = [{
            path: '/member',
            exact: true,
            component: MemberList
          }, {
            path: '/member/:id',
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
      }(Component);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/component/Profile', ['teamelf/lib/PageComponent'], function (_export, _context) {
  "use strict";

  var Component, _createClass, _class;

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
    setters: [function (_teamelfLibPageComponent) {
      Component = _teamelfLibPageComponent.default;
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

      _class = function (_Component) {
        _inherits(_class, _Component);

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
      }(Component);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/lib/Component', [], function (_export, _context) {
  "use strict";

  var AbstractComponent;

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
      AbstractComponent = function (_React$Component) {
        _inherits(AbstractComponent, _React$Component);

        function AbstractComponent(props) {
          _classCallCheck(this, AbstractComponent);

          if (new.target === AbstractComponent) {
            throw new Error('AbstractComponent cannot be instanced directly!');
          }

          var _this = _possibleConstructorReturn(this, (AbstractComponent.__proto__ || Object.getPrototypeOf(AbstractComponent)).call(this, props));

          _this.state = {};
          return _this;
        }

        return AbstractComponent;
      }(React.Component);

      _export('default', AbstractComponent);
    }
  };
});
'use strict';

System.register('teamelf/lib/Model', [], function (_export, _context) {
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

System.register('teamelf/lib/PageComponent', ['teamelf/lib/Component'], function (_export, _context) {
  "use strict";

  var Component, _createClass, _ReactRouterDOM, Link, _antd, Layout, Menu, Sider, Content, PageComponent;

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
    setters: [function (_teamelfLibComponent) {
      Component = _teamelfLibComponent.default;
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
      Layout = _antd.Layout;
      Menu = _antd.Menu;
      Sider = Layout.Sider;
      Content = Layout.Content;

      PageComponent = function (_Component) {
        _inherits(PageComponent, _Component);

        function PageComponent(props) {
          _classCallCheck(this, PageComponent);

          if (new.target === PageComponent) {
            throw new Error('ContentComponent cannot be instanced directly!');
          }

          var _this = _possibleConstructorReturn(this, (PageComponent.__proto__ || Object.getPrototypeOf(PageComponent)).call(this, props));

          _this.navigations = []; // [{path, icon, title}]
          return _this;
        }

        _createClass(PageComponent, [{
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
                { style: { padding: '0 24px', minHeight: 280 } },
                this.view()
              )
            );
          }
        }]);

        return PageComponent;
      }(Component);

      _export('default', PageComponent);
    }
  };
});
'use strict';

System.register('teamelf/component/layout/AuthBar', ['teamelf/lib/Component'], function (_export, _context) {
  "use strict";

  var Component, _createClass, _ReactRouterDOM, Link, withRouter, _antd, Menu, Icon, Avatar, AuthBar;

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
    setters: [function (_teamelfLibComponent) {
      Component = _teamelfLibComponent.default;
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
      Menu = _antd.Menu;
      Icon = _antd.Icon;
      Avatar = _antd.Avatar;

      AuthBar = function (_Component) {
        _inherits(AuthBar, _Component);

        function AuthBar() {
          _classCallCheck(this, AuthBar);

          return _possibleConstructorReturn(this, (AuthBar.__proto__ || Object.getPrototypeOf(AuthBar)).apply(this, arguments));
        }

        _createClass(AuthBar, [{
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
            console.log('logout');
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
                    'span',
                    { style: { marginLeft: 10 } },
                    '\u9E73\u72F8\u733F'
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
      }(Component);

      _export('default', withRouter(AuthBar));
    }
  };
});
'use strict';

System.register('teamelf/component/layout/Footer', ['teamelf/lib/Component'], function (_export, _context) {
  "use strict";

  var Component, _createClass, _antd, Layout, Footer, _class;

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
    setters: [function (_teamelfLibComponent) {
      Component = _teamelfLibComponent.default;
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
      Footer = Layout.Footer;

      _class = function (_Component) {
        _inherits(_class, _Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            return React.createElement(
              Footer,
              { style: { textAlign: 'center' } },
              'TeamELF \xA92017 Created by TeamELF'
            );
          }
        }]);

        return _class;
      }(Component);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/component/layout/Logo', ['teamelf/lib/Component'], function (_export, _context) {
  "use strict";

  var Component, _createClass, _ReactRouterDOM, Link, _class;

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
    setters: [function (_teamelfLibComponent) {
      Component = _teamelfLibComponent.default;
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

      _class = function (_Component) {
        _inherits(_class, _Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            return React.createElement(Link, {
              to: '/home',
              style: {
                width: 120, height: 31,
                background: 'rgba(255,255,255,.2)',
                margin: '16px 28px 16px 0',
                float: 'left'
              }
            });
          }
        }]);

        return _class;
      }(Component);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/component/layout/Routes', ['teamelf/lib/Component'], function (_export, _context) {
  "use strict";

  var Component, _createClass, _antd, Breadcrumb, _class;

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
    setters: [function (_teamelfLibComponent) {
      Component = _teamelfLibComponent.default;
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
      Breadcrumb = _antd.Breadcrumb;

      _class = function (_Component) {
        _inherits(_class, _Component);

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
      }(Component);

      _export('default', _class);
    }
  };
});
'use strict';

System.register('teamelf/component/layout/TopNav', ['teamelf/lib/Component'], function (_export, _context) {
  "use strict";

  var Component, _createClass, _ReactRouterDOM, Link, withRouter, _antd, Menu, Icon, TopNav;

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
    setters: [function (_teamelfLibComponent) {
      Component = _teamelfLibComponent.default;
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
      Menu = _antd.Menu;
      Icon = _antd.Icon;

      TopNav = function (_Component) {
        _inherits(TopNav, _Component);

        function TopNav(props) {
          _classCallCheck(this, TopNav);

          var _this = _possibleConstructorReturn(this, (TopNav.__proto__ || Object.getPrototypeOf(TopNav)).call(this, props));

          _this.navigations = [{ path: '/home', icon: 'home', title: '概览' }, { path: '/member', icon: 'user', title: '成员管理' }];
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
                    React.createElement(Icon, { type: o.icon }),
                    o.title
                  )
                );
              })
            );
          }
        }]);

        return TopNav;
      }(Component);

      _export('default', withRouter(TopNav));
    }
  };
});
'use strict';

System.register('teamelf/component/member/MemberItem', ['teamelf/lib/Component'], function (_export, _context) {
  "use strict";

  var Component, _createClass, _class;

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
    setters: [function (_teamelfLibComponent) {
      Component = _teamelfLibComponent.default;
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

      _class = function (_Component) {
        _inherits(_class, _Component);

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
              'member ',
              this.props.match.params.id
            );
          }
        }]);

        return _class;
      }(Component);

      _export('default', _class);
    }
  };
});
"use strict";

System.register("teamelf/component/member/MemberList", ["teamelf/lib/Component"], function (_export, _context) {
  "use strict";

  var Component, _createClass, _ReactRouterDOM, Link, _class;

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
    setters: [function (_teamelfLibComponent) {
      Component = _teamelfLibComponent.default;
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

      _class = function (_Component) {
        _inherits(_class, _Component);

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
                Link,
                { to: "/member/1" },
                "to 1"
              ),
              " ",
              React.createElement("br", null),
              React.createElement(
                Link,
                { to: "/member/2" },
                "to 2"
              ),
              " ",
              React.createElement("br", null),
              React.createElement(
                Link,
                { to: "/member/3" },
                "to 3"
              ),
              " ",
              React.createElement("br", null)
            );
          }
        }]);

        return _class;
      }(Component);

      _export("default", _class);
    }
  };
});