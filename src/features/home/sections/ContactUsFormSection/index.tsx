'use client';

import ApplicationFeedback from './components/ApplicationFeedback/ApplicationFeedback';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import Modal from '@/components/common/Modal/Modal';
import styles from './ContactUsFormSection.module.scss';
import { useTranslations } from 'next-intl';

const ContactUsFormSection = () => {
  const translations = useTranslations('homepage.applicationSection');
  return (
    <section className={styles.applicationWrapper}>
      <h2 className={styles.applicationTitle}>{translations('title')}</h2>
      <ApplicationForm />
      <Modal modalKey="application_feedback">
        <ApplicationFeedback />
      </Modal>
    </section>
  );
};

export default ContactUsFormSection;
