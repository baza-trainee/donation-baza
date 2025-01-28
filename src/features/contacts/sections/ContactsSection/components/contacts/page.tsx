import Image from 'next/image';
import React from 'react';
import styles from './Contacts.module.scss';
import { useTranslations } from 'next-intl';

const Contacts = () => {
  const translate = useTranslations('');
  return (
    <div className={styles.contacts}>
      <h2 className={styles.title}>{translate('contactspage.title')}</h2>
      <ul className={styles.list}>
        <li>
          <a href={`tel:+380636286630`}>
            <Image
              src="/svg/phone-icon.svg"
              alt={translate('common.footer.phoneAlt')}
              width={24}
              height={24}
            />
            +380 63 628 66 30
          </a>
        </li>
        <li>
          <a href={`tel:+380675681788`}>
            <Image
              src="/svg/phone-icon.svg"
              alt={translate('common.footer.phoneAlt')}
              width={24}
              height={24}
            />
            +380 67 568 17 88
          </a>
        </li>
        <li>
          <a href={`mailto:info@baza-trainee.tech`}>
            <Image
              src="/svg/new-mail-icon.svg"
              alt={translate('common.footer.emailAlt')}
              width={24}
              height={24}
            />
            info@baza-trainee.tech
          </a>
        </li>
        <li>
          <a href="https://baza-trainee.tech">
            <Image
              className={styles.svgIcon}
              src="/svg/link-icon.svg"
              alt="baza-trainee.tech"
              width={24}
              height={24}
            />
            https://baza-trainee.tech
          </a>
        </li>
        <li>
          <a href="https://baza-trainee.tech">
            <Image
              className={styles.svgIcon}
              src="/svg/location-icon.svg"
              alt="baza-trainee.tech"
              width={24}
              height={24}
            />
            {translate('contactspage.address')}
          </a>
        </li>
      </ul>
      <div className={styles.social}>
        <a
          href="https://www.linkedin.com/company/baza-trainee-ukraine/posts/?feedView=all"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/svg/linkedin-contacts-page.svg"
            alt={translate('common.footer.linkedinAlt')}
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
            src="/svg/fb-contacts-page.svg"
            alt={translate('common.footer.facebookAlt')}
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
            src="/svg/telegram-contacts-page.svg"
            alt={translate('common.footer.telegramAlt')}
            width={48}
            height={48}
          />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
