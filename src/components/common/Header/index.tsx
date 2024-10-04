'use client';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import LanguageSwithcer from './LanguageSwitcher/LanguageSwitcher';
import MobileMenu from './MobileMenu/MobileMenu';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Image
        alt="logo"
        src="/svg/logo.svg"
        width={80}
        height={80}
        className={styles.logo}
      />
      {/* Nav */}
      <NavBar />
      {/* Btn */}
      <div className={styles.supportButtonWrapper}>
        <Button variant="primary" size="small" className={styles.supportButton}>
          Підтримати Baza
        </Button>
      </div>
      {/* Language */}
      <LanguageSwithcer />
      {/*  Стани кнопок треба синхронізувати між основним та той, що у моб меню. коли в нав барі зникає, то треба щоб відображався в моб меню  */}
      {/* ------------MOBILE----------- */}
      {/* ------------MOBILE----------- */}
      {/* Бургер-меню */}
      <div className={styles.burgerMenu}>
        {/* Клік має відкривати  */}
        <Image alt="burger-menu" src="/svg/menu.svg" width={34} height={24} />
      </div>
      {/* Мобільне меню */}
      <MobileMenu />
    </header>
  );
};

export default Header;
