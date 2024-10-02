import Button, { IButton } from '@/components/ui/Button';
import styles from './HelpNowFormSection.module.scss';

const CURRENCY_VALUES: IButton[] = [
  {
    variant: 'pay',
    size: 'medium',
    icon: 'uah',
  },
  {
    variant: 'pay',
    size: 'medium',
    icon: 'eur',
  },
  {
    variant: 'pay',
    size: 'medium',
    icon: 'zloty',
  },
];

const DONATE_SUM: IButton[] = [
  {
    variant: 'pay',
    size: 'medium',
    value: '20 грн',
  },
  {
    variant: 'pay',
    size: 'medium',
    value: '50 грн',
  },
  {
    variant: 'pay',
    size: 'medium',
    value: '100 грн',
  },
  {
    variant: 'pay',
    size: 'medium',
    value: 'інша сума',
  },
];

const DONATE_TYPE: IButton[] = [
  {
    variant: 'pay',
    size: 'medium',
    value: 'Щомісячна підписка',
  },
  {
    variant: 'pay',
    size: 'medium',
    value: 'Одноразовий платіж',
  },
];

const HelpNowSection = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Допоможи сьогодні</h2>
        <h3 className={styles.subtitle}>
          Кожна гривня має значення. Долучайся до добрих справ!
        </h3>
      </header>
      <div className={styles.paymentsWrapper}>
        <div className={styles.currency}>
          {CURRENCY_VALUES.map((item, idx) => (
            <Button
              variant={item.variant}
              size={item.size}
              icon={item.icon}
              key={idx}
            />
          ))}
        </div>
        <div className={styles.type}>
          {DONATE_TYPE.map((item, idx) => (
            <Button variant={item.variant} size={item.size} key={idx}>
              {item.value}
            </Button>
          ))}
        </div>
        <div className={styles.sum}>
          {DONATE_SUM.map((item, idx) => (
            <Button variant={item.variant} size={item.size} key={idx}>
              {item.value}
            </Button>
          ))}
        </div>
      </div>
      <Button variant="secondary" size="medium" className={styles.button}>
        Задонатити Baza
      </Button>
    </section>
  );
};

export default HelpNowSection;
