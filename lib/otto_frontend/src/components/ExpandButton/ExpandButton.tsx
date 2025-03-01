import { useState } from 'react';
import { ReactNode } from 'react';
import classNames from 'classnames';
import { Tooltip } from 'antd';

import './ExpandButton.scss';

interface ExpandButtonProps {
  ariaLabel: string;
  icon: ReactNode;
  onClick: () => void;
  isExpanded: boolean;
  label?: string;
  toggled?: boolean;
  className?: string;
  tooltipTitle?: string;
  type?: 'button' | 'submit' | 'reset';
}

const ExpandButton = ({
  ariaLabel,
  icon,
  label,
  onClick,
  isExpanded,
  toggled = false,
  className,
  tooltipTitle,
  type = 'button',
}: ExpandButtonProps) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleButtonClick = () => {
    setTooltipVisible(false); // Hide tooltip when button is clicked
    onClick();
  };

  const buttonClass = classNames(
    'expand-button',
    {
      'expand-button--expand': isExpanded && label,
      'expand-button--toggled': toggled,
    },
    className
  );

  const buttonContent = (
    <button
      className={buttonClass}
      type={type}
      aria-label={ariaLabel}
      onClick={handleButtonClick}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      <span className="expand-button__icon">{icon}</span>
      {isExpanded && label && (
        <span className="expand-button__label">{label}</span>
      )}
    </button>
  );

  return isExpanded ? (
    buttonContent
  ) : (
    <Tooltip title={tooltipTitle} open={tooltipVisible}>
      {buttonContent}
    </Tooltip>
  );
};

export default ExpandButton;
