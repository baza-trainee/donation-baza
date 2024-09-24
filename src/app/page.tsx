import Application from '@/components/main/application/Application';
import ErrorMessage from '@/components/common/ErrorMessage/ErrorMessage';
import Modal from '@/components/common/Modal/Modal';
import QASection from '@/features/home/sections/QASection';

import styles from './Page.module.scss';

export default function Home() {
  return (
    <>
      <Application />
      <QASection />
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
    </>
  );
}
