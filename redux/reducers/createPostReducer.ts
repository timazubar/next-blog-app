import { AnyAction } from 'redux';

import {
  SEND_POST_REQUEST,
  SEND_POST_SUCCESS,
  SEND_POST_FAILURE,
  TOGGLE_SENT_STATUS,
} from '../actions/createPostActions';

const initialState = {
  isLoading: false,
  isError: false,
  isSent: false,
};

type createPostState = typeof initialState;

const createPostReducer = (
  state = initialState,
  action: AnyAction
): createPostState => {
  switch (action.type) {
    case SEND_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case SEND_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case SEND_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case TOGGLE_SENT_STATUS:
      return {
        ...state,
        isSent: !state.isSent,
      };

    default:
      return state;
  }
};

export default createPostReducer;
