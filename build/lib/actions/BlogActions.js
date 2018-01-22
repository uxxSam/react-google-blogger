'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _types = require('./types');

var fetchBlogSummary = function fetchBlogSummary(_ref) {
  var blogId = _ref.blogId;
  var apiKey = _ref.apiKey;

  var apiEngPoint = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '?key=' + apiKey;
  return function (dispatch) {
    _axios2['default'].get(apiEngPoint).then(function (response) {
      dispatch({
        type: _types.BLOG_FETCH_SUCCESS,
        payload: response.data
      });
    });
  };
};
exports.fetchBlogSummary = fetchBlogSummary;