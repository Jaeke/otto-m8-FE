import { ReactNode } from 'react';
import classNames from 'classnames';
import { IconArrowNarrowRight } from '@tabler/icons-react';

import './Button.scss';

interface ButtonProps {
  label: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  toggled?: boolean;
  bordered?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'fill' | 'sm' | 'md' | 'lg';
}

const Button = ({
  label,
  prefixIcon,
  suffixIcon,
  loading = false,
  disabled = false,
  toggled = false,
  bordered = true,
  ariaLabel,
  onClick,
  type = 'button',
  size = 'md',
}: ButtonProps) => {
  const buttonClass = classNames(`button button--${type} button--${size}`, {
    'button--disabled': disabled && !toggled,
    'button--loading': loading,
    'button--bordered': bordered,
    'button--toggled': toggled && !disabled,
    'button--toggled-disabled': toggled && disabled,
    'button--text-only': !prefixIcon && !suffixIcon,
  });

  const getDefaultSuffixIcon = () => {
    if (type === 'submit') return <IconArrowNarrowRight />;
    return null;
  };

  const defaultSuffixIcon = getDefaultSuffixIcon();

  return (
    <button
      className={buttonClass}
      aria-label={ariaLabel ? `button with icon for ${ariaLabel}` : undefined}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading ? (
        <span className="button__loader">
          <span className="button__loader-text">loading</span>
          <span className="button__loader-dot">.</span>
          <span className="button__loader-dot">.</span>
          <span className="button__loader-dot">.</span>
        </span>
      ) : (
        <>
          {prefixIcon && (
            <span className="button__icon button__icon--prefix">
              {prefixIcon}
            </span>
          )}
          <span className="button__label">{label}</span>
          {(suffixIcon || defaultSuffixIcon) && (
            <span className="button__icon button__icon--suffix">
              {suffixIcon || defaultSuffixIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
