import { ReactNode } from 'react';
import classNames from 'classnames';

import './Container.scss';

interface ContainerProps {
  padding?: 'none' | 'small' | 'medium' | 'large';
  background?: 'primary' | 'code' | 'block';
  className?: string;
  bordered?: boolean;
  children?: ReactNode;
}

const Container = ({
  padding = 'medium',
  className,
  background = 'primary',
  bordered = true,
  children,
}: ContainerProps) => {
  const containerClass = classNames(
    'container',
    `container--${padding}`,
    `container--${background}`,
    className,
    { 'container--bordered': bordered }
  );

  return <div className={containerClass}>{children}</div>;
};

export default Container;
