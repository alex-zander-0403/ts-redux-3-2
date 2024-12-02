import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { Button } from 'react-bootstrap';
import { logoutThunk } from '../../redux/auth/authAsyncThunk';

function NavBar(): JSX.Element {
  //
  const dispatch = useAppDispatch();
  //
  const user = useAppSelector((store) => store.auth.user);

  //
  return (
    <Navbar className="mb-3" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>

        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            Posts
          </NavLink>
          <NavLink className="nav-link" to="/stat">
            Statistics
          </NavLink>
          <NavLink className="nav-link" to="/count">
            Counter
          </NavLink>
        </Nav>

        <Nav>
          {user.status !== 'logged' && (
            <>
              <NavLink className="nav-link" to="/auth">
                Регистрация
              </NavLink>
              <NavLink className="nav-link" to="/login">
                Войти
              </NavLink>
            </>
          )}

          {user.status === 'logged' && (
            <>
              <NavLink className="nav-link" to="/">
                {user.username}
              </NavLink>
              <Button onClick={() => void dispatch(logoutThunk())}>Выйти</Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
