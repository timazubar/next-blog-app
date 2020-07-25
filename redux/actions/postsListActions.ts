import { AnyAction, Dispatch } from 'redux';

import PostModel from '../../models/PostModel';
import BlogService from '../../services/BlogService';

export const FETCH_POSTS_LIST_REQUEST = 'FETCH_POSTS_LIST_REQUEST';
export const FETCH_POSTS_LIST_SUCCESS = 'FETCH_POSTS_LIST_SUCCESS';
export const FETCH_POSTS_LIST_FAILURE = 'FETCH_POSTS_LIST_FAILURE';

const postsRequested = (): AnyAction => ({
  type: FETCH_POSTS_LIST_REQUEST,
});

const postsLoaded = (postsList: PostModel[]): AnyAction => ({
  type: FETCH_POSTS_LIST_SUCCESS,
  payload: postsList,
});

const postsError = (error: Error): AnyAction => ({
  type: FETCH_POSTS_LIST_FAILURE,
  payload: error,
});

const fetchPosts = async (dispatch: Dispatch): Promise<void> => {
  const blogService = new BlogService();
  try {
    dispatch(postsRequested());
    const postsList = (await blogService.getPosts()).reverse();
    dispatch(postsLoaded(postsList));
  } catch (error) {
    dispatch(postsError(error));
  }
};

export { fetchPosts };
