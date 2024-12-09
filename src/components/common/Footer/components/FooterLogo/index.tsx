import Image from 'next/image';
import styles from './FooterLogo.module.scss';
import { useTranslations } from 'next-intl';

export const FooterLogo: React.FC = () => {
  const translate = useTranslations('common.footer');
  return (
    <div className={styles.wrapper}>
      <Image
        src="/svg/logo.svg"
        alt={translate('logoAlt')}
        width={100}
        height={100}
      />
    </div>
  );
};
