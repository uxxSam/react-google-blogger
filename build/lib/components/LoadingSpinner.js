'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUiCircularProgress = require('material-ui/CircularProgress');

var _materialUiCircularProgress2 = _interopRequireDefault(_materialUiCircularProgress);

var divStyle = {
  textAlign: 'center',
  verticalAlign: 'middle'
};

var spinnerStyle = {
  margin: 'auto',
  verticalAlign: 'middle'
};

var LoadingSpinner = function LoadingSpinner() {
  return _react2['default'].createElement(
    'div',
    { style: divStyle },
    _react2['default'].createElement(_materialUiCircularProgress2['default'], { style: spinnerStyle, size: 100, thickness: 5 })
  );
};

exports['default'] = LoadingSpinner;
module.exports = exports['default'];