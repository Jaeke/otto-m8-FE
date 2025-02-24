/**
 * - `"p"` → **Block-level** paragraph text (default).
 * - `"span"` → **Inline text**, useful for styling parts of a sentence.
 * - `"small"` → **Fine print**, disclaimers, or de-emphasized text.
 */
import { ReactNode } from 'react';
import classNames from 'classnames';

import './Typography.scss';

interface TextProps {
  as: 'p' | 'span' | 'small';
  weight?: 'light' | 'regular' | 'bold';
  variant?: 'default' | 'muted';
  children: ReactNode;
}

const Text = ({
  as: Tag,
  weight = 'regular',
  variant = 'default',
  children,
}: TextProps) => {
  const textClass = classNames(
    'typography__text',
    `typography__text--${variant}`,
    `typography__text--${weight}`
  );

  return <Tag className={textClass}>{children}</Tag>;
};

export default Text;
