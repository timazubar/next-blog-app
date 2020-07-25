import { AnyAction, Dispatch } from 'redux';

import PostModel from '../../models/PostModel';
import BlogService from '../../services/BlogService';

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

const postRequested = (): AnyAction => ({
  type: FETCH_POST_REQUEST,
});

const postLoaded = (post: PostModel): AnyAction => ({
  type: FETCH_POST_SUCCESS,
  payload: post,
});

const postError = (error: Error): AnyAction => ({
  type: FETCH_POST_FAILURE,
  payload: error,
});

const fetchPostById = async (postId, dispatch: Dispatch): Promise<void> => {
  const blogService = new BlogService();
  try {
    dispatch(postRequested());
    const post = await blogService.getPostById(postId);
    dispatch(postLoaded(post));
  } catch (error) {
    dispatch(postError(error));
  }
};

export { fetchPostById };
