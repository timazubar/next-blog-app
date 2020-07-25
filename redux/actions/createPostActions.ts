import { AnyAction, Dispatch } from 'redux';
import PostModel from '../../models/PostModel';
import BlogService from '../../services/BlogService';

export const SEND_POST_REQUEST = 'SEND_POST_REQUEST';
export const SEND_POST_SUCCESS = 'SEND_POST_SUCCESS';
export const SEND_POST_FAILURE = 'SEND_POST_FAILURE';
export const TOGGLE_SENT_STATUS = 'TOGGLE_SENT_STATUS';

const postSendRequest = (): AnyAction => ({
  type: SEND_POST_REQUEST,
});

const postSendSuccess = (): AnyAction => ({
  type: SEND_POST_SUCCESS,
});

const postSendError = (error: Error): AnyAction => ({
  type: SEND_POST_FAILURE,
  payload: error,
});

const toggleSentStatus = (): AnyAction => ({
  type: TOGGLE_SENT_STATUS,
});

const sendPost = (dispatch: Dispatch) => async (
  post: PostModel
): Promise<void> => {
  const blogService = new BlogService();
  try {
    dispatch(postSendRequest());
    blogService.sendPost(post);
    dispatch(postSendSuccess());
    dispatch(toggleSentStatus());
  } catch (error) {
    dispatch(postSendError(error));
  }
};

export { sendPost };
