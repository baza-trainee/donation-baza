import styles from './ApplicationText.module.scss';
import { useTranslations } from 'next-intl';

const ApplicationText = () => {
  const translations = useTranslations('homepage.applicationSection');
  return (
    <div className={styles.applicationTextWrapper}>
      <h2 className={styles.applicationTitle}>{translations('title')}</h2>
      <p className={styles.applicationTextContent}>{translations('text')}</p>
    </div>
  );
};

export default ApplicationText;
