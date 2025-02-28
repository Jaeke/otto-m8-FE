import classNames from 'classnames';

import './Logo.scss';

interface LogoProps {
  className?: string;
  bordered?: boolean;
}

const Logo = ({ className, bordered = false }: LogoProps) => {
  return (
    <div
      className={classNames('logo', className, {
        'logo--borderless': !bordered,
      })}
    >
      <img src="/logo/otto-m8-logo.svg" className="logo__image" />
    </div>
  );
};

export default Logo;
