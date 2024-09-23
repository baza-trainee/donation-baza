import React from 'react';
import styles from './Button.module.scss';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'underline' | 'icon';
  size?: 'small' | 'medium' | 'large';
  icon?: 'uah' | 'zloty' | 'eur' | React.ReactNode;
}

const Button: React.FC<IButton> = ({
  children,
  variant = 'primary',
  size = 'medium',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  icon,
  className,
  ...props
}) => {
  return (
    <button
      className={`${styles.container} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}
    >
      {variant === 'icon' ? (
        <div className={styles.flex}>{children}</div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
