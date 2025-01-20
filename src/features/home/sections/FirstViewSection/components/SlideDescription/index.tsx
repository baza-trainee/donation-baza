import React from 'react';
import styles from './SlideDescription.module.scss';

interface IProps {
  header: string;
  subheader: string;
  textTop: string;
  textBottom: string;
  index: number;
}

const SlideDescription: React.FC<IProps> = ({
  header,
  subheader,
  textTop,
  textBottom,
  index,
}) => {
  const getBackgroundStyle = (idx: number) => {
    switch (idx) {
      case 0:
        return styles.backgroundOne;
      case 1:
        return styles.backgroundTwo;
      case 2:
        return styles.backgroundThree;
      default:
        return '';
    }
  };

  return (
    <div className={`${styles.wrapper} ${getBackgroundStyle(index)}`}>
      <h1 className={styles.header}>{header}</h1>
      <h2 className={styles.subheader}>{subheader}</h2>
      <p className={styles.text}>{textTop}</p>
      <p className={styles.text}>{textBottom}</p>
    </div>
  );
};

export default SlideDescription;
