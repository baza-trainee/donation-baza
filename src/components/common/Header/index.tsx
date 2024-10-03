'use client';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('UA');
  const languages = ['UA', 'EN', 'PL'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language: string) => {
    if (language !== selectedLanguage) {
      setSelectedLanguage(language);
    }
    setIsOpen(false);
  };

  const remainingLanguages = languages.filter(
    (lang) => lang !== selectedLanguage
  );

  const toggleMobileMenu = () => {
    setIsOpenMobile(!isOpenMobile);
  };
  const closeMenu = () => {
    setIsOpenMobile(false);
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

      {/* Nav */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Головна
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Проєкти
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Безпека
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Контакти
            </a>
          </li>
        </ul>
      </nav>
      {/* Btn */}
      <div className={styles.supportButtonWrapper}>
        <Button variant="primary" size="small" className={styles.supportButton}>
          Підтримати Baza
        </Button>
      </div>
      {/* Language */}
      <div className={styles.languageSwitcher}>
        <button
          className={`${styles.languageButton} ${isOpen ? styles.noUnderline : ''}`}
          onClick={toggleDropdown}
        >
          {selectedLanguage}
          {isOpen ? (
            <Image
              alt="lang-dropdown-icon"
              src="/svg/lang-dropdown-icon.svg"
              width={10}
              height={12}
              className={`${styles.dropdown} ${styles.up}`}
            />
          ) : (
            <Image
              alt="lang-dropdown-icon"
              src="/svg/lang-dropdown-icon.svg"
              width={10}
              height={12}
              className={styles.dropdown}
            />
          )}
        </button>

        {isOpen && (
          <ul className={styles.languageDropdown}>
            {remainingLanguages.map((language) => (
              <li key={language} onClick={() => handleLanguageChange(language)}>
                {language}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* ------------MOBILE----------- */}
      {/* ------------MOBILE----------- */}
      {/* Бургер-меню */}
      <div className={styles.burgerMenu} onClick={toggleMobileMenu}>
        <Image alt="burger-menu" src="/svg/menu.svg" width={34} height={24} />
      </div>

      {/* Мобільне меню */}
      <div className={`${styles.mobileNav} ${isOpenMobile ? styles.open : ''}`}>
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
            <a href="/" className={styles.navLink} onClick={closeMenu}>
              Головна
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink} onClick={closeMenu}>
              Проєкти
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink} onClick={closeMenu}>
              Безпека
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink} onClick={closeMenu}>
              Контакти
            </a>
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
        <div className={styles.languageSwitcherMobile}>
          <button
            className={`${styles.languageButtonMobile} ${isOpen ? styles.noUnderlineMobile : ''}`}
            onClick={toggleDropdown}
            // OnClick={toggleMobileMenu}
          >
            {selectedLanguage}
            {isOpen ? (
              <Image
                alt="lang-dropdown-icon"
                src="/svg/lang-dropdown-icon.svg"
                width={10}
                height={12}
                className={`${styles.dropdownMobile} ${styles.up}`}
              />
            ) : (
              <Image
                alt="lang-dropdown-icon"
                src="/svg/lang-dropdown-icon.svg"
                width={10}
                height={12}
                className={styles.dropdownMobile}
              />
            )}
          </button>

          {isOpen && (
            <ul className={styles.languageDropdownMobile}>
              {remainingLanguages.map((language) => (
                <li
                  key={language}
                  onClick={() => handleLanguageChange(language)}
                >
                  {language}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
