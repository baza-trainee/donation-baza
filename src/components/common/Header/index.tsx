'use client';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import MobileMenu from './MobileMenu/MobileMenu';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.scss';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <header className={styles.header}>
      <Image
        alt="logo"
        src="/svg/logo.svg"
        width={80}
        height={80}
        className={styles.logo}
      />
      <NavBar />
      <div className={styles.supportButtonWrapper}>
        <Button variant="primary" size="small" className={styles.supportButton}>
          Підтримати Baza
        </Button>
      </div>
      <LanguageSwitcher />
      {/*  Стани кнопок треба синхронізувати між основним та той, що у моб меню. коли в нав барі зникає, то треба щоб відображався в моб меню  */}
      {isMobileMenuOpen ? (
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          closeMobileMenu={closeMobileMenu}
        />
      ) : (
        <button
          type="button"
          aria-label="Open menu"
          onClick={openMobileMenu}
          className={styles.burgerMenu}
        >
          <Image alt="burger-menu" src="/svg/menu.svg" width={34} height={24} />
        </button>
      )}
    </header>
  );
};

export default Header;
