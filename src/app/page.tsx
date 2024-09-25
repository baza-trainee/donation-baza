import Application from '@/components/main/application/Application';
import Button from '@/components/ui/Button';
import ErrorMessage from '@/components/common/ErrorMessage/ErrorMessage';
import Modal from '@/components/common/Modal/Modal';
import styles from './Page.module.scss';

export default function Home() {
  return (
    <>
      <Application />
      <p className={styles['text-h1']}>Сила в єдності: твоя допомога важлива</p>
      <p className={styles['text-h2']}>Сила в єдності: твоя допомога важлива</p>
      <p className={styles['text-subtitle']}>
        Сила в єдності: твоя допомога важлива
      </p>
      <p className={styles['text-card-title']}>
        Сила в єдності: твоя допомога важлива
      </p>
      <p className={styles['text-accent']}>
        Сила в єдності: твоя допомога важлива
      </p>
      <p className={styles['text-main']}>
        Сила в єдності: твоя допомога важлива
      </p>
      <p className={styles['text-big-button']}>
        Сила в єдності: твоя допомога важлива
      </p>
      <p className={styles['text-medium-button']}>
        Сила в єдності: твоя допомога важлива
      </p>
      <p className={styles['text-small']}>
        Сила в єдності: твоя допомога важлива
      </p>
      <Modal modalKey="error_message">
        <ErrorMessage />
      </Modal>
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
    </>
  );
}
