'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import { NextPage } from 'next';
import styles from './Page404.module.scss';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Page404: NextPage = () => {
  const translate = useTranslations('common.pageNotFound');
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.description}>{translate('first')}</p>
          <p className={styles.description}>{translate('second')}</p>
        </div>
        <div className={styles.btnGroup}>
          <Button variant="navigation" size="medium" onClick={handleGoBack}>
            {translate('buttonGoBack')}
          </Button>
          <Button variant="navigation" size="medium">
            <Link href="/">{translate('buttonGoHome')}</Link>
          </Button>
        </div>
      </div>
      <Link href="/" className={styles.link}>
        {translate('goHome')}
      </Link>
    </section>
  );
};

export default Page404;
