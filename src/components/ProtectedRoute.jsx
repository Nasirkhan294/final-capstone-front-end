import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useToken from '../redux/Auth/useToken';

const ProtectedRoute = () => {
  const isTokenSet = useToken();
  return isTokenSet ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
