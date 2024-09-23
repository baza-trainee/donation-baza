import styles from './ApplicationFeedback.module.scss';

const ApplicationFeedback = () => {
  return (
    <div className={styles.feedback_layout}>
      <h2 className={styles.feedback_title}>Дякуємо за звернення.</h2>
      <p className={styles.feedback_text}>
        Ваша заявка буде розглянута протягом 24 годин.
      </p>
    </div>
  );
};

export default ApplicationFeedback;
