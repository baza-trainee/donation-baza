import Contacts from './components/contacts/page';
import PictureMap from './components/pictureMap/page';
import React from 'react';
import styles from './ContactsSection.module.scss';

const ContactsSection: React.FC = () => {
  return (
    <section className={styles.layout}>
      <div className={styles.leftColumn}>
        <Contacts />
      </div>
      <div className={styles.rightColumn}>
        <PictureMap />
      </div>
    </section>
  );
};

export default ContactsSection;
