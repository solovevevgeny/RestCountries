import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from './pages/NotFoundPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFoundPage />
  },
  {
    path: 'https://solovevevgeny.github.io/restcountries/',
    element: <MainPage />
  },
  {
    path: 'https://solovevevgeny.github.io/restcountries/detail/:country',
    element: <DetailPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>
);
