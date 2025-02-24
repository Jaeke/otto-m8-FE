import { Button, Header, Text } from '@/components';
import './WorkflowDashboard.scss';

const WorkflowDashboard = () => {
  return (
    <div className="workflow">
      <header className="workflow__headers">
        <div>
          <Header as="h1" weight="bold">
            Worflow Dashboard
          </Header>
          <Header as="h1" type="sub">
            Get Started
          </Header>
        </div>
        <Text as="p" variant="muted">
          Get started by selecting a template, or take full control and design
          your own to match your specific workflow needs.
        </Text>
      </header>
      <Button label="Button Example" type="submit" />
    </div>
  );
};

export default WorkflowDashboard;
