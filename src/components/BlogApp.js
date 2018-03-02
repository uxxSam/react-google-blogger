import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
import BloggerContainer from './BloggerContainer';
import MenuBar from './MenuBar';
import PostBody from './PostBody';
import {
  fetchBlogSummary,
  fetchPosts,
  fetchNextPagePosts,
  fetchPrevPagePosts,
  renderPostDetail,
} from '../actions';

class BlogApp extends Component {
  componentWillMount() {
    const { apiKey, blogId, postPerPage } = this.props;
    this.props.fetchBlogSummary({ apiKey, blogId, postPerPage });
    this.props.fetchPosts({ apiKey, blogId, postPerPage });
  }

  renderMenuBar() {
    const {
      apiKey,
      blogId,
      currentPage,
      pageTokenStoreArray,
      loading,
      postPerPage,
    } = this.props;

    return (
      <MenuBar
        fetchPosts={this.props.fetchPosts}
        fetchNextPagePosts={this.props.fetchNextPagePosts}
        fetchPrevPagePosts={this.props.fetchPrevPagePosts}
        pageTokenStoreArray={pageTokenStoreArray}
        currentPage={currentPage}
        loading={loading}
        apiKey={apiKey}
        blogId={blogId}
        postPerPage={postPerPage}
      />
    );
  }

  renderBloggerContainer() {
    const {
      loading,
      postResponse,
      currentPage,
      postPerPage,
      index,
    } = this.props;

    if (loading) {
      return <LoadingSpinner />;
    }

    if (index === -1) {
      const { totalItems } = this.props.blogResponse.posts;

      const totalPages = Math.round(totalItems / postPerPage);

      return (
        <BloggerContainer
          posts={postResponse}
          currentPage={currentPage + 1}
          totalPages={totalPages}
          renderPostDetail={this.props.renderPostDetail}
        />
      );
    }

    return (
      <PostBody
        post={postResponse.items[index.index]}
      />);
  }

  render() {
    // create action fetchPostDetail, with a boolean indicator of the current rendering stuff (list or post)
    // separate loading to one statement here
    // click post -> loading, postBody = true, render
    // click back on postBody, loading, postBody = false, render prev list
    return (
      <div>
        {this.renderMenuBar()}
        {this.renderBloggerContainer()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { blogResponse } = state.blog;
  const { postResponse, pageTokenStoreArray } = state.post;
  const { currentPage } = state.post;
  const { index } = state.post;
  const loading = state.blog.loading || state.post.loading || !blogResponse || !postResponse;
  return {
    blogResponse,
    postResponse,
    index,
    loading,
    pageTokenStoreArray,
    currentPage,
  };
};

export default connect(mapStateToProps, {
  fetchBlogSummary,
  fetchPosts,
  fetchNextPagePosts,
  fetchPrevPagePosts,
  renderPostDetail,
})(BlogApp);
