import { ReactNode, useState } from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';
import {
  IconLogout2,
  IconMoonStars,
  IconSunLowFilled,
} from '@tabler/icons-react';

import { useUserContext } from '@/context/User/UserProvider';
import { useGlobalThemeContext } from '@/context/GlobalTheme/GlobalThemeProvider';

import './Layout.scss';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isLoggedIn, logout } = useUserContext();
  const { theme, setThemeState } = useGlobalThemeContext();

  const [isExpanded, setIsExpanded] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('sidebarExpanded') || 'true');
  });

  const toggleTheme = () => {
    setThemeState({ theme: theme === 'light' ? 'dark' : 'light' });
  };

  const toggleSidebar = () => {
    setIsExpanded((prev) => {
      const newState = !prev;
      // Save state immediately
      localStorage.setItem('sidebarExpanded', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div className="layout">
      <aside
        className={classNames('sidebar', {
          'sidebar--expanded': isExpanded && isLoggedIn,
          'sidebar--collapsed': !isExpanded && isLoggedIn,
          'sidebar--login': !isLoggedIn,
        })}
      >
        <button className="sidebar__toggle" onClick={toggleSidebar}>
          <img
            src="/logo/otto-m8-logo.svg"
            alt="Logo button for toggling sidebar"
            className={classNames('sidebar__logo', {
              'sidebar__logo--rotated': isExpanded,
            })}
          />
        </button>

        <button type="button" className="sidebar__button" onClick={toggleTheme}>
          {theme === 'light' ? <IconSunLowFilled /> : <IconMoonStars />}
        </button>

        <button
          type="button"
          className="sidebar__button"
          onClick={() => logout()}
        >
          <IconLogout2 />
        </button>
      </aside>
      <main
        className={classNames('content', {
          'content--expanded': isExpanded && isLoggedIn,
          'content--collapsed': !isExpanded && isLoggedIn,
          'content--login': !isLoggedIn,
        })}
      >
        <Outlet />
        {children}
      </main>
    </div>
  );
};

export default Layout;
