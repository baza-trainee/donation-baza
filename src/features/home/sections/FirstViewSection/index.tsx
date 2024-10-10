'use client';
// Import { useEffect, useState } from 'react';
import styles from './FirstViewSection.module.scss';

const FirstViewSection: React.FC = () => {
  //  Наразі закоментувала, бо не фетчу зображення
  //   Const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  //   UseEffect(() => {
  //     // Запит на бекенд для отримання поточного URL фонової картинки
  //     Const fetchBackgroundImage = async () => {
  //       Const response = await fetch('/api/getBackgroundImage');
  //       Const data = await response.json();
  //       SetBackgroundImage(data.imageUrl);
  //     };

  //     FetchBackgroundImage();
  //   }, []);

  return (
    <section
      className={styles.firstViewSection}
      //  Продовження логіки зверху
      //  <section
      //    ClassName={styles.firstViewSection}
      //    Style={{
      //      BackgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
      //    }}
    >
      {/* Контент сторінки */}
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Культура благочинності -</h1>
        <p className={styles.aboveHeader}>це не про внески і донати.</p>
        <p className={styles.text}>
          Це історія про спільноту, де кожен почувається сильним або
          підтримуваним, де кожен може захистити або бути захищеним.
        </p>
        <p className={styles.text}>Це історія про українців.</p>
      </div>

      <div className={styles.photoAutor}>
        <p className={styles.autor}>© Анастасія Сусло, 2024</p>
      </div>
    </section>
  );
};

export default FirstViewSection;
