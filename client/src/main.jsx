import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { persistor, store } from "./app/store.js";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import ErrorPage from './components/ui-components/ErrorPage.jsx';
import MainView from './components/mainview/MainView.jsx';
import JobResultsPage from './routes/JobResultsPage.jsx';
import UserSignIn from './routes/UserSignIn.jsx';
import UserRegister from './routes/UserRegister.jsx';
import UserHome from './components/ui-components/logged-in-user/UserHome.jsx';
import UserProfile from './components/ui-components/logged-in-user/profile/UserProfile.jsx';
import JobPage from './routes/JobPage.jsx';

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
            path: "jobpage",
            element: <JobPage />,
          },
          {
            path: "login",
            element: <UserSignIn />,
          },
          {
            path: "register",
            element: <UserRegister />,
          },
          {
            path: "userhome",
            element: <UserHome />,
          },
          {
            path: "profile",
            element: <UserProfile />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
);
