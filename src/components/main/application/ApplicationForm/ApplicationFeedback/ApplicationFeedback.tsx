import styles from './ApplicationFeedback.module.scss';

const ApplicationFeedback = () => {
  return (
    <div className={styles.feedbackLayout}>
      <h2 className={styles.feedbackTitle}>Дякуємо за звернення.</h2>
      <p className={styles.feedbackText}>
        Ваша заявка буде розглянута протягом 24 годин.
      </p>
    </div>
  );
};

export default ApplicationFeedback;
