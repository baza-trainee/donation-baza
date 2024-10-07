'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getDocuments } from '@/utils/api/documents';
import { queryKeys } from '@/constants/queryKeys';
import styles from './Footer.module.scss';
import useNavLinks from '@/hooks/useNavLinks';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const translateFooter = useTranslations('common.footer');
  const translateDocs = useTranslations('common.docs');

  const { data: documents } = useQuery({
    queryKey: [queryKeys.documents.GET_DOCUMENTS],
    queryFn: getDocuments,
  });

  const links = useNavLinks();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src="/svg/logo.svg"
            alt={translateFooter('logoAlt')}
            width={100}
            height={100}
          />
        </div>
        {/* About us */}
        <div className={styles.footerMenu}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Links Documents */}
        <div className={styles.footerLinks}>
          <ul>
            {documents &&
              documents.map((doc) => (
                <li key={doc.key}>
                  <Link href={doc.url}>{translateDocs(`${doc.key}`)}</Link>
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
                    alt={translateFooter('phoneAlt')}
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
                    alt={translateFooter('phoneAlt')}
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
                    alt={translateFooter('emailAlt')}
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
                  alt={translateFooter('linkedinAlt')}
                  width={48}
                  height={48}
                />
              </a>

              <a href="#" target="_blank">
                <Image
                  src="/svg/facebook.svg"
                  alt={translateFooter('facebookAlt')}
                  width={48}
                  height={48}
                />
              </a>

              <a href="#" target="_blank">
                <Image
                  src="/svg/telegram.svg"
                  alt={translateFooter('telegramAlt')}
                  width={48}
                  height={48}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        <p>{translateFooter('rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
