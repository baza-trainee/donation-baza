'use client';

import EventCard from './components/Event/EventCard';
import styles from './EventsSection.module.scss';
import { useEventsData } from './hooks/useEventData';
import { useWindowWidth } from '../../hooks/useWindowWidth';

export default function EventsSection() {
  const { events, title, subtitle, buttonText } = useEventsData();
  const screenWidth = useWindowWidth();

  return (
    <section className={styles.wrapper}>
      <div className={styles.layout}>
        <div className={`${styles.container}`}>
          <header>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.subtitle}>{subtitle}</h3>
          </header>
          <div className={styles.collection}>
            {events.map((event, idx) => (
              <EventCard
                key={idx}
                {...event}
                buttonText={buttonText}
                screenWidth={screenWidth}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
