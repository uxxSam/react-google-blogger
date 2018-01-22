'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUiList = require('material-ui/List');

var _materialUiDivider = require('material-ui/Divider');

var _materialUiDivider2 = _interopRequireDefault(_materialUiDivider);

var _materialUiAvatar = require('material-ui/Avatar');

var _materialUiAvatar2 = _interopRequireDefault(_materialUiAvatar);

var _materialUiStylesColors = require('material-ui/styles/colors');

var PostListItem = function PostListItem(_ref) {
  var post = _ref.post;

  var imageUrl = 'https:' + post.author.image.url;

  var cleanBlogContent = post.content.replace(/(?:&nbsp;|<.+?>)/g, '');

  return _react2['default'].createElement(
    'div',
    null,
    _react2['default'].createElement(_materialUiList.ListItem, {
      leftAvatar: _react2['default'].createElement(_materialUiAvatar2['default'], { src: imageUrl }),
      primaryText: post.title,
      secondaryText: _react2['default'].createElement(
        'p',
        null,
        _react2['default'].createElement(
          'span',
          { style: { color: _materialUiStylesColors.darkBlack } },
          post.author.displayName
        ),
        ' --',
        ' ',
        cleanBlogContent
      ),
      secondaryTextLines: 2
    }),
    _react2['default'].createElement(_materialUiDivider2['default'], { inset: true })
  );
};

exports['default'] = PostListItem;
module.exports = exports['default'];