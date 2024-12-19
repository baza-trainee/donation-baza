import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SampleNextArrow, SamplePrevArrow } from './CustomArrows/CustomArrows';
import React from 'react';
// Import React, { useEffect } from 'react';
import Slider from 'react-slick';
import styles from './ImageSlider.module.scss';
interface ImageSliderProps {
  onSlideChange: (index: number) => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ onSlideChange }) => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current: number, next: number) => onSlideChange(next),
    // CustomPaging: () => <div style={{ display: 'none' }} />,
  };

  const images = [
    '/img/hero/mainPhoto.png',
    '/img/hero/test2.png',
    '/img/hero/hero-test-img.png',
  ];
  // UseEffect(() => {
  //   Const slickArrows = document.querySelectorAll('.slick-prev::before, .slick-next::before');
  //   SlickArrows.forEach((arrow) => {
  //     (arrow as HTMLElement).style.content = 'none';
  //   });
  // }, []);

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
