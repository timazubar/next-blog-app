import React from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <Card>
      <Card.Body>
        <Card.Link>
          <Link href='/posts/[id]' as={`/posts/${id}`}>Go to post</Link>
        </Card.Link>
        <Card.Title>{title}</Card.Title>
        <Card.Body>{body}</Card.Body>
      </Card.Body>
    </Card>
  );
};

export default Post;
