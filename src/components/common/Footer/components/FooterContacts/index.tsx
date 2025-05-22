import Image from 'next/image';
import styles from './FooterContacts.module.scss';
import { useTranslations } from 'next-intl';

export const FooterContacts: React.FC = () => {
  const translate = useTranslations('common');

  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <a href={`tel:+380636286630`}>
            <Image
              src="/svg/phone-icon.svg"
              alt={translate('footer.phoneAlt')}
              width={24}
              height={24}
            />
            +380 63 628 66 30
          </a>
        </li>
        <li>
          <a href={`tel:+380956621073`}>
            <Image
              src="/svg/phone-icon.svg"
              alt={translate('footer.phoneAlt')}
              width={24}
              height={24}
            />
            +380 95 662 10 73
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

      <div className={styles.social}>
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
  );
};
