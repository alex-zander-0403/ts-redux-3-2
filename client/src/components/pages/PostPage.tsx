import React from 'react';
import Row from 'react-bootstrap/Row';
import PostForm from '../ui/PostForm';
import PostCard from '../ui/PostCard';
import usePosts from '../../hooks/usePosts';

function PostPage(): JSX.Element {
  const { posts } = usePosts();

  return (
    <>
      <Row className="mb-3">
        <PostForm />
      </Row>
      <Row className="mb-3">
        {posts.map((el) => (
          <PostCard key={el.id} post={el} />
        ))}
      </Row>
    </>
  );
}

export default PostPage;
