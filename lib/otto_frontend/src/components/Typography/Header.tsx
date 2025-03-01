import { ReactNode } from 'react';
import classNames from 'classnames';

import './Typography.scss';

interface HeaderProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  type?: 'main' | 'sub';
  divider?: boolean;
  children: ReactNode;
}

const Header = ({
  as: Tag,
  weight = 'medium',
  type = 'main',
  divider = false,
  children,
}: HeaderProps) => {
  const headerClass = classNames(
    'typography__header',
    `typography__header--${weight}`,
    `typography__header--${type}`,
    {
      'typography__header--divider': divider,
    }
  );

  return <Tag className={headerClass}>{children}</Tag>;
};

export default Header;
