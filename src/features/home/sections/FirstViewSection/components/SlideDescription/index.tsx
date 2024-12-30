import React from 'react';
import styles from './SlideDescription.module.scss';

interface IProps {
  header: string;
  subheader: string;
  textTop: string;
  textBottom: string;
}

const SlideDescription: React.FC<IProps> = ({
  header,
  subheader,
  textTop,
  textBottom,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>{header}</h1>
      <h2 className={styles.aboveHeader}>{subheader}</h2>
      <p className={styles.text}>{textTop}</p>
      <p className={styles.text}>{textBottom}</p>
    </div>
  );
};

export default SlideDescription;
