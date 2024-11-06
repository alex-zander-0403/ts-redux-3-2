import React from 'react';
import Row from 'react-bootstrap/Row';
import PostForm from '../ui/PostForm';
import PostCard from '../ui/PostCard';

function PostPage(): JSX.Element {
  return (
    <>
      <Row classname="mb-3">
        <PostForm />
      </Row>
      <Row classname="mb-3">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Row>
    </>
  );
}

export default PostPage;