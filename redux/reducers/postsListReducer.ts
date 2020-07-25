import { AnyAction } from 'redux';
import {
  FETCH_POSTS_LIST_REQUEST,
  FETCH_POSTS_LIST_SUCCESS,
  FETCH_POSTS_LIST_FAILURE,
} from '../actions/postsListActions';

const initialState = {
  postsList: [],
  isLoading: true,
  isError: false,
};

type postsListState = typeof initialState;

const postsListReducer = (
  state = initialState,
  action: AnyAction
): postsListState => {
  switch (action.type) {
    case FETCH_POSTS_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_POSTS_LIST_SUCCESS:
      return {
        ...state,
        postsList: action.payload,
        isLoading: false,
      };
    case FETCH_POSTS_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return { ...state };
  }
};

export default postsListReducer;
