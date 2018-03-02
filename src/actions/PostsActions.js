import axios from 'axios';
import {
  POSTS_FETCH_SUCCESS,
  NEXT_PAGE_POSTS_FETCH_SUCCESS,
  PREV_PAGE_POSTS_FETCH_SUCCESS,
  RENDER_POST_DETAIL,
  LOADING,
} from './types';

export const fetchPosts = ({ apiKey, blogId, postPerPage }) => {
  const apiEngPoint = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&maxResults=${postPerPage}`;
  return (dispatch) => {
    axios.get(apiEngPoint)
      .then((response) => {
        dispatch({
          type: POSTS_FETCH_SUCCESS,
          payload: response.data,
        });
      });
  };
};

export const fetchNextPagePosts = ({ blogId, apiKey, token, postPerPage }) => {
  const apiEngPoint = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&pageToken=${token}&maxResults=${postPerPage}`;
  return (dispatch) => {
    dispatch({ type: LOADING });
    return axios.get(apiEngPoint).then((response) => {
      dispatch({
        type: NEXT_PAGE_POSTS_FETCH_SUCCESS,
        payload: response.data,
      });
    });
  };
};

export const fetchPrevPagePosts = ({ blogId, apiKey, token, postPerPage }) => {
  const apiEngPoint = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&pageToken=${token}&maxResults=${postPerPage}`;
  return (dispatch) => {
    dispatch({ type: LOADING });
    return axios.get(apiEngPoint).then((response) => {
      dispatch({
        type: PREV_PAGE_POSTS_FETCH_SUCCESS,
        payload: response.data,
      });
    });
  };
};

export const renderPostDetail = (index) => {
  return {
    type: RENDER_POST_DETAIL,
    payload: index,
  };
};
