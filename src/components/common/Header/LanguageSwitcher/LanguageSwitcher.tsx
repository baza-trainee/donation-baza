'use client';

import React, { useState } from 'react';
import { locales, usePathname, useRouter } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Locale } from '@/types/common.types';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [selectedLocale, setSelectedLocale] = useState<Locale>(currentLocale);
  const translate = useTranslations('common.languageSwitcher');

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSwitchLocale = (locale: Locale) => {
    if (locale !== selectedLocale) {
      setSelectedLocale(locale);
      router.replace(pathname, { locale });
    }
    setIsOpen(false);
  };
  const onLocaleClick = (locale: Locale) => () => handleSwitchLocale(locale);

  const remainingLocales = locales.filter(
    (locale) => locale !== selectedLocale
  );

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={`${styles.languageButton} ${isOpen ? styles.noUnderline : ''}`}
        onClick={toggleDropdown}
        aria-label={translate('dropDownButtonAriaLabel')}
      >
        <span aria-live="polite">{selectedLocale.toUpperCase()}</span>
        <Image
          alt={translate(
            isOpen ? 'dropDownIconOpenedAlt' : 'dropDownIconClosedAlt'
          )}
          src="/svg/lang-dropdown-icon.svg"
          width={10}
          height={12}
          className={`${styles.dropdown} ${isOpen ? styles.up : ''}`}
        />
      </button>

      {isOpen && (
        <ul className={styles.languageDropdown}>
          {remainingLocales.map((locale) => (
            <li key={locale} onClick={onLocaleClick(locale)}>
              {locale.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
