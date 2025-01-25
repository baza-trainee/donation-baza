import styles from './ApplicationFeedback.module.scss';
import { useTranslations } from 'next-intl';

const ApplicationFeedback = () => {
  const translate = useTranslations('common.modal.applicationFeedback');
  return (
    <div className={styles.feedbackLayout}>
      <h2 className={styles.feedbackTitle}>{translate('header')}</h2>
      <p className={styles.feedbackText}>{translate('text')}</p>
    </div>
  );
};

export default ApplicationFeedback;
