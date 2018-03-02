import { combineReducers } from 'redux';
import BlogReducer from './BlogReducer';
import PostReducer from './PostReducer';

export default combineReducers({
  blog: BlogReducer,
  post: PostReducer,
});
