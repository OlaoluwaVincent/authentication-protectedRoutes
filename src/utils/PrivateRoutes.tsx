import { Outlet, Navigate } from 'react-router-dom';
import useAuth from './lib/useAuth';

const PrivateRoutes = () => {
  const user = useAuth();
  return user?.token ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
