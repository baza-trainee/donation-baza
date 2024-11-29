'use client';

import { FooterContacts } from './components/FooterContacts';
import { FooterDocuments } from './components/FooterDocuments';
import { FooterLogo } from './components/FooterLogo';
import { FooterNav } from './components/FooterNav';
import styles from './Footer.module.scss';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const translate = useTranslations('common');

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <FooterLogo />
        <FooterNav />
        <FooterDocuments />

        <div className={styles.footerBottom}>
          <FooterContacts />
        </div>
      </div>

      <div className={styles.footerCopyright}>
        <p>{translate('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
