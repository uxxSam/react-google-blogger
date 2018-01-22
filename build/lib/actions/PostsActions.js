'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _types = require('./types');

var fetchPosts = function fetchPosts(_ref) {
  var blogId = _ref.blogId;
  var apiKey = _ref.apiKey;

  var apiEngPoint = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts?key=' + apiKey + '&maxResults=5';
  return function (dispatch) {
    _axios2['default'].get(apiEngPoint).then(function (response) {
      dispatch({
        type: _types.POSTS_FETCH_SUCCESS,
        payload: response.data
      });
    });
  };
};

exports.fetchPosts = fetchPosts;
var fetchNextPagePosts = function fetchNextPagePosts(_ref2) {
  var blogId = _ref2.blogId;
  var apiKey = _ref2.apiKey;
  var token = _ref2.token;

  var apiEngPoint = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts?key=' + apiKey + '&pageToken=' + token + '&maxResults=5';
  return function (dispatch) {
    dispatch({ type: 'fetching' });
    return _axios2['default'].get(apiEngPoint).then(function (response) {
      dispatch({
        type: _types.NEXT_PAGE_POSTS_FETCH_SUCCESS,
        payload: response.data
      });
    });
  };
};

exports.fetchNextPagePosts = fetchNextPagePosts;
var fetchPrevPagePosts = function fetchPrevPagePosts(_ref3) {
  var blogId = _ref3.blogId;
  var apiKey = _ref3.apiKey;
  var token = _ref3.token;

  var apiEngPoint = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts?key=' + apiKey + '&pageToken=' + token + '&maxResults=5';
  return function (dispatch) {
    dispatch({ type: 'fetching' });
    return _axios2['default'].get(apiEngPoint).then(function (response) {
      dispatch({
        type: _types.PREV_PAGE_POSTS_FETCH_SUCCESS,
        payload: response.data
      });
    });
  };
};
exports.fetchPrevPagePosts = fetchPrevPagePosts;