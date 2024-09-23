import styles from './ErrorMessage.module.scss';

const ErrorMessage = () => {
  return (
    <div className={styles.error_layout}>
      <h2 className={styles.error_title}>Упс! Щось пійшло не так...</h2>
      <p className={styles.error_text}>Спробуйте ще раз трохи пізніше.</p>
    </div>
  );
};

export default ErrorMessage;
