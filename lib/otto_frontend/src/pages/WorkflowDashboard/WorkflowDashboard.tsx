import { Button, Header, Text } from '@/components';

import './WorkflowDashboard.scss';

const WorkflowDashboard = () => {
  return (
    <div className="workflow">
      <div className="workflow__header-section">
        <div className="workflow__headers">
          <Header as="h1">Worflow Dashboard</Header>
          <Header as="h1" type="sub">
            Get Started
          </Header>
          <Text as="p" variant="muted">
            Get started by selecting a template, or take full control and design
            your own to match your specific workflow needs.
          </Text>
        </div>

        <div className="workflow__actions"></div>
      </div>
      <Button label="Button Example" type="button" />
    </div>
  );
};

export default WorkflowDashboard;
