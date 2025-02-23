import { Route, Routes } from 'react-router-dom';

import { WorkflowDashboard } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route index element={<WorkflowDashboard />} />
      <Route path="workflow" element={<WorkflowDashboard />}></Route>
    </Routes>
  );
};

export default Router;
