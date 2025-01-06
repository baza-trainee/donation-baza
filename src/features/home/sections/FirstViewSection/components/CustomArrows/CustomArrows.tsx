import type { CustomArrowProps } from 'react-slick';
import React from 'react';
import styles from './CustomArrows.module.scss';

export const SampleNextArrow: React.FC<CustomArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <img
        src="/svg/arrow-right.svg"
        alt="Next"
        style={{
          width: '30px',
          height: '19px',
          objectFit: 'fill',
        }}
      />
    </div>
  );
};

export const SamplePrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <img
        src="/svg/arrow-left.svg"
        alt="Previous"
        style={{
          width: '30px',
          height: '19px',
          objectFit: 'fill',
        }}
      />
    </div>
  );
};
