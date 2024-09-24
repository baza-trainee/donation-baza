import styles from './ApplicationText.module.scss';

const ApplicationText = () => {
  return (
    <div className={styles.applicationTextWrapper}>
      <p className={styles.applicationTextContent}>
        Якщо у вас є необхідність у зборі коштів, ви можете подати заявку на
        сайті і ми допоможемо влаштувати збір.
      </p>
    </div>
  );
};

export default ApplicationText;
