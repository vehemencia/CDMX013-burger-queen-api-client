import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { Routes, Route } from "react-router-dom";
import { LoginInputs } from './components/LoginInputs/LoginInputs.js';
//import { WaitressSelection } from './components/WaitressSelection/WaitressSelection.js'
//import { OrderMenu } from './components/OrderMenu/OrderMenu.js';
//import { AdminSelection } from './components/AdminSelection/AdminSelection.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginInputs/>,
  },
  // {
  //   path: "/meseros",
  //   element: <WaitressSelection/>,
  // },
  // {
  //   path: "/meseros/crear-orden",
  //   element: <OrderMenu/>,
  // },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
