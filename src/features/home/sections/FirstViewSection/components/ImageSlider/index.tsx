import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import styles from './ImageSlider.module.scss';

interface ImageSliderProps {
  onSlideChange: (index: number) => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ onSlideChange }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    Arrows: true,
    beforeChange: (current: number, next: number) => onSlideChange(next),
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
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageSlider;
