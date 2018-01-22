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

var _materialUiPaper = require('material-ui/Paper');

var _materialUiPaper2 = _interopRequireDefault(_materialUiPaper);

var _materialUiList = require('material-ui/List');

var _materialUiDivider = require('material-ui/Divider');

var _materialUiDivider2 = _interopRequireDefault(_materialUiDivider);

var _materialUiSubheader = require('material-ui/Subheader');

var _materialUiSubheader2 = _interopRequireDefault(_materialUiSubheader);

var _materialUiAvatar = require('material-ui/Avatar');

var _materialUiAvatar2 = _interopRequireDefault(_materialUiAvatar);

var _materialUiStylesColors = require('material-ui/styles/colors');

var _materialUiIconButton = require('material-ui/IconButton');

var _materialUiIconButton2 = _interopRequireDefault(_materialUiIconButton);

var _materialUiSvgIconsNavigationMoreVert = require('material-ui/svg-icons/navigation/more-vert');

var _materialUiSvgIconsNavigationMoreVert2 = _interopRequireDefault(_materialUiSvgIconsNavigationMoreVert);

var _materialUiIconMenu = require('material-ui/IconMenu');

var _materialUiIconMenu2 = _interopRequireDefault(_materialUiIconMenu);

var _materialUiMenuItem = require('material-ui/MenuItem');

var _materialUiMenuItem2 = _interopRequireDefault(_materialUiMenuItem);

var _PostListItem = require('./PostListItem');

var _PostListItem2 = _interopRequireDefault(_PostListItem);

var ListExampleMessages = (function (_Component) {
  _inherits(ListExampleMessages, _Component);

  function ListExampleMessages() {
    _classCallCheck(this, ListExampleMessages);

    _get(Object.getPrototypeOf(ListExampleMessages.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ListExampleMessages, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _materialUiPaper2['default'],
          null,
          _react2['default'].createElement(
            _materialUiList.List,
            null,
            _react2['default'].createElement(
              _materialUiSubheader2['default'],
              null,
              'Today'
            ),
            this.props.posts.items.map(function (postSummary) {
              return _react2['default'].createElement(
                'div',
                { key: postSummary.id },
                _react2['default'].createElement(_PostListItem2['default'], { post: postSummary })
              );
            })
          )
        )
      );
    }
  }]);

  return ListExampleMessages;
})(_react.Component);

exports['default'] = ListExampleMessages;
module.exports = exports['default'];