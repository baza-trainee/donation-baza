import React, { useState } from 'react';
import Image from 'next/image';
import styles from './LanguageSwitcher.module.scss';
import { useTranslations } from 'next-intl';

const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  type Language = 'UA' | 'EN' | 'PL';
  const languages: Language[] = ['UA', 'EN', 'PL'];
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('UA');
  const translate = useTranslations('common.languageSwitcher');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language: Language) => {
    if (language !== selectedLanguage) {
      setSelectedLanguage(language);
    }
    setIsOpen(false);
  };

  const remainingLanguages = languages.filter(
    (lang) => lang !== selectedLanguage
  );

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={`${styles.languageButton} ${isOpen && styles.noUnderline}`}
        onClick={toggleDropdown}
        aria-label={translate('dropDownButtonAriaLabel')}
      >
        {selectedLanguage}
        <Image
          alt={
            isOpen
              ? translate('dropDownIconOpenedAlt')
              : translate('dropDownIconClosedAlt')
          }
          src="/svg/lang-dropdown-icon.svg"
          width={10}
          height={12}
          className={`${styles.dropdown} ${isOpen && styles.up}`}
        />
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
  );
};

export default LanguageSwitcher;
