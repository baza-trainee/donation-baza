/* eslint-disable id-length */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getContacts } from '@/utils/api/contacts';
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

  const { data: contacts } = useQuery({
    queryKey: [queryKeys.contacts.GET_CONTACTS],
    queryFn: getContacts,
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
                <a href={`tel:${contacts?.phone1}`}>
                  <Image
                    src="/svg/phone-icon.svg"
                    alt="Телефон"
                    width={24}
                    height={24}
                  />
                  {contacts?.phone1}
                </a>
              </li>
              <li>
                <a href={`tel:${contacts?.phone2}`}>
                  <Image
                    src="/svg/phone-icon.svg"
                    alt="Телефон"
                    width={24}
                    height={24}
                  />
                  {contacts?.phone2}
                </a>
              </li>
              <li>
                <a href={`mailto:${contacts?.email}`}>
                  <Image
                    src="/svg/new-mail-icon.svg"
                    alt="email"
                    width={24}
                    height={24}
                  />
                  {contacts?.email}
                </a>
              </li>
            </ul>

            <div className={styles.footerSocial}>
              <a href={contacts?.linkedin} target="_blank" rel="noreferrer">
                <Image
                  src="/svg/linkedin.svg"
                  alt="Linkedin"
                  width={48}
                  height={48}
                />
              </a>

              <a href={contacts?.facebook} target="_blank" rel="noreferrer">
                <Image
                  src="/svg/facebook.svg"
                  alt="Facebook"
                  width={48}
                  height={48}
                />
              </a>

              <a href={contacts?.telegram} target="_blank" rel="noreferrer">
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
