import Applications from '@/components/Applications';
import Link from 'next/link';

import styles from './Page.module.scss';

export default function Home() {
  return (
    <div className="wrapper">
      <Link href={'/login'}>login</Link>
      <Link href={'/applications'}>applications</Link>
      <Link href={'/admin'}>admin</Link>
      <p className={styles.one}>Сила в єдності: твоя допомога важлива</p>
      <p className={styles.two}>Сила в єдності: твоя допомога важлива</p>
      <p className={styles.three}>Сила в єдності: твоя допомога важлива</p>
      <p className={styles.four}>Сила в єдності: твоя допомога важлива</p>
      <p className={styles.five}>Сила в єдності: твоя допомога важлива</p>
      <p className={styles.six}>Сила в єдності: твоя допомога важлива</p>
      <p className={styles.seven}>Сила в єдності: твоя допомога важлива</p>
      <p className={styles.eight}>Сила в єдності: твоя допомога важлива</p>
      <p className={styles.nine}>Сила в єдності: твоя допомога важлива</p>
      <Applications />
    </div>
  );
}
