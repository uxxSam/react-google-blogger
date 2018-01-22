'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _redux = require('redux');

var _BlogReducer = require('./BlogReducer');

var _BlogReducer2 = _interopRequireDefault(_BlogReducer);

var _PostReducer = require('./PostReducer');

var _PostReducer2 = _interopRequireDefault(_PostReducer);

exports['default'] = (0, _redux.combineReducers)({
  blog: _BlogReducer2['default'],
  post: _PostReducer2['default']
});
module.exports = exports['default'];