import EventCard from './components/Event/EventCard';
import styles from './EventsSection.module.scss';
import { useEventsData } from './hooks/useEventData';

export default function EventsSection() {
  const { events, title, subtitle, buttonText } = useEventsData();
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
              <EventCard key={idx} {...{ ...event, buttonText }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
