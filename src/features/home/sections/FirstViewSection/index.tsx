'use client';
import ImageSlider from '@/features/home/sections/FirstViewSection/components/ImageSlider';
import styles from './FirstViewSection.module.scss';
import { useState } from 'react';

const FirstViewSection: React.FC = () => {
  const [author, setAuthor] = useState('© Анастасія Сусло, 2024');
  const authors = [
    '© Анастасія Сусло, 2024',
    '© Анастасія Сусло, 2024',
    '© Олена Ільєнко, 2024',
  ];

  return (
    <section className={styles.firstViewSection}>
      <ImageSlider
        onSlideChange={(index: number) => setAuthor(authors[index])}
      />
      {/* Контент сторінки */}
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Культура благочинності -</h1>
        <h2 className={styles.aboveHeader}>це не про внески і донати.</h2>
        <p className={styles.text}>
          Це історія про спільноту, де кожен почувається сильним або
          підтримуваним, де кожен може захистити або бути захищеним.
        </p>
        <p className={styles.text}>Це історія про українців.</p>
      </div>

      <div className={styles.photoAutor}>
        <p className={styles.autor}>{author}</p>
      </div>
    </section>
  );
};

export default FirstViewSection;
