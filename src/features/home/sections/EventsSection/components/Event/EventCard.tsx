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

  const renderOpened = () => {
    return (
      <article className={`${styles.wrapper} ${styles.wrapperOpened}`}>
        <div className={`${styles.description} ${styles.descriptionOpened}`}>
          <div className={styles.textContainer}>
            <div className={styles.titleWrapper}>
              <button
                className={styles.backBtn}
                type="button"
                onClick={() => setIsOpened((prevState) => !prevState)}
              >
                <ArrowLeftWithoutDash />
              </button>
              <header className={`${styles.title} ${styles.textContainer}`}>
                <h2>{title}</h2>
              </header>
            </div>
            <p className={`${styles.text} ${styles.opened}`}>{description}</p>
          </div>
        </div>
      </article>
    );
  };

  const renderClosed = () => {
    return (
      <article className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <Image
            style={{ objectFit: 'cover' }}
            quality={90}
            loading="lazy"
            src={image}
            width={768}
            height={814}
            alt={imageAlt}
          />
        </div>
        <div className={styles.description}>
          <div className={styles.textContainer}>
            <header>
              <h2>{title}</h2>
            </header>
            <p className={`${styles.text} ${styles.closed}`}>{description}</p>
          </div>
          <Button
            variant="underline"
            size="small"
            type="button"
            onClick={() => setIsOpened((prevState) => !prevState)}
            aria-label="Читати далі"
            className={styles.readMoreBtn}
          >
            {buttonText}
          </Button>
        </div>
      </article>
    );
  };

  return isOpened ? renderOpened() : renderClosed();
};

export default EventCard;
