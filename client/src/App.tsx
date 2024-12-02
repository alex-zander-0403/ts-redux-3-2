import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import PostPage from './components/pages/PostPage';
import StatPage from './components/pages/StatPage';
import CounterPage from './components/pages/CounterPage';
import SignUpPage from './components/pages/SignUpPage';
import LoginPage from './components/pages/LoginPage';
import { useAppDispatch } from './hooks/hook';
import { checkUserThunk } from './redux/auth/authAsyncThunk';

function App(): JSX.Element {
  //
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(checkUserThunk());
  }, []);

  //
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <PostPage /> },
        { path: '/stat', element: <StatPage /> },
        { path: '/count', element: <CounterPage /> },

        { path: '/auth', element: <SignUpPage /> },
        { path: '/login', element: <LoginPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
