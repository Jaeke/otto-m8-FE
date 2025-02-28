import { Navigate, Outlet } from 'react-router-dom';

import { useUserContext } from '@/context/User/UserProvider';

const PrivateRoute = () => {
  const { isLoggedIn } = useUserContext();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
