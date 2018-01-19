import { POSTS_FETCH_SUCCESS, NEXT_PAGE_POSTS_FETCH_SUCCESS, PREV_PAGE_POSTS_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  postResponse: {},
  prevPageToken: [],
  currentPage: 0,
  loading: true
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      return {
        postResponse: action.payload,
        loading: false,
        prevPageToken: action.payload.nextPageToken ?
        [ ...state.prevPageToken, action.payload.nextPageToken ] :
        state.prevPageToken,
        currentPage: 0
      };

    case NEXT_PAGE_POSTS_FETCH_SUCCESS:
      return {
        postResponse: action.payload,
        loading: false,
        prevPageToken: state.currentPage + 1 < state.prevPageToken.length ? state.prevPageToken :
        action.payload.nextPageToken ? [ ...state.prevPageToken, action.payload.nextPageToken ] :
        state.prevPageToken,
        currentPage: state.currentPage + 1
      };

    case PREV_PAGE_POSTS_FETCH_SUCCESS:
      return {
        postResponse: action.payload,
        loading: false,
        prevPageToken: state.prevPageToken,
        currentPage: state.currentPage - 1
      };

      case 'fetching':
        return { ...state, loading: true };
    default:
      return state;
  }
}
