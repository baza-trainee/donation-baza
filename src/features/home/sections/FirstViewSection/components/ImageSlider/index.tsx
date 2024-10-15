// Import React, { useEffect, useState } from 'react';
// Import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
// Import 'slick-carousel/slick/slick.css';
// // не знаю чи це потрібно
// Import 'slick-carousel/slick/slick-theme.css';
// І це теж
import styles from './ImageSlider.module.scss';

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: false,
  };

  const images = [
    '/img/hero/mainPhoto.png',
    '/img/hero/test1.png',
    '/img/hero/test2.png',
    '/img/hero/hero-test-img.png',
  ];

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="Image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageSlider;
