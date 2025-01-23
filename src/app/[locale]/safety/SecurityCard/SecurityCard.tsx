import Image from 'next/image';
import React from 'react';
import styles from './SecurityCard.module.scss';

interface SecurityCardProps {
  icon: string;
  description: string;
}

const SecurityCard: React.FC<SecurityCardProps> = ({ icon, description }) => {
  return (
    <li className={styles.card}>
      <div className={styles.iconContainer}>
        <div className={styles.iconContainerTwo}>
          <Image
            alt={'security icon'}
            src={icon}
            width={80}
            height={80}
            className={styles.icon}
          />
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </li>
  );
};

export default SecurityCard;
