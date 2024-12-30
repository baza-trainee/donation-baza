'use client';
import ImageSlider from '@/features/home/sections/FirstViewSection/components/ImageSlider';
import SlideDescription from './components/SlideDescription';
import styles from './FirstViewSection.module.scss';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const FirstViewSection: React.FC = () => {
  const authors = [
    '© Анастасія Сусло, 2024',
    '© Анастасія Сусло, 2024',
    '© Олена Ільєнко, 2024',
  ];
  const [author, setAuthor] = useState(authors[0]);
  const translation = useTranslations('homepage.firstViewSection');
  const header = translation('header');
  const subheader = translation('subheader');
  const textTop = translation('textTop');
  const textBottom = translation('textBottom');
  return (
    <section className={styles.firstViewSection}>
      <ImageSlider onSlideChange={(idx) => setAuthor(authors[idx])} />
      <SlideDescription {...{ header, subheader, textTop, textBottom }} />
      <div className={styles.photoAutor}>
        <p className={styles.autor}>{author}</p>
      </div>
    </section>
  );
};

export default FirstViewSection;
