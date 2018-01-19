import axios from 'axios';
import { POSTS_FETCH_SUCCESS, NEXT_PAGE_POSTS_FETCH_SUCCESS, PREV_PAGE_POSTS_FETCH_SUCCESS } from './types';

export const fetchPosts = ({ blogId, apiKey }) => {
  const apiEngPoint = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&maxResults=5`;
  return (dispatch) => {
    axios.get(apiEngPoint)
      .then((response) => {
        dispatch({
          type: POSTS_FETCH_SUCCESS,
          payload: response.data
        });
      });
  };
};

export const fetchNextPagePosts = ({ blogId, apiKey, token }) => {
  const apiEngPoint = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&pageToken=${token}&maxResults=5`;
  return (dispatch) => {
    dispatch({ type: 'fetching' });
    return axios.get(apiEngPoint).then(
      (response) => {
        dispatch({
          type: NEXT_PAGE_POSTS_FETCH_SUCCESS,
          payload: response.data
        });
      });
  };
};

export const fetchPrevPagePosts = ({ blogId, apiKey, token }) => {
  const apiEngPoint = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&pageToken=${token}&maxResults=5`;
  return (dispatch) => {
    dispatch({ type: 'fetching' });
    return axios.get(apiEngPoint).then(
      (response) => {
        dispatch({
          type: PREV_PAGE_POSTS_FETCH_SUCCESS,
          payload: response.data
        });
      });
  };
};
