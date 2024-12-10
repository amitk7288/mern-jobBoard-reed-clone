import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { persistor, store } from "./app/store.js";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import PrivateRoute from './components/PrivateRoute.jsx';
import ErrorPage from './components/ui-components/ErrorPage.jsx';
import MainView from './components/mainview/MainView.jsx';
import JobResultsPage from './routes/JobResultsPage.jsx';
import UserSignIn from './routes/UserSignIn.jsx';
import UserRegister from './routes/UserRegister.jsx';
import UserProfile from './components/ui-components/logged-in-user/profile/UserProfile.jsx';
import JobPage from './routes/JobPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route element={<MainView />}>
        <Route path="/" element={<></>} />
        {/* Public routes */}
        <Route path="login" element={<UserSignIn />} />
        <Route path="register" element={<UserRegister />} />{" "}
        <Route
          path="search"
          element={<JobResultsPage />}
        />
        <Route path="jobs/:jobId" element={<JobPage />} />
        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Route>
    </Route>,
  ),
);


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={router}>
      </RouterProvider>
    </PersistGate>
  </Provider>,
);
