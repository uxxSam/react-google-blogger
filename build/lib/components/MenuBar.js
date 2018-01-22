'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUiRaisedButton = require('material-ui/RaisedButton');

var _materialUiRaisedButton2 = _interopRequireDefault(_materialUiRaisedButton);

var styleLeft = {
  margin: 'auto',
  float: 'left'
};

var styleRight = {
  margin: 'auto',
  float: 'right'
};

var styleMiddle = {
  margin: 'auto'
};

var divStyle = {
  textAlign: 'center'
};

var MenuBar = (function (_Component) {
  _inherits(MenuBar, _Component);

  function MenuBar() {
    _classCallCheck(this, MenuBar);

    _get(Object.getPrototypeOf(MenuBar.prototype), 'constructor', this).call(this);
    this.state = { triggered: false };
  }

  _createClass(MenuBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var fetchNextPagePosts = _props.fetchNextPagePosts;
      var fetchPrevPagePosts = _props.fetchPrevPagePosts;
      var nextPagetoken = _props.nextPagetoken;
      var prevPageToken = _props.prevPageToken;
      var currentPage = _props.currentPage;
      var loading = _props.loading;

      return _react2['default'].createElement(
        'div',
        { style: divStyle },
        _react2['default'].createElement(_materialUiRaisedButton2['default'], {
          onClick: function () {
            fetchPrevPagePosts({
              blogId: '5735193246666010261',
              apiKey: 'AIzaSyCYqHncqz05FOCxtWPlgWVMjdMtebTXDCs',
              token: prevPageToken[currentPage - 1]
            });
          },
          label: 'Previous',
          style: styleLeft,
          disabled: prevPageToken.length <= 1 || currentPage <= 0 || loading
        }),
        _react2['default'].createElement(_materialUiRaisedButton2['default'], { label: 'Next', style: styleMiddle }),
        _react2['default'].createElement(_materialUiRaisedButton2['default'], {
          onClick: function () {
            fetchNextPagePosts({
              blogId: '5735193246666010261',
              apiKey: 'AIzaSyCYqHncqz05FOCxtWPlgWVMjdMtebTXDCs',
              token: nextPagetoken
            });
          },
          label: 'Next',
          style: styleRight,
          disabled: !nextPagetoken && currentPage >= prevPageToken.length - 1 || loading
        })
      );
    }
  }]);

  return MenuBar;
})(_react.Component);

exports['default'] = MenuBar;
module.exports = exports['default'];