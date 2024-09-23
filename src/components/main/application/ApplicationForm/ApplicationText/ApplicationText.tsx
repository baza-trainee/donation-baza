import styles from './ApplicationText.module.scss';

const ApplicationText = () => {
  return (
    <div className={styles.application_text}>
      <p className={styles.application_text_text}>
        Якщо у вас є необхідність у зборі коштів, ви можете подати заявку на
        сайті і ми допоможемо влаштувати збір.
      </p>
    </div>
  );
};

export default ApplicationText;
