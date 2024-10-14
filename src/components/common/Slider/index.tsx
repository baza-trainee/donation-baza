import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Slider.module.scss';

// Const images = [
//   '/path/to/image1.jpg',
//   '/path/to/image2.jpg',
//   '/path/to/image3.jpg',
//   '/path/to/image4.jpg',
// ];
const images = [
  '/img/hero/mainPhoto.png',
  '/img/hero/test1.png',
  '/img/hero/test2.png',
  '/img/hero/hero-test-img.png',
];

const ImageSlider: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`${styles.sliderImage} ${index === currentImage ? styles.active : ''}`}
        />
      ))}
      <div className={styles.indicators}>
        {images.map((comp, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentImage ? styles.activeIndicator : ''}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
