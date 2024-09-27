'use client';
import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import styles from './Banner.module.scss';

const Banner: React.FC = () => {
  const banner = 'Військовий збір для 44 бригади!';
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      const speed = 100;
      const duration = textWidth / speed;
      containerRef.current.style.setProperty('--text-width', `${textWidth}px`);
      containerRef.current.style.setProperty('--duration', `${duration}s`);
    }
  }, []);

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

      <div className={styles.collection} ref={containerRef}>
        <div className={styles.text1} ref={textRef}>
          {Array(5)
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
