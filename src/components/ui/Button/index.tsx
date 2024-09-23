import Image from 'next/image';
import React from 'react';
import styles from './Button.module.scss';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'outline' | 'underline' | 'icon';
  size: 'small' | 'medium' | 'large';
  iconImage?: 'uah' | 'zloty' | 'eur' | React.ReactNode;
}

const Button: React.FC<IButton> = ({
  children,
  variant,
  size,

  iconImage,
  className,
  ...props
}) => {
  const renderedIcon = () => {
    switch (iconImage) {
      case 'uah':
        return (
          <Image
            src={'/svg/hryvnia-icon.svg'}
            width={40}
            height={40}
            alt="uah"
          />
        );
      case 'zloty':
        return <Image src={'/svg/zloty-icon.svg'} alt="zloty" />;
      case 'eur':
        return <Image src={'/svg/euro-icon.svg'} alt="euro" />;
      default:
        return iconImage;
    }
  };
  return (
    <button
      className={`${styles.container} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}
    >
      {variant === 'icon' ? (
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
