import Button from '../ui/Button';
import styles from './ButtonsExample.module.scss';

export default function ButtonsExample() {
  return (
    <>
      <div className={styles.buttonGroup}>
        <span>pay button</span>
        <Button variant="pay" size="medium">
          Щомісячна підписка
        </Button>
        <Button variant="pay" size="medium" icon="uah"></Button>
        <Button variant="pay" size="medium" icon="eur"></Button>
        <Button variant="pay" size="medium" icon="zloty"></Button>
      </div>
      <div className={styles.buttonGroup}>
        <span>primary (header) button</span>
        <Button variant="primary" size="small">
          Підтримати Baza
        </Button>
        <Button disabled variant="primary" size="small">
          Підтримати Baza
        </Button>
      </div>
      <div className={styles.buttonGroup}>
        <span>primary (header) button</span>
        <Button variant="primary" size="medium">
          Підтримати Baza
        </Button>
        <Button disabled variant="primary" size="medium">
          Підтримати Baza
        </Button>
      </div>
      <div className={styles.buttonGroup}>
        <span>primary (header) button</span>
        <Button variant="primary" size="large">
          Підтримати Baza
        </Button>
        <Button disabled variant="primary" size="large">
          Підтримати Baza
        </Button>
      </div>
      <div className={styles.buttonGroup}>
        <span>underline button</span>
        <Button variant="underline" size="medium">
          Допомогти Baza
        </Button>
        <Button variant="underline" size="large">
          Допомогти Baza
        </Button>
      </div>
      <div className={styles.buttonGroup}>
        <span>secondary button</span>
        <Button variant="secondary" size="medium">
          Допомогти Baza
        </Button>
      </div>
      <div className={styles.buttonGroup}>
        <span>outline button</span>
        <Button variant="outline" size="medium">
          Підтримати збір
        </Button>
      </div>
      <div className={styles.buttonGroup}>
        <span>404 button</span>
        <Button variant="navigation" size="medium">
          Повернутися на головну
        </Button>
      </div>
    </>
  );
}
