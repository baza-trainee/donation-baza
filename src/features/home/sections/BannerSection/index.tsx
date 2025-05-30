'use client';
import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import styles from './BannerSection.module.scss';
import { useTranslations } from 'next-intl';

const BannerSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const translate = useTranslations('homepage.bannerSection');
  const banner = translate('text');

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      const containerWidth = containerRef.current.clientWidth;
      const speed = 100;
      const duration = (textWidth - containerWidth) / speed;
      containerRef.current.style.setProperty(
        '--text-width',
        `${textWidth - containerWidth}px`
      );
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
        <div className={styles.text} ref={textRef}>
          {Array(15)
            .fill(banner)
            .map((text, index) => (
              <span key={index}>{text}</span>
            ))}
        </div>
      </div>

      <div>
        <Button
          variant="outline"
          size="medium"
          className={styles.supportButton}
        >
          {translate('buttonText')}
        </Button>
      </div>
    </div>
  );
};

export default BannerSection;
