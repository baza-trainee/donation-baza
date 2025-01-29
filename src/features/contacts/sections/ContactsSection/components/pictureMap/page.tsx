import Image from 'next/image';
import Picture from '/public/img/contacts/map-1680.jpg';
import PictureMobile from '/public/img/contacts/map-420.jpg';
import PictureTablet from '/public/img/contacts/map-768.jpg';
import React from 'react';
import styles from './PictureMap.module.scss';

const PictureMap = () => {
  return (
    <div className={styles.pictureMap}>
      <picture>
        <source
          media="(max-width: 680px)"
          srcSet={PictureMobile.src}
          sizes="(max-width: 680px) 100vw"
        />
        <source
          media="(max-width: 768px)"
          srcSet={PictureTablet.src}
          sizes="(max-width: 768px) 100vw"
        />
        <Image
          src={Picture}
          sizes="100vw"
          alt="Map"
          className={styles.mapImage}
          priority
        />
      </picture>
    </div>
  );
};

export default PictureMap;
