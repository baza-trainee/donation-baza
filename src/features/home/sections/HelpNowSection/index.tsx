'use client';

import HelpNowForm from './form/HelpNowForm';
import Image from 'next/image';
import styles from './HelpNowSection.module.scss';
import { useTranslations } from 'next-intl';

const HelpNowSection: React.FC = () => {
  const translations = useTranslations('homepage.helpNowSection');

  return (
    <section className={styles.container}>
      <div className={styles.sectionContent}>
        <header className={styles.header}>
          <h2 className={styles.title}>{translations('title-p-1')}</h2>
          <h2> {translations('title-p-2')}</h2>
        </header>
        <HelpNowForm />
      </div>
      <Image
        src="/img/help-now-section.webp"
        loading="lazy"
        quality={90}
        alt=""
        width={486}
        height={562}
      />
    </section>
  );
};

export default HelpNowSection;
