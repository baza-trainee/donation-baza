'use client';
import Image from 'next/image';
import React from 'react';
import styles from './Button.module.scss';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'underline'
    | 'pay'
    | 'navigation';
  size: 'small' | 'medium' | 'large';
  icon?: 'uah' | 'pln' | 'eur';
  isActive?: boolean;
}

const Button: React.FC<IButton> = ({
  children,
  variant,
  size,
  icon,
  isActive,
  className,
  ...props
}) => {
  const renderedIcon = () => {
    switch (icon) {
      case 'uah':
        return (
          <Image
            src={'/svg/hryvnia-icon.svg'}
            width={40}
            height={40}
            alt="uah"
          />
        );
      case 'pln':
        return (
          <Image
            src={'/svg/zloty-icon.svg'}
            width={40}
            height={40}
            alt="zloty"
          />
        );
      case 'eur':
        return (
          <Image src={'/svg/euro-icon.svg'} width={40} height={40} alt="euro" />
        );
      default:
        return icon;
    }
  };
  return (
    <button
      className={`${styles.container} ${styles[variant]} ${styles[size]} ${isActive ? styles.active : ''} ${className}`}
      {...props}
    >
      {variant === 'pay' ? (
        <div className={styles.flex}>
          {renderedIcon()}
          {children}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
