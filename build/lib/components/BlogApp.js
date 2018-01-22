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

var _LoadingSpinner = require('./LoadingSpinner');

var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);

var _BloggerContainer = require('./BloggerContainer');

var _BloggerContainer2 = _interopRequireDefault(_BloggerContainer);

var _MenuBar = require('./MenuBar');

var _MenuBar2 = _interopRequireDefault(_MenuBar);

var _actions = require('../actions');

var BlogApp = (function (_Component) {
  _inherits(BlogApp, _Component);

  function BlogApp() {
    _classCallCheck(this, BlogApp);

    _get(Object.getPrototypeOf(BlogApp.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(BlogApp, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.fetchBlogSummary({
        blogId: '5735193246666010261',
        apiKey: 'AIzaSyCYqHncqz05FOCxtWPlgWVMjdMtebTXDCs'
      });
      this.props.fetchPosts({
        blogId: '5735193246666010261',
        apiKey: 'AIzaSyCYqHncqz05FOCxtWPlgWVMjdMtebTXDCs'
      });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      console.log("updated!");
    }
  }, {
    key: 'renderMenuBar',
    value: function renderMenuBar() {
      if (this.props.currentPage >= this.props.prevPageToken.length) {
        var nextPagetoken = this.props.postResponse.nextPageToken;
      } else {
        var nextPagetoken = this.props.prevPageToken[this.props.currentPage + 1];
      }
      return _react2['default'].createElement(_MenuBar2['default'], {
        fetchNextPagePosts: this.props.fetchNextPagePosts.bind(this),
        fetchPrevPagePosts: this.props.fetchPrevPagePosts.bind(this),
        prevPageToken: this.props.prevPageToken,
        nextPagetoken: this.props.currentPage >= this.props.prevPageToken.length - 1 ? this.props.postResponse.nextPageToken : this.props.prevPageToken[this.props.currentPage + 1],
        currentPage: this.props.currentPage,
        loading: this.props.loading
      });
    }
  }, {
    key: 'renderBloggerContainer',
    value: function renderBloggerContainer() {
      if (this.props.loading) {
        return _react2['default'].createElement(_LoadingSpinner2['default'], null);
      }
      return _react2['default'].createElement(_BloggerContainer2['default'], { posts: this.props.postResponse });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props);
      return _react2['default'].createElement(
        'div',
        null,
        this.renderMenuBar(),
        this.renderBloggerContainer()
      );
    }
  }]);

  return BlogApp;
})(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var blogResponse = state.blog.blogResponse;
  var _state$post = state.post;
  var postResponse = _state$post.postResponse;
  var prevPageToken = _state$post.prevPageToken;
  var currentPage = state.post.currentPage;

  var loading = state.blog.loading || state.post.loading;
  if (!blogResponse || !postResponse) loading = true;

  return { blogResponse: blogResponse, postResponse: postResponse, loading: loading, prevPageToken: prevPageToken, currentPage: currentPage };
};

exports['default'] = (0, _reactRedux.connect)(mapStateToProps, {
  fetchBlogSummary: _actions.fetchBlogSummary,
  fetchPosts: _actions.fetchPosts,
  fetchNextPagePosts: _actions.fetchNextPagePosts,
  fetchPrevPagePosts: _actions.fetchPrevPagePosts
})(BlogApp);
module.exports = exports['default'];