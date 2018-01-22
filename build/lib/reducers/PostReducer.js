'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _actionsTypes = require('../actions/types');

var INITIAL_STATE = {
  postResponse: {},
  prevPageToken: [],
  currentPage: 0,
  loading: true
};

exports['default'] = function (state, action) {
  if (state === undefined) state = INITIAL_STATE;

  switch (action.type) {
    case _actionsTypes.POSTS_FETCH_SUCCESS:
      return {
        postResponse: action.payload,
        loading: false,
        prevPageToken: action.payload.nextPageToken ? [].concat(_toConsumableArray(state.prevPageToken), [action.payload.nextPageToken]) : state.prevPageToken,
        currentPage: 0
      };

    case _actionsTypes.NEXT_PAGE_POSTS_FETCH_SUCCESS:
      return {
        postResponse: action.payload,
        loading: false,
        prevPageToken: state.currentPage + 1 < state.prevPageToken.length ? state.prevPageToken : action.payload.nextPageToken ? [].concat(_toConsumableArray(state.prevPageToken), [action.payload.nextPageToken]) : state.prevPageToken,
        currentPage: state.currentPage + 1
      };

    case _actionsTypes.PREV_PAGE_POSTS_FETCH_SUCCESS:
      return {
        postResponse: action.payload,
        loading: false,
        prevPageToken: state.prevPageToken,
        currentPage: state.currentPage - 1
      };

    case 'fetching':
      return _extends({}, state, { loading: true });
    default:
      return state;
  }
};

module.exports = exports['default'];