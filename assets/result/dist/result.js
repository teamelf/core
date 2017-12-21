'use strict';

System.register('teamelf/result/Result', ['teamelf/common/SimpleLayout'], function (_export, _context) {
  "use strict";

  var SimpleLayout, _createClass, _antd, Icon, Button, _class;

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
      Icon = _antd.Icon;
      Button = _antd.Button;

      _class = function (_SimpleLayout) {
        _inherits(_class, _SimpleLayout);

        function _class(props) {
          _classCallCheck(this, _class);

          var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

          var fontSize = '64px';
          _this.icons = {
            success: React.createElement(Icon, { type: 'check-circle', style: { color: '#52c41a', fontSize: fontSize } })
          };
          _this.query = new URLSearchParams(window.location.search);
          _this.redirect = _this.query.get('redirect');
          _this.redirect = JSON.parse(_this.query.get('redirect'));
          if (_this.redirect) {
            _this.flushSeconds();
          }
          return _this;
        }

        _createClass(_class, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
            document.getElementById('message').innerHTML = this.query.get('message');
          }
        }, {
          key: 'flushSeconds',
          value: function flushSeconds() {
            var _this2 = this;

            if (this.redirect.time > 0) {
              setTimeout(function () {
                _this2.redirect.time -= 1;
                _this2.forceUpdate();
                _this2.flushSeconds();
              }, 1000);
            } else if (this.redirect.time === 0) {
              window.location.href = this.redirect.link;
            }
          }
        }, {
          key: 'renderRedirect',
          value: function renderRedirect() {
            if (this.redirect) {
              return React.createElement(
                'div',
                { style: { margin: '20px 0' } },
                '\u5C06\u5728 ',
                this.redirect.time,
                ' \u79D2\u540E\u81EA\u52A8\u8DF3\u8F6C\u81F3 ',
                this.redirect.name,
                '\uFF0C',
                React.createElement(
                  'a',
                  { href: this.redirect.link },
                  '\u6216\u70B9\u6B64\u7ACB\u5373\u8DF3\u8F6C'
                )
              );
            } else {
              return null;
            }
          }
        }, {
          key: 'view',
          value: function view() {
            var Icon = this.icons[this.query.type] || this.icons.success;
            return React.createElement(
              'div',
              null,
              React.createElement(
                'div',
                { style: { margin: '50px 0' } },
                Icon
              ),
              React.createElement('h3', { id: 'message' }),
              this.renderRedirect(),
              React.createElement(
                Button,
                { type: 'primary', href: '/' },
                '\u8FD4\u56DE\u9996\u9875'
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

System.register('teamelf/result/main', ['teamelf/result/Result'], function (_export, _context) {
  "use strict";

  var Result, target;
  return {
    setters: [function (_teamelfResultResult) {
      Result = _teamelfResultResult.default;
    }],
    execute: function () {
      target = document.getElementById('react-render-target-result');

      if (target) {
        ReactDOM.render(React.createElement(Result, null), target);
      }
    }
  };
});