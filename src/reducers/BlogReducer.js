import { BLOG_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  blogName: '',
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BLOG_FETCH_SUCCESS:
      return { blogResponse: action.payload, loading: false };
    default:
      return state;
  }
};
