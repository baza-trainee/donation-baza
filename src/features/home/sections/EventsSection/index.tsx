import React from 'react';
import styles from './EventsSection.module.scss';

export default function EventsSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.layout}>
        <div className={`${styles.container}`}>
          <header>
            <h2 className={styles.title}>Івенти</h2>
            <h3 className={styles.subtitle}>
              Підтримайте нас по-своєму: Обирайте свій спосіб донату
            </h3>
          </header>
        </div>
      </div>
    </section>
  );
}
