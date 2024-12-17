'use client';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';
import styles from './TestEvent.module.scss';

const TestEvent: React.FC = () => {
  return (
    <section className={styles.container}>
      <article className={styles.wrapper}>
        <div className={styles.image}>
          <Image
            className={styles.pic}
            src="/img/events/test-ev-1.jpg"
            width={384}
            height={407}
            alt={'image'}
            loading="lazy"
          />
        </div>
        <div className={styles.text}>
          <h2 className={styles.header}>Дрібна здача з обідів</h2>
          <p className={styles.paragraph}>
            Щоп&apos;ятниці у вашій компанії можна збирати дрібну здачу після
            обіду. Ці кошти, навіть у невеликих кількостях, здатні змінити життя
            багатьох людей. Просто зберіть гроші у спеціальну скриньку або
            перекажіть на наш рахунок. Спробуйте практикувати це всією командою
            або відділом. Не забудьте звітувати раз на місяць про результати, і
            ви будете здивовані, наскільки вагомою виявиться ваша допомога. Чим
            більша компанія - тим вразливіший об&apos;єкт допомоги. Оберіть
            притулок для тварин або невеличкий локальний проєкт для підтримки і
            відчуйте їхню подяку.
          </p>

          <div className={styles.btn}>
            <Button
              variant="underline"
              size="small"
              type="button"
              aria-label="Читати далі"
            >
              Читати далі
            </Button>
          </div>
        </div>
      </article>
      {/* 2---------- */}
      <article className={styles.wrapper}>
        <div className={styles.image}>
          <Image
            className={styles.pic}
            src="/img/events/test-ev-2.jpg"
            width={384}
            height={407}
            alt={'image'}
            loading="lazy"
          />
        </div>
        <div className={styles.text}>
          <h2 className={styles.header}>
            Спільний збір під час зустрічей з друзями
          </h2>
          <p className={`${styles.paragraph} ${styles.secondCardParagraph}`}>
            Візьміть за правило здачу від кави чи піци скинути на одну картку чи
            на спільно обраний збір. Навіть кілька гривень з`єднають вашу
            компанію в команду, і зустрічі будуть ще теплішими і важливішими.
            Оберіть проєкт, який близький вам ментально чи професійно.
            Підтримуйте невеличкий пет-проєкт коштами на технічне забезпечення
            або місцеву арт-спільноту. Орієнтуйтесь на проєкти з тривалим
            ефектом, і одного разу ви зможете сказати: я теж з ними!
          </p>

          <div className={styles.btn}>
            <Button
              variant="underline"
              size="small"
              type="button"
              aria-label="Читати далі"
            >
              Читати далі
            </Button>
          </div>
        </div>
      </article>
      {/* 3------------- */}
      <article className={styles.wrapper}>
        <div className={styles.image}>
          <Image
            className={styles.pic}
            src="/img/events/test-ev-3.jpg"
            width={384}
            height={407}
            alt={'image'}
            loading="lazy"
          />
        </div>
        <div className={styles.text}>
          <h2 className={styles.header}>Аукціон в офісі</h2>
          <p className={styles.paragraph}>
            Щоп&apos;ятниці у офісі можна зробити розіграш приємних дрібничок
            або корисних речей: книгу по спеціальності, нову мишку чи набір
            стікерів. Головне - стабільність і користь для отримувача. А через
            місяць подивіться, як маленькі суми перетворились на велику
            допомогу. Оберіть один проєкт чи один напрямок і відсліковуйте його
            прогрес протягом року - від сезону до сезону.
          </p>

          <div className={styles.btn}>
            <Button
              variant="underline"
              size="small"
              type="button"
              aria-label="Читати далі"
            >
              Читати далі
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default TestEvent;
