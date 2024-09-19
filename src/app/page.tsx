import Link from 'next/link';

import styles from './Page.module.scss';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Link href={'/login'}>login</Link>
        <Link href={'/applications'}>applications</Link>
        <Link href={'/admin'}>admin</Link>
      </div>
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
    </>
  );
}
