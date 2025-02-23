import { ReactNode, useState } from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';

import './Layout.scss';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('sidebarExpanded') || 'false');
  });

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
          'sidebar--expanded': isExpanded,
          'sidebar--collapsed': !isExpanded,
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
        {/* Sidebar Content Here */}
      </aside>
      <main
        className={classNames('content', {
          'content--expanded': isExpanded,
          'content--collapsed': !isExpanded,
        })}
      >
        <Outlet />
        {children}
      </main>
    </div>
  );
};

export default Layout;
