'use client';

import HelpNowForm from './forms/HelpNowForm';
import styles from './HelpNowSection.module.scss';
import { useTranslations } from 'next-intl';

const HelpNowSection: React.FC = () => {
  const translations = useTranslations('homepage.helpNowSection');

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>{translations('title')}</h2>
        <h3 className={styles.subtitle}>{translations('subtitle')}</h3>
      </header>
      <HelpNowForm />
    </section>
  );
};

export default HelpNowSection;
