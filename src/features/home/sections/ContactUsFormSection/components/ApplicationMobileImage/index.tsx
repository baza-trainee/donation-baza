import Image from 'next/image';
import PictureMobile from '/public/img/contact-us-form-section-mobile.jpg';
import React from 'react';
import styles from './ApplicationMobileImage.module.scss';

const ApplicationMobileImage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={PictureMobile} alt="contact-us-form-section" quality={90} />
    </div>
  );
};

export default ApplicationMobileImage;
