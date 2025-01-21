'use client';
import ImageSlider from '@/features/home/sections/FirstViewSection/components/ImageSlider';
import styles from './FirstViewSection.module.scss';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const FirstViewSection: React.FC = () => {
  const translation = useTranslations('homepage.firstViewSection');

  const authors = [
    translation('imgAuthor-1'),
    translation('imgAuthor-1'),
    translation('imgAuthor-2'),
  ];
  const [author, setAuthor] = useState(authors[0]);

  return (
    <section className={styles.firstViewSection}>
      <ImageSlider onSlideChange={(idx) => setAuthor(authors[idx])} />
      <div className={styles.photoAutor}>
        <p className={styles.autor}>{author}</p>
      </div>
    </section>
  );
};

export default FirstViewSection;
