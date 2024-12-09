import Link from 'next/link';
import styles from './FooterNav.module.scss';
import useNavLinks from '@/hooks/useNavLinks';

export const FooterNav: React.FC = () => {
  const links = useNavLinks();
  return (
    <div className={styles.wrapper}>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
