import { ReactNode, useState } from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';

import { useUserContext } from '@/context/User/UserProvider';
import { Sidebar } from '@/components';

import './Layout.scss';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isLoggedIn } = useUserContext();

  const [isExpanded, setIsExpanded] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('sidebarExpanded') || 'true');
  });

  const handleToggleSidebar = () => {
    setIsExpanded((prev) => {
      const newState = !prev;
      // Save state immediately
      localStorage.setItem('sidebarExpanded', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div className="layout">
      <Sidebar
        isExpanded={isExpanded}
        handleToggleSidebar={handleToggleSidebar}
      />
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
