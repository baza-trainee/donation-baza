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
    <>
      <div className={`${styles.mobileNav} ${isMobileMenuOpen && styles.open}`}>
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

        <Button
          variant="primary"
          size="small"
          className={styles.supportButtonMobile}
          onClick={closeMobileMenu}
        >
          {translation('supportBtn')}
        </Button>

        <LanguageSwitcher />
      </div>
    </>
  );
};
export default MobileMenu;
