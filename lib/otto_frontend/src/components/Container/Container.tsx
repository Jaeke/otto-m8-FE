import { ReactNode } from 'react';
import classNames from 'classnames';

import './Container.scss';

interface ContainerProps {
  padding?: 'none' | 'small' | 'medium' | 'large';
  background?: 'primary' | 'secondary';
  className?: string;
  children?: ReactNode;
}

const Container = ({
  padding = 'medium',
  className,
  background = 'primary',
  children,
}: ContainerProps) => {
  const containerClass = classNames(
    'container',
    `container--${padding}`,
    `container--${background}`,
    className
  );

  return <div className={containerClass}>{children}</div>;
};

export default Container;
