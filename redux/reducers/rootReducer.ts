import { combineReducers } from 'redux';
import postsListReducer from './postsListReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  postsList: postsListReducer,
  postReducer: postReducer,
});

export default rootReducer;
