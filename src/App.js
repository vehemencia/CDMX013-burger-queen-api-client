import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginDisplay } from './views/LoginDisplay/LoginDisplay.js';
import { WaitressSelection } from './views/WaitressSelection/WaitressSelection.js'
import { OrderDisplay } from './views/OrderDisplay/OrderDisplay.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginDisplay/>,
  },
  {
    path: "/meseros",
    element: <WaitressSelection/>,
  },
  {
    path: "/meseros/crear-orden",
    element: <OrderDisplay/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

// export default App;
