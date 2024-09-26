import Button from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';
import styles from './Banner.module.scss';

const Banner: React.FC = () => {
  const banner = 'Військовий збір для 44 бригади!';

  return (
    <div className={styles.container}>
      <div className={styles.iconBell}>
        <Image
          src="/svg/alert-bell.svg"
          alt="Alert Bell"
          width={43}
          height={43}
        />
      </div>

      <div className={styles.collection}>
        <div className={styles.text1}>
          {Array(6)
            .fill(null)
            .map((currentValue, index) => (
              <span key={index}>{banner}</span>
            ))}
        </div>
      </div>

      <div>
        <Button
          variant="outline"
          size="medium"
          className={styles.supportButton}
        >
          Підтримати збір
        </Button>
      </div>
    </div>
  );
};

export default Banner;
