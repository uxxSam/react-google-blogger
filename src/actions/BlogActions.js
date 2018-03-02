import axios from 'axios';
import { BLOG_FETCH_SUCCESS } from './types';

export const fetchBlogSummary = ({ apiKey, blogId }) => {
  const apiEngPoint = `https://www.googleapis.com/blogger/v3/blogs/${blogId}?key=${apiKey}`;
  return (dispatch) => {
    axios.get(apiEngPoint)
      .then((response) => {
        dispatch({
          type: BLOG_FETCH_SUCCESS,
          payload: response.data,
        });
      });
  };
};
