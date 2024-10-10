import Link from 'next/link';
import styles from './NavBar.module.scss';
import useNavLinks from '@/hooks/useNavLinks';

const NavBar: React.FC = () => {
  const links = useNavLinks();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {links.map((link) => (
          <li key={link.href} className={styles.navItem}>
            <Link href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
