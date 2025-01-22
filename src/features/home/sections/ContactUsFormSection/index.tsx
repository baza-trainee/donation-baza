'use client';

import ApplicationFeedback from './components/ApplicationFeedback/ApplicationFeedback';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import ApplicationMobileImage from './components/ApplicationMobileImage';
import ApplicationText from './components/ApplicationForm/ApplicationText/ApplicationText';
import Image from 'next/image';
import Modal from '@/components/common/Modal/Modal';
import Picture from '/public/img/contact-us-form-section.jpg';
import styles from './ContactUsFormSection.module.scss';

const ContactUsFormSection = () => {
  return (
    <section className={styles.applicationWrapper}>
      <div className={styles.left}>
        <div className={styles.imageWrapper}>
          <Image src={Picture} alt="contact-us-form-section" quality={90} />
        </div>
      </div>
      <div className={styles.right}>
        <ApplicationText />
        <ApplicationMobileImage />
        <ApplicationForm />
      </div>
      <Modal modalKey="application_feedback">
        <ApplicationFeedback />
      </Modal>
    </section>
  );
};

export default ContactUsFormSection;
