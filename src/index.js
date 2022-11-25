import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { LoginInputs } from './components/LoginInputs/LoginInputs.js';
import { WaitressSelection } from './components/WaitressSelection/WaitressSelection.js'
import { OrderMenu } from './components/OrderMenu/OrderMenu.js';
import { AdminSelection } from './components/AdminSelection/AdminSelection.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginInputs/>,
  },
  {
    path: "/meseros",
    element: <WaitressSelection/>,
  },
  {
    path: "/meseros/crear-orden",
    element: <OrderMenu/>,
  },{
    path: "/admin",
    element: <AdminSelection/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
