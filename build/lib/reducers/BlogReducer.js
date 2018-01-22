'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _actionsTypes = require('../actions/types');

var INITIAL_STATE = {
  blogName: '',

  loading: true
};

exports['default'] = function (state, action) {
  if (state === undefined) state = INITIAL_STATE;

  switch (action.type) {
    case _actionsTypes.BLOG_FETCH_SUCCESS:
      return { blogResponse: action.payload, loading: false };
    default:
      return state;
  }
};

module.exports = exports['default'];