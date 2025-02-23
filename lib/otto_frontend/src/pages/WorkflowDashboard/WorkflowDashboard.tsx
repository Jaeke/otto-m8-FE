import { Button } from '@/components';
import './WorkflowDashboard.scss';

const WorkflowDashboard = () => {
  return (
    <div className="workflow">
      <header className="workflow__headers">
        <h1 className="workflow__main-header">worflow dashboard</h1>
        <h1 className="workflow__sub-header">Create and edit</h1>
      </header>
      <p>Hello there, this is worflow dashboard!</p>
      <Button label="Button Example" />
    </div>
  );
};

export default WorkflowDashboard;
