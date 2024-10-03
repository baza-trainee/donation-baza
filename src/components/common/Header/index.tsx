import React from 'react';
import styles from './Header.module.scss';
import { useTranslations } from 'next-intl';

const Header: React.FC = () => {
  const translations = useTranslations('Test');
  return (
    <header className={styles.header}>
      {translations('testTitle')}
      <nav>
        <ul>
          <li>
            <a href="/">header link</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
