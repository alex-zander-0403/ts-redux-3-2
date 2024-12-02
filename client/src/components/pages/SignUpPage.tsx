import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function SignUpPage() {
  //
  const { signUpHandler } = useAuth();

  //
  return (
    <>
      <Form onSubmit={signUpHandler}>
        <Form.Label>email</Form.Label>
        <Form.Control name="email" type="email" placeholder="email" />
        <Form.Label>name</Form.Label>
        <Form.Control name="username" type="text" placeholder="name" />
        <Form.Label>password</Form.Label>
        <Form.Control name="password" type="password" placeholder="password" />

        <Button type="submit" variant="primary">
          Зарегистрироваться
        </Button>{' '}
        
        <Button variant="info">
          <Link to={'/'}>Назад</Link>
        </Button>
      </Form>
    </>
  );
}
