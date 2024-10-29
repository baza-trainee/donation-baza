import Link from 'next/link';
import { documents } from '@/constants/documents';
import styles from './FooterDocuments.module.scss';
import { useTranslations } from 'next-intl';

export const FooterDocuments: React.FC = () => {
  const translate = useTranslations('common');

  return (
    <div className={styles.wrapper}>
      <ul>
        {documents &&
          documents.map((doc) => (
            <li key={doc.key}>
              <Link href={doc.url} target="_blank">
                {translate(`docs.${doc.key}`)}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
