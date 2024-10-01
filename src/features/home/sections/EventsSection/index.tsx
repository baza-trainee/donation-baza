import EventCard, { IEvent } from './components/Event/EventCard';
import React from 'react';
import styles from './EventsSection.module.scss';

export default function EventsSection() {
  const events: IEvent[] = [
    {
      header: 'Дрібна здача з обідів',
      description:
        "Щоп'ятниці у вашій компанії можна збирати дрібну здачу після обіду. Ці кошти, навіть у невеликих кількостях, здатні змінити життя багатьох людей. Просто зберіть гроші у спеціальну скриньку або перекажіть на наш рахунок.",
      imageAlt: 'event illustration',
      imageUrl: '/img/events/events-1.webp',
    },
    {
      header: 'Корпоративні п`ятниці',
      description:
        'У кожній компанії можна збирати дрібну здачу після спільної піцци в п`ятницю чи фруктового четверга. Зазвичай або компанія таким чином підтримує команду, або вскладчину відпочивають колеги. Залишок, округлений до 100-200 грн, перерахований військовим або котячому притулку, дає необхідну підтримку. Якщо так зроблять 50 компаній щотижня - збір буде закрито., а захід отимає додатковий секнс.',
      imageAlt: 'event illustration',
      imageUrl: '/img/events/events-2.webp',
    },
    {
      header: 'Щотижневі лотереї',
      description:
        'Раз на тиждень в кожній компанії можна проводити благочинні лотереї - розігрувати невеличкі лоти від олівця чи яблука до компьютерної миші чи фірмової наліпки. Зібрана сума навіть в десятках гривень, але постійна, може перераховуватись на збір. Оберіть підтверджений збір на нашому сайті, адже всі вони мають автора і звітність.',
      imageAlt: 'лотерея',
      imageUrl: '/img/events/events-3.webp',
    },
  ];
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
          <div className={styles.collection}>
            {events.map((event, idx) => (
              <EventCard key={idx} {...{ ...event }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
