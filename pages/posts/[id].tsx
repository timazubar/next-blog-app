import React from 'react';
import { NextPage } from 'next';
import { connect } from 'react-redux';

import AppLayout from '../../components/AppLayout';

import PostModel from '../../models/PostModel';
import StateModel from '../../models/StateModel';

import { fetchPostById } from '../../redux/actions/postActions';

interface Props {
  post?: PostModel;
  isError?: boolean;
}

const Post: NextPage<Props> = ({ post, isError }) => {
  return (
    <AppLayout>
      {isError ? (
        <div>Something went wrong!</div>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <small>id: {post.id}</small>
          <div>{post.body}</div>
        </div>
      )}
    </AppLayout>
  );
};

Post.getInitialProps = async ({
  query,
  store,
}): Promise<{ post: PostModel }> => {
  const { dispatch } = store;
  await fetchPostById(query.id, dispatch);
  const { post } = store.getState().post;

  return { post };
};

const mapStateToProps = (state: StateModel): { isError: boolean } => ({
  isError: state.post.isError,
});

export default connect(mapStateToProps)(Post);
