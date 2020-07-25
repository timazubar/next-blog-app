import React from 'react';
import { connect } from 'react-redux';
import { NextPage, NextPageContext } from 'next';

import PostModel from '../models/PostModel';
import AppLayout from '../components/AppLayout';
import PostsList from '../components/PostsList';
import { fetchPosts } from '../redux/actions/postsListActions';

interface Props {
  postsList: PostModel[];
  isError?: boolean;
}

const Index: NextPage<Props> = ({ postsList, isError }) => {
  return (
    <AppLayout>
      <PostsList posts={postsList} />
    </AppLayout>
  );
};

Index.getInitialProps = async ({
  store,
}: NextPageContext): Promise<{ postsList: PostModel[] }> => {
  const { dispatch } = store;
  await fetchPosts(dispatch);
  const { postsList } = store.getState();
  return { postsList };
};

const mapStateToProps = (state): { isError: boolean } => ({
  isError: state.postsList.isError,
});

export default connect(mapStateToProps)(Index);
