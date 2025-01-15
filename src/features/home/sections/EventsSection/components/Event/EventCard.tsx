'use client';
import React, { useEffect, useRef, useState } from 'react';
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
  const [lineClamp, setLineClamp] = useState(5);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const titleElement = titleRef.current;
      const lineHeight = parseFloat(
        window.getComputedStyle(titleElement).lineHeight
      );
      const titleHeight = titleElement.offsetHeight;
      const numberOfLines = Math.round(titleHeight / lineHeight);

      if (numberOfLines > 1) {
        setLineClamp(4);
      }
    }
  }, [title]);

  const renderOpenedDescription = () => {
    return (
      <>
        <div className={styles.titleWrapper}>
          <button
            className={styles.backBtn}
            type="button"
            onClick={() => setIsOpened((prevState) => !prevState)}
          >
            <ArrowLeftWithoutDash />
          </button>
          <header className={`${styles.title} ${styles.textContainer}`}>
            <h2 ref={titleRef}>{title}</h2>
          </header>
        </div>
        <p className={`${styles.text} ${styles.opened}`}>{description}</p>
      </>
    );
  };

  return (
    <article
      className={`${styles.wrapper} ${isOpened ? styles.wrapperOpened : styles.wrapperClosed}`}
    >
      <div className={`${styles.imageContainer}`}>
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

      <div
        className={`${styles.description} ${isOpened ? styles.descriptionOpened : ''}`}
      >
        <div className={styles.textContainer}>
          {isOpened ? (
            renderOpenedDescription()
          ) : (
            <>
              <header>
                <h2 ref={titleRef}>{title}</h2>
              </header>
              <p
                className={`${styles.text} ${styles.closed}`}
                style={{
                  WebkitLineClamp: lineClamp,
                  lineClamp,
                }}
              >
                {description}
              </p>
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
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default EventCard;
