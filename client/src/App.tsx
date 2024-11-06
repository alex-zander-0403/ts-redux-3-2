import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import PostPage from './components/pages/PostPage';
import StatPage from './components/pages/StatPage';
import CounterPage from './components/pages/CounterPage';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <PostPage /> },
        { path: '/stat', element: <StatPage /> },
        { path: '/count', element: <CounterPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
