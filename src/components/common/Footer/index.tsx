'use client';

import Image from 'next/image';
import Link from 'next/link';
import { documents } from '@/constants/documents';
import styles from './Footer.module.scss';
import useNavLinks from '@/hooks/useNavLinks';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const translate = useTranslations('common');

  const links = useNavLinks();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src="/svg/logo.svg"
            alt={translate('footer.logoAlt')}
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
                  <Link href={doc.url} target="_blank">
                    {translate(`docs.${doc.key}`)}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerContacts}>
            <ul>
              <li>
                <a href={`tel:+380636286630`}>
                  <Image
                    src="/svg/phone-icon.svg"
                    alt={translate('footer.phoneAlt')}
                    width={24}
                    height={24}
                  />
                  +380636286630
                </a>
              </li>
              <li>
                <a
                  href={`tel:+380675681788
електронна пошта`}
                >
                  <Image
                    src="/svg/phone-icon.svg"
                    alt={translate('footer.phoneAlt')}
                    width={24}
                    height={24}
                  />
                  +380675681788
                </a>
              </li>
              <li>
                <a href={`mailto:info@baza-trainee.tech`}>
                  <Image
                    src="/svg/new-mail-icon.svg"
                    alt={translate('footer.emailAlt')}
                    width={24}
                    height={24}
                  />
                  info@baza-trainee.tech
                </a>
              </li>
            </ul>

            <div className={styles.footerSocial}>
              <a
                href="https://www.linkedin.com/company/baza-trainee-ukraine/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/svg/linkedin.svg"
                  alt={translate('footer.linkedinAlt')}
                  width={48}
                  height={48}
                />
              </a>

              <a
                href="https://www.facebook.com/BazaTraineeUkraine"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/svg/facebook.svg"
                  alt={translate('footer.facebookAlt')}
                  width={48}
                  height={48}
                />
              </a>

              <a
                href="https://t.me/+CBXkAJlsCy83ZDYy"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/svg/telegram.svg"
                  alt={translate('footer.telegramAlt')}
                  width={48}
                  height={48}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        <p>{translate('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
