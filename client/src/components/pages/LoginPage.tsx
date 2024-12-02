import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function LoginPage() {
  //
  const { loginHandler } = useAuth();

  //
  return (
    <>
      <Form onSubmit={loginHandler}>
        <Form.Label>email</Form.Label>
        <Form.Control name="email" type="email" placeholder="email" />
        <Form.Label>password</Form.Label>
        <Form.Control name="password" type="password" placeholder="password" />

        <Button type="submit" variant="primary">
          Войти
        </Button>{' '}
        <Button variant="info">
          <Link to={'/'}>Назад</Link>
        </Button>
      </Form>
    </>
  );
}
