import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SampleNextArrow, SamplePrevArrow } from './CustomArrows/CustomArrows';
import Image from 'next/image';
import React from 'react';
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
  };

  const images = [
    '/img/hero/slide-00.jpg',
    '/img/hero/slide-01.jpg',
    '/img/hero/slide-02.jpg',
  ];

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Image ${index}`}
              width={1920}
              height={1133}
              layout="responsive"
              objectFit="cover"
              className={styles.sliderImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageSlider;
