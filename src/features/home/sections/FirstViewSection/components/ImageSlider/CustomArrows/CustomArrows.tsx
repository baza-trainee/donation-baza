// Import Image from 'next/image';
import type { CustomArrowProps } from 'react-slick';
import React from 'react';
import styles from './CustomArrows.module.scss';

export const SampleNextArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.nextArrow}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img
        src="/svg/arrow-right.svg"
        alt="Next"
        style={{
          width: '30px',
          height: '19px',
        }}
      />
      {/* <Image alt={'next'} src="/svg/arrow-right.svg" width={34} height={24} /> */}
      {/* Не відображається */}
    </div>
  );
};

export const SamplePrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.prevArrow}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img
        src="/svg/arrow-left.svg"
        alt="Previous"
        style={{
          width: '30px',
          height: '19px',
        }}
      />
      {/* <Image alt={'prev'} src="/svg/arrow-left.svg" width={34} height={24} /> */}
    </div>
  );
};
