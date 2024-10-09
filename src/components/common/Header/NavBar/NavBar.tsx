import Link from 'next/link';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Головна
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects" className={styles.navLink}>
            Проєкти
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/security" className={styles.navLink}>
            Безпека
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contacts" className={styles.navLink}>
            Контакти
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
