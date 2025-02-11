import { ReactNode } from 'react';

import './Layout.scss';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <aside className="layout__sidebar"></aside>
      <main className="layout__content">{children}</main>
      <aside className="layout__sidebar"></aside>
    </div>
  );
};

export default Layout;
