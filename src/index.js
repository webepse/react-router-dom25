import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Marques from './components/Marques';
import Cars from './components/Cars';
import NewCar from './components/NewCar';
import Car from './components/Car';
import Marque from './components/Marque';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/marques",
    element: <Marques />
  },
  {
    path: "/marques/:name",
    element: <Marque />
  },
  {
    path: "/cars",
    element: <Cars />,
    children: [
      {
        path: "/cars/new",
        element: <NewCar />
      },
      {
        path: "/cars/:model",
        element: <Car />
      }
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
