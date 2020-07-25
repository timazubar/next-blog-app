import React from 'react';

import Post from './Post';
import PostModel from '../models/PostModel';

interface Props {
  posts: PostModel[];
}

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsList;
