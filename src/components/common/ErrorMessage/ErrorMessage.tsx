import styles from './ErrorMessage.module.scss';

const ErrorMessage = () => {
  return (
    <div className={styles.errorLayout}>
      <h2 className={styles.errorTitle}>Упс! Щось пішло не так...</h2>
      <p className={styles.errorText}>Спробуйте ще раз трохи пізніше.</p>
    </div>
  );
};

export default ErrorMessage;
