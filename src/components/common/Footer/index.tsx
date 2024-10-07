import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.scss';
import useNavLinks from '@/hooks/useNavLinks';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const { documentsLinks, pagesLinks } = useNavLinks();
  const translate = useTranslations('common.footer');
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src="/svg/logo.svg"
            alt={translate('logoAlt')}
            width={100}
            height={100}
          />
        </div>
        {/* About us */}
        <div className={styles.footerMenu}>
          <ul>
            {pagesLinks.map((page) => (
              <li key={page.href}>
                <Link href={page.href}>{page.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Links Documents */}
        <div className={styles.footerLinks}>
          <ul>
            {documentsLinks.map((doc) => (
              <li key={doc.href}>
                <Link href={doc.href}>{doc.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerContacts}>
            <ul>
              <li>
                <a href="tel:+380636286630">
                  <Image
                    src="/svg/phone-icon.svg"
                    alt={translate('phoneAlt')}
                    width={24}
                    height={24}
                  />
                  +380 63 628 6630
                </a>
              </li>
              <li>
                <a href="tel:+380675681788">
                  <Image
                    src="/svg/phone-icon.svg"
                    alt={translate('phoneAlt')}
                    width={24}
                    height={24}
                  />
                  +380 67 568 1788
                </a>
              </li>
              <li>
                <a href="mailto:info@baza-trainee.tech">
                  <Image
                    src="/svg/new-mail-icon.svg"
                    alt={translate('emailAlt')}
                    width={24}
                    height={24}
                  />
                  info@baza-trainee.tech
                </a>
              </li>
            </ul>

            <div className={styles.footerSocial}>
              <a href="#" target="_blank">
                <Image
                  src="/svg/linkedin.svg"
                  alt={translate('linkedinAlt')}
                  width={48}
                  height={48}
                />
              </a>

              <a href="#" target="_blank">
                <Image
                  src="/svg/facebook.svg"
                  alt={translate('facebookAlt')}
                  width={48}
                  height={48}
                />
              </a>

              <a href="#" target="_blank">
                <Image
                  src="/svg/telegram.svg"
                  alt={translate('telegramAlt')}
                  width={48}
                  height={48}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        <p>{translate('rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
