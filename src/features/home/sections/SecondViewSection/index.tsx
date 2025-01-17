import Button from '@/components/ui/Button';
import Image from 'next/image';
import Picture from '/public/img/support-test-img.png';
import styles from './SecondViewSection.module.scss';

const SecondViewSection = () => {
  return (
    <section className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>Важливість підтримки</header>
        <div className={styles.text}>
          <p>
            Ознака розвиненого суспільства — благодійність приватна, локальна,
            корпоративна або на рівні держави.
          </p>
          <p>
            Прозорість, долученість, контроль — ось три стовпи сучасного
            благодійництва.
          </p>
          <p>
            Постійні найменші внески гуртують спільноту, підтримують вразливі
            категорії, а також контролюють отримувачів допомоги.
          </p>
        </div>
        <Button variant="underline" size="large" className={styles.button}>
          Допомогти Baza
        </Button>
      </article>

      <div className={styles.pictureСontainer}>
        <h3 className={styles.preheader}>Важливість підтримки</h3>
        <Image
          src={Picture}
          alt="Важливість підтримки"
          className={styles.image}
        />
        <p className={styles.author}>©Марина Федоренко, 2024</p>
      </div>
    </section>
  );
};

export default SecondViewSection;
