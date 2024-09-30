'use client';
import React, { useState } from 'react';
import { ArrowLeftWithoutDash } from '@/components/common/icons/ArrowLeftWithoutDash';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import styles from './EventCard.module.scss';

export interface IEvent {
  header: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const EventCard: React.FC<IEvent> = ({
  imageUrl,
  imageAlt,
  header,
  description,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  return isOpened ? (
    <article className={`${styles.wrapper} ${styles.wrapperOpened}`}>
      <div className={`${styles.description} ${styles.descriptionOpened}`}>
        <button
          className={styles.backBtn}
          type="button"
          onClick={() => setIsOpened((prevState) => !prevState)}
        >
          <ArrowLeftWithoutDash />
        </button>
        <div className={styles.textContainer}>
          <p className={`${styles.text} ${styles.opened}`}>{description}</p>
        </div>
      </div>
    </article>
  ) : (
    <article className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} width={768} height={800} alt={imageAlt} />
      </div>
      <div className={styles.description}>
        <div className={styles.textContainer}>
          <header>
            <h2>{header}</h2>
          </header>
          <p className={`${styles.text} ${styles.closed}`}>{description}</p>
          <Button
            variant="underline"
            size="small"
            type="button"
            onClick={() => setIsOpened((prevState) => !prevState)}
            aria-label="Читати далі"
          >
            Читати далі
          </Button>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
