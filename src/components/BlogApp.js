import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
import BloggerContainer from './BloggerContainer';
import MenuBar from './MenuBar';
import { fetchBlogSummary, fetchPosts, fetchNextPagePosts, fetchPrevPagePosts } from '../actions';

class BlogApp extends Component {

  componentWillMount() {
    this.props.fetchBlogSummary({
      blogId: '5735193246666010261',
      apiKey: 'AIzaSyCYqHncqz05FOCxtWPlgWVMjdMtebTXDCs'
    });
    this.props.fetchPosts({
      blogId: '5735193246666010261',
      apiKey: 'AIzaSyCYqHncqz05FOCxtWPlgWVMjdMtebTXDCs'
    });
  }

  renderMenuBar() {
    return (
      <MenuBar
        fetchNextPagePosts={this.props.fetchNextPagePosts.bind(this)}
        fetchPrevPagePosts={this.props.fetchPrevPagePosts.bind(this)}
        prevPageToken={this.props.prevPageToken}
        nextPagetoken={this.props.currentPage >= (this.props.prevPageToken.length - 1) ? this.props.postResponse.nextPageToken : this.props.prevPageToken[this.props.currentPage + 1]}
        currentPage={this.props.currentPage}
        loading={this.props.loading}
      />
    );
}

  renderBloggerContainer() {
    if (this.props.loading) {
      return <LoadingSpinner />;
    }
    return <BloggerContainer posts={this.props.postResponse} />;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.renderMenuBar()}
        {this.renderBloggerContainer()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { blogResponse } = state.blog;
  const { postResponse, prevPageToken } = state.post;
  const { currentPage } = state.post;
  let loading = state.blog.loading || state.post.loading;
  if (!blogResponse || !postResponse) loading = true;

  return { blogResponse, postResponse, loading, prevPageToken, currentPage };
};

export default connect(mapStateToProps, {
  fetchBlogSummary,
  fetchPosts,
  fetchNextPagePosts,
  fetchPrevPagePosts
})(BlogApp);
