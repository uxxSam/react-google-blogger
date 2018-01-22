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

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _materialUiStylesMuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _materialUiStylesMuiThemeProvider2 = _interopRequireDefault(_materialUiStylesMuiThemeProvider);

var _BlogApp = require('./BlogApp');

var _BlogApp2 = _interopRequireDefault(_BlogApp);

var _reducersIndex = require('../reducers/index');

var _reducersIndex2 = _interopRequireDefault(_reducersIndex);

var ReactGoogleBlogger = (function (_Component) {
  _inherits(ReactGoogleBlogger, _Component);

  function ReactGoogleBlogger() {
    _classCallCheck(this, ReactGoogleBlogger);

    _get(Object.getPrototypeOf(ReactGoogleBlogger.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ReactGoogleBlogger, [{
    key: 'render',
    value: function render() {
      var store = (0, _redux.createStore)(_reducersIndex2['default'], {}, (0, _redux.applyMiddleware)(_reduxThunk2['default']));

      return _react2['default'].createElement(
        _reactRedux.Provider,
        { store: store },
        _react2['default'].createElement(
          _materialUiStylesMuiThemeProvider2['default'],
          null,
          _react2['default'].createElement(_BlogApp2['default'], null)
        )
      );
    }
  }]);

  return ReactGoogleBlogger;
})(_react.Component);

exports['default'] = ReactGoogleBlogger;
module.exports = exports['default'];