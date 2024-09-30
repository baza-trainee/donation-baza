'use client';
import React, { useState } from 'react';
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
  return (
    <article className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} width={768} height={800} alt={imageAlt} />
      </div>
      <div className={styles.description}>
        <div className={styles.textContainer}>
          <header>
            <h2>{header}</h2>
          </header>
          <p
            className={`${styles.text} ${isOpened ? styles.opened : styles.closed}`}
          >
            {description}
          </p>
          <Button
            variant="underline"
            size="small"
            type="button"
            onClick={() => setIsOpened((prevState) => !prevState)}
          >
            Читати далі
          </Button>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
