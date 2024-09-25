'use client';

import ApplicationFeedback from './ApplicationForm/ApplicationFeedback/ApplicationFeedback';
import ApplicationForm from './ApplicationForm/ApplicationForm';
import Modal from '@/components/common/Modal/Modal';
import styles from './Application.module.scss';

const Application = () => {
  return (
    <section className={styles.applicationWrapper}>
      <h2 className={styles.applicationTitle}>Подати заявку</h2>
      <ApplicationForm />
      <Modal modalKey="application_feedback">
        <ApplicationFeedback />
      </Modal>
    </section>
  );
};

export default Application;
