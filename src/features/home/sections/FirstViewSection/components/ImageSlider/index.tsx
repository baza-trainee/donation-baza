import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SampleNextArrow, SamplePrevArrow } from '../CustomArrows/CustomArrows';
import Image from 'next/image';
import React from 'react';
import SlideDescription from '../SlideDescription';
import Slider from 'react-slick';
import slide00 from '/public/img/hero/slide-00.jpg';
import slide00Small from '/public/img/hero/slide-00-420px.jpg';
import slide01 from '/public/img/hero/slide-01.jpg';
import slide01Small from '/public/img/hero/slide-01-420px.jpg';
import slide02 from '/public/img/hero/slide-02.jpg';
import slide02Small from '/public/img/hero/slide-02-420px.jpg';
import styles from './ImageSlider.module.scss';
import { useTranslations } from 'next-intl';

interface ImageSliderProps {
  onSlideChange: (index: number) => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ onSlideChange }) => {
  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseonhover: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current: number, next: number) => onSlideChange(next),
  };

  const images = [
    { large: slide00, small: slide00Small },
    { large: slide01, small: slide01Small },
    { large: slide02, small: slide02Small },
  ];

  const translation = useTranslations('homepage.firstViewSection');
  const header = translation('header');
  const subheader = translation('subheader');
  const textTop = translation('textTop');
  const textBottom = translation('textBottom');

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <SlideDescription
              {...{ header, subheader, textTop, textBottom, index }}
            />
            <Image
              src={image.large}
              alt={`Image ${index}`}
              placeholder="blur"
              className={styles.image}
            />
            <Image
              src={image.small}
              alt={`Image ${index}`}
              placeholder="blur"
              className={styles.imageSmall}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageSlider;
