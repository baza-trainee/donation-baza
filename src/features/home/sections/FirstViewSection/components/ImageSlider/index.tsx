// Import React, { useEffect, useState } from 'react';
// Import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import styles from './ImageSlider.module.scss';

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    // Arrows: true,
  };

  const images = [
    '/img/hero/mainPhoto.png',
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
