import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { setupIonicReact } from '@ionic/react';
import '@ionic/react/css/core.css';
import PayrollListing from './routes/PayrollListing';
import PayrollDetail from './routes/PayrollDetail';

setupIonicReact();

const router = createBrowserRouter([
  {
    path: "/",
    element: <PayrollListing/>,
  },
  {
    path: "/detail/:payrollId",
    element: <PayrollDetail/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
