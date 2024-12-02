import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';
import Loader from '../HOCs/Loader';
import { useAppSelector } from '../hooks/hook';

function Layout(): JSX.Element {
  const status = useAppSelector((store) => store.auth.user.status);
  return (
    <>
      <Loader isLoading={status === 'pending'}>
        <NavBar />
        <Container>
          <Outlet />
        </Container>
      </Loader>
    </>
  );
}

export default Layout;
