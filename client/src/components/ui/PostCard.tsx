import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function PostCard(): JSX.Element {

  return (
    <Col sm={3} md={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://raw.seadn.io/files/95cf74ef9c353c41176d870b7a212b92.svg"
        />
        <Card.Body>
          {/* <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.desc}</Card.Text> */}
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
