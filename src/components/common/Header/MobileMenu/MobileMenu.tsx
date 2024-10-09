'use client';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Link from 'next/link';
import React from 'react';
import styles from './MobileMenu.module.scss';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  closeMobileMenu,
}) => {
  return (
    <>
      <div className={`${styles.mobileNav} ${isMobileMenuOpen && styles.open}`}>
        <button className={styles.closeIconWrapper} aria-label="Close menu">
          <Image
            alt="close"
            src="/svg/close.svg"
            width={30}
            height={30}
            className={styles.closeIcon}
            onClick={closeMobileMenu}
          />
        </button>

        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink} onClick={closeMobileMenu}>
              Головна
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/projects"
              className={styles.navLink}
              onClick={closeMobileMenu}
            >
              Проєкти
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/safety"
              className={styles.navLink}
              onClick={closeMobileMenu}
            >
              Безпека
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/contacts"
              className={styles.navLink}
              onClick={closeMobileMenu}
            >
              Контакти
            </Link>
          </li>
        </ul>
        <Button
          variant="primary"
          size="small"
          className={styles.supportButtonMobile}
          onClick={closeMobileMenu}
        >
          Підтримати Baza
        </Button>
        <LanguageSwitcher />
      </div>
    </>
  );
};
export default MobileMenu;
