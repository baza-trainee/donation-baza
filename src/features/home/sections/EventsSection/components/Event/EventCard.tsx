'use client';
import React, { useState } from 'react';
import { ArrowLeftWithoutDash } from '@/components/common/icons/ArrowLeftWithoutDash';
import Button from '@/components/ui/Button';
import { IEvent } from '@/features/home/types/home.types';
import Image from 'next/image';
import styles from './EventCard.module.scss';

export interface EventCardProps extends IEvent {
  buttonText: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  image,
  imageAlt,
  buttonText,
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
        <Image
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={90}
          loading="lazy"
          src={image}
          width={768}
          height={800}
          alt={imageAlt}
        />
      </div>
      <div className={styles.description}>
        <div className={styles.textContainer}>
          <header>
            <h2>{title}</h2>
          </header>
          <p className={`${styles.text} ${styles.closed}`}>{description}</p>
          <Button
            variant="underline"
            size="small"
            type="button"
            onClick={() => setIsOpened((prevState) => !prevState)}
            aria-label="Читати далі"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
