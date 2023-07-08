import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from "redux/auth/operations";
import { useAuth } from 'hooks';

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

import Layout from "./Layout";
import Loader from "./Loader/Loader";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const ErrorPage = lazy(() => import('../pages/Error'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return isRefreshing ? (
    <Loader text="Refreshing user..." />
  ) : (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register"
            element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
          <Route path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
          <Route path="/contacts"
            element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;