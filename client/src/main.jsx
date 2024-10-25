import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './components/ui-components/ErrorPage.jsx';
import MainView from './components/mainview/MainView.jsx';
import JobResultsPage from './routes/JobResultsPage.jsx';
import UserSignIn from './routes/UserSignIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainView />,
        children: [
          {
            path: "results",
            element: <JobResultsPage />,
          },
          {
            path: "login",
            element: <UserSignIn />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
