/* eslint-disable id-length */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getDocuments } from '@/utils/api/documents';
import { queryKeys } from '@/constants/queryKeys';
import styles from './Footer.module.scss';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  const { data: documents } = useQuery({
    queryKey: [queryKeys.documents.GET_DOCUMENTS],
    queryFn: getDocuments,
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image src="/svg/logo.svg" alt="Логотип" width={100} height={100} />
        </div>
        {/* About us */}
        <div className={styles.footerMenu}>
          <ul>
            <li>
              <a href="#">Про нас</a>
            </li>
            <li>
              <a href="#">Проєкти</a>
            </li>
            <li>
              <a href="#">Безпека</a>
            </li>
            <li>
              <a href="#">Контакти</a>
            </li>
          </ul>
        </div>
        {/* Links Documents */}
        <div className={styles.footerLinks}>
          <ul>
            {documents &&
              documents.map((doc, index) => (
                <li key={index}>
                  <Link href={doc.url}>{t(`docs.${doc.key}`)}</Link>
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
                    alt="Телефон"
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
                    alt="Телефон"
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
                    alt="email"
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
                  alt="Linkedin"
                  width={48}
                  height={48}
                />
              </a>

              <a href="#" target="_blank">
                <Image
                  src="/svg/facebook.svg"
                  alt="Facebook"
                  width={48}
                  height={48}
                />
              </a>

              <a href="#" target="_blank">
                <Image
                  src="/svg/telegram.svg"
                  alt="Telegram"
                  width={48}
                  height={48}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        <p> Розробка Baza Trainee Ukraine 2024 © Усі права захищені</p>
      </div>
    </footer>
  );
};

export default Footer;
