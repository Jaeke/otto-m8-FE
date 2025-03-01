import { IconLayoutGrid, IconPlus, IconUpload } from '@tabler/icons-react';

import { Button, Container, Header, Text } from '@/components';

import './WorkflowDashboard.scss';

const WorkflowDashboard = () => {
  return (
    <div className="workflow">
      <div className="workflow__header-section">
        <div className="workflow__headers">
          <div>
            <Header as="h1">Worflow Dashboard</Header>
            <Header as="h1" type="sub">
              Get Started
            </Header>
          </div>
          <Text as="p">
            Get started by selecting a template, or take full control and design
            your own to match your specific workflow needs.
          </Text>
        </div>

        <div className="workflow__actions">
          <Button label="Import" prefixIcon={<IconUpload />} toggled />
          <Button
            label="Create New Workflow"
            prefixIcon={<IconPlus />}
            toggled
          />
        </div>
      </div>

      <div className="workflow__content">
        <Container background="code">
          <Header as="h3">
            <IconLayoutGrid />
            Templates
          </Header>
        </Container>
      </div>
    </div>
  );
};

export default WorkflowDashboard;
