'use client';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import LanguageSwithcer from '../LanguageSwitcher/LanguageSwitcher';
import Link from 'next/link';
import styles from './MobileMenu.module.scss';

const MobileMenu: React.FC = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  //   Const handleMobileMenuToggle = () => {
  //     SetIsOpenMobile(!isOpenMobile);
  //   };
  const closeMenu = () => {
    setIsOpenMobile(false);
  };

  return (
    <div className={`${styles.mobileNav} ${isOpenMobile && styles.open}`}>
      <div className={styles.closeIconWrapper}>
        <Image
          alt="close"
          src="/svg/close.svg"
          width={30}
          height={30}
          className={styles.closeIcon}
          onClick={closeMenu}
        />
      </div>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink} onClick={closeMenu}>
            Головна
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projecrs" className={styles.navLink} onClick={closeMenu}>
            Проєкти
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/security" className={styles.navLink} onClick={closeMenu}>
            Безпека
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contacts" className={styles.navLink} onClick={closeMenu}>
            Контакти
          </Link>
        </li>
      </ul>
      {/* Btn MOBILE */}
      <Button
        variant="primary"
        size="small"
        className={styles.supportButtonMobile}
        onClick={closeMenu}
      >
        Підтримати Baza
      </Button>

      {/* Language MOBILE */}
      <LanguageSwithcer />
    </div>
  );
};
export default MobileMenu;
