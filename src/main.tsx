import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Layout } from './layouts/Layout.tsx';
import { ProductPage } from './pages/Product/Product.tsx';
import axios from 'axios';
import { DOMEN } from './helpers/API.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Menu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/product/:id',
        element: <ProductPage />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          const { data } = await axios.get(`${DOMEN}/products/${params.id}`);
          return data;
        },
      },
    ],
  },
  {
    path: '/auth',
    element: <>Авторизация</>,
    children: [
      {
        path: '/login',
        element: <></>,
      },
      {
        path: '/register',
        element: <></>,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
);
