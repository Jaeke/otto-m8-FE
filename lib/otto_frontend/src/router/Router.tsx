import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage, WorkflowDashboard } from '@/pages';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <Routes>
      {/* Public Route: Only accessible if NOT logged in */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Private Route: Only accessible if LOGGED IN */}
      <Route element={<PrivateRoute />}>
        <Route index element={<WorkflowDashboard />} />
        <Route path="/workflow" element={<WorkflowDashboard />} />
      </Route>

      {/* Catch-all route for 404 or unexpected paths */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
