import Applications from '@/components/Applications';
import SignUp from '@/components/SignUp';

import styles from './Page.module.scss';
import { validateRequest } from '@/lib/lucia';

export default async function Home() {
  const { user, session } = await validateRequest();

  return (
    <div className="wrapper">
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(session, null, 2)}</pre>
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
      <SignUp />
    </div>
  );
}
