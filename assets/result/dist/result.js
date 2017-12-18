'use strict';

System.register('teamelf/result/Result', ['teamelf/common/SimpleLayout'], function (_export, _context) {
  "use strict";

  var SimpleLayout, _slicedToArray, _createClass, _antd, Icon, _class;

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

      _class = function (_SimpleLayout) {
        _inherits(_class, _SimpleLayout);

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