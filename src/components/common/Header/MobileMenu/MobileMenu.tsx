'use client';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Link from 'next/link';
import React from 'react';
import styles from './MobileMenu.module.scss';
import useNavLinks from '@/hooks/useNavLinks';
import { useTranslations } from 'next-intl';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  closeMobileMenu,
}) => {
  const translation = useTranslations('common.header');
  const links = useNavLinks();
  return (
    <div className={`${styles.mobileNav} ${isMobileMenuOpen && styles.open}`}>
      <Image
        alt={'logo'}
        src="/svg/logo.svg"
        width={80}
        height={80}
        className={styles.logo}
      />

      <button
        className={styles.closeIconWrapper}
        aria-label={translation('mobileMenu.closeBtnLabel')}
        onClick={closeMobileMenu}
      >
        <Image
          alt={translation('mobileMenu.closeBtnLabel')}
          src="/svg/close.svg"
          width={30}
          height={30}
          className={styles.closeIcon}
        />
      </button>

      <ul className={styles.navList}>
        {links.map((link) => {
          return (
            <li className={styles.navItem} key={link.href}>
              <Link
                href={link.href}
                className={styles.navLink}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className={styles.supportButtonMobileContainer}>
        <Button
          variant="outline"
          size="small"
          className={styles.supportButtonMobile}
          onClick={closeMobileMenu}
        >
          {translation('mobileMenu.supportBtn')}
        </Button>
      </div>
    </div>
  );
};
export default MobileMenu;
