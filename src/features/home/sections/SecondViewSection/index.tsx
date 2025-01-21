import Button from '@/components/ui/Button';
import Image from 'next/image';
import Picture from '/public/img/support-test-img.png';
import styles from './SecondViewSection.module.scss';
import { useTranslations } from 'next-intl';

const SecondViewSection = () => {
  const translate = useTranslations('homepage.secondViewSection');
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <article className={styles.article}>
          <header className={styles.header}>{translate('header')}</header>
          <div className={styles.text}>
            <p>{translate('firstParagraph')}</p>
            <p>{translate('secondParagraph')}</p>
            <p>{translate('thirdParagraph')} </p>
          </div>
          <Button variant="underline" size="large" className={styles.button}>
            {translate('button')}
          </Button>
        </article>
      </div>
      <div className={styles.right}>
        <div className={styles.pictureСontainer}>
          <h3 className={styles.preheader}>{translate('header')}</h3>
          <Image
            src={Picture}
            alt={translate('header')}
            className={styles.image}
          />
          <p className={styles.author}>{translate('copyright')}</p>
        </div>
      </div>
    </section>
  );
};
export default SecondViewSection;
