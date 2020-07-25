import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { NextPage } from 'next';
import { Dispatch } from 'redux';

import AppLayout from '../../components/AppLayout';

import PostModel from '../../models/PostModel';
import StateModel from '../../models/StateModel';

import { sendPost } from '../../redux/actions/createPostActions';

interface State {
  isSent: boolean;
  isLoading: boolean;
  isError: boolean;
}

interface Props extends State {
  sendPost: (post: PostModel) => Promise<void>;
}

const CreatePost: NextPage<Props> = ({
  sendPost,
  isSent,
  isLoading,
  isError,
}) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <AppLayout>
      <h2>CreatePost</h2>
      <form
        onSubmit={(e): void => {
          e.preventDefault();
          const title = titleRef.current.value;
          const body = contentRef.current.value;
          contentRef.current.value = '';
          titleRef.current.value = '';
          sendPost({ title, body });
        }}
      >
        <label htmlFor='title'>
          Post title: <input type='text' name='title' ref={titleRef} />
        </label>

        <label htmlFor='body'>
          Contents:
          <textarea name='body' ref={contentRef} />
        </label>
        <button type='submit' disabled={isLoading}>
          Post!
        </button>
      </form>
      {isSent && <div>The Post was created!</div>}
      {isError && <div>Something went wrong!</div>}
    </AppLayout>
  );
};

const mapStateToProps = (state: StateModel): State => ({
  isSent: state.createPost.isSent,
  isLoading: state.createPost.isLoading,
  isError: state.createPost.isError,
});

const mapDispatchToProps = (
  dispatch: Dispatch
): { sendPost: (post: PostModel) => Promise<void> } => ({
  sendPost: sendPost(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
