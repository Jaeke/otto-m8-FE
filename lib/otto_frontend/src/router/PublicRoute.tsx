import { Navigate, Outlet } from 'react-router-dom';

import { useUserContext } from '@/context/User/UserProvider';

const PublicRoute = () => {
  const { isLoggedIn } = useUserContext();

  return !isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default PublicRoute;
