'use client';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import MobileMenu from './MobileMenu/MobileMenu';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.scss';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const translate = useTranslations('common.header');

  return (
    <header className={styles.header}>
      <Image
        alt={`${translate('logoAlt')}`}
        src="/svg/logo.svg"
        width={80}
        height={80}
        className={styles.logo}
      />
      <NavBar />
      <div className={styles.supportButtonWrapper}>
        <Button variant="primary" size="small" className={styles.supportButton}>
          {`${translate('supportBtn')}`}
        </Button>
      </div>
      <LanguageSwitcher />
      {isMobileMenuOpen ? (
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          closeMobileMenu={closeMobileMenu}
        />
      ) : (
        <button
          type="button"
          aria-label={`${translate('openMenuAriaLabel')}`}
          onClick={openMobileMenu}
          className={styles.burgerMenu}
        >
          <Image
            alt={`${translate('burgerMenuAlt')}`}
            src="/svg/menu.svg"
            width={34}
            height={24}
          />
        </button>
      )}
    </header>
  );
};

export default Header;
