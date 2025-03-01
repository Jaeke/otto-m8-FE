import classNames from 'classnames';
import {
  IconLayoutSidebarLeftCollapseFilled,
  IconLayoutSidebarLeftExpandFilled,
  IconSunLowFilled,
  IconMoonFilled,
  IconLayoutDashboard,
  IconFileDescription,
  IconPlug,
  IconSettings,
  IconRun,
} from '@tabler/icons-react';

import { useGlobalThemeContext } from '@/context/GlobalTheme/GlobalThemeProvider';
import { useUserContext } from '@/context/User/UserProvider';
import { ExpandButton, Header } from '..';

import './Sidebar.scss';

interface SidebarProps {
  isExpanded: boolean;
  handleToggleSidebar: () => void;
}

const Sidebar = ({ isExpanded, handleToggleSidebar }: SidebarProps) => {
  const { isLoggedIn, logout } = useUserContext();
  const { theme, setThemeState } = useGlobalThemeContext();

  const handleToggleTheme = () => {
    setThemeState({ theme: theme === 'light' ? 'dark' : 'light' });
  };

  return (
    <aside
      className={classNames('sidebar', {
        'sidebar--expanded': isExpanded && isLoggedIn,
        'sidebar--collapsed': !isExpanded && isLoggedIn,
        'sidebar--login': !isLoggedIn,
      })}
    >
      <div
        className={classNames('sidebar__actions', {
          'sidebar__actions--expanded': isExpanded && isLoggedIn,
          'sidebar__actions--collapsed': !isExpanded && isLoggedIn,
        })}
      >
        <ExpandButton
          ariaLabel="Toggle sidebar button"
          icon={
            isExpanded ? (
              <IconLayoutSidebarLeftCollapseFilled />
            ) : (
              <IconLayoutSidebarLeftExpandFilled />
            )
          }
          isExpanded={false}
          onClick={handleToggleSidebar}
          tooltipTitle={`${isExpanded ? 'Minimize' : 'Expand'} Sidebar`}
        />

        <ExpandButton
          ariaLabel="Toggle theme button"
          className={classNames(`sidebar__theme-toggle--${theme}`)}
          icon={theme === 'light' ? <IconSunLowFilled /> : <IconMoonFilled />}
          onClick={handleToggleTheme}
          isExpanded={false}
          tooltipTitle={`Switch to ${theme === 'light' ? 'Dark' : 'Light'}`}
        />
      </div>
      <div className="sidebar__navigations">
        {isExpanded && (
          <div className="sidebar__navigations-header">
            <Header as="h5" weight="regular" type="sub">
              Navigation
            </Header>
          </div>
        )}
        <div className="sidebar__navigations-list">
          <ExpandButton
            ariaLabel="Navigate to workflows"
            icon={<IconLayoutDashboard />}
            label="Workflows"
            tooltipTitle="Navigate to workflow dashboard"
            onClick={() => console.log('click')}
            isExpanded={isExpanded}
          />
          <ExpandButton
            ariaLabel="Navigate to Documents"
            icon={<IconFileDescription />}
            label="Document"
            tooltipTitle="Navigate to document"
            onClick={() => console.log('click')}
            isExpanded={isExpanded}
          />
          <ExpandButton
            ariaLabel="Navigate to Lamda Configuration"
            icon={<IconPlug />}
            label="Lamda"
            tooltipTitle="Navigate to lamda configuration"
            onClick={() => console.log('click')}
            isExpanded={isExpanded}
          />
          <ExpandButton
            ariaLabel="Navigate to settings"
            icon={<IconSettings />}
            label="Settings"
            tooltipTitle="Navigate to settings"
            onClick={() => console.log('click')}
            isExpanded={isExpanded}
          />
        </div>
      </div>
      <div className="sidebar__footer">
        <ExpandButton
          ariaLabel="Sign out button"
          icon={<IconRun />}
          label="Sign Out"
          tooltipTitle="Sign Out"
          onClick={() => logout()}
          toggled={true}
          isExpanded={isExpanded}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
