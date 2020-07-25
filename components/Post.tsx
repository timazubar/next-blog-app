import React from 'react';
import Link from 'next/link';
import PostModel from '../models/PostModel';
import { Card } from 'react-bootstrap';

interface Props {
  post: PostModel;
}

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <Card>
      <Card.Body>
        <Card.Link>
          <Link href="/posts/[id]" as={`posts/${id}`}>
            <a>Go to post</a>
          </Link>
        </Card.Link>
        <Card.Title>{title}</Card.Title>
        <Card.Body>{body}</Card.Body>
      </Card.Body>
    </Card>
  );
};

export default Post;
