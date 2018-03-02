import {
  POSTS_FETCH_SUCCESS,
  NEXT_PAGE_POSTS_FETCH_SUCCESS,
  PREV_PAGE_POSTS_FETCH_SUCCESS,
  RENDER_POST_DETAIL,
  LOADING,
} from '../actions/types';

const INITIAL_STATE = {
  postResponse: {},
  pageTokenStoreArray: [],
  currentPage: 0,
  loading: true,
  index: -1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      return {
        postResponse: action.payload,
        loading: false,
        pageTokenStoreArray: action.payload.nextPageToken ?
          [action.payload.nextPageToken] : [],
        currentPage: 0,
        index: -1,
      };

    case NEXT_PAGE_POSTS_FETCH_SUCCESS:
      return {
        postResponse: action.payload,
        loading: false,
        pageTokenStoreArray: state.currentPage != (state.pageTokenStoreArray.length  - 1) ? [...state.pageTokenStoreArray] :
        action.payload.nextPageToken ? [...state.pageTokenStoreArray, action.payload.nextPageToken] : [...state.pageTokenStoreArray],
        currentPage: state.currentPage + 1,
        index: -1,
      };

    case PREV_PAGE_POSTS_FETCH_SUCCESS:
      return {
        postResponse: action.payload,
        loading: false,
        pageTokenStoreArray: [...state.pageTokenStoreArray],
        currentPage: state.currentPage - 1,
        index: -1,
      };
    case RENDER_POST_DETAIL:
      return { ...state, index: action.payload };
    case LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
