import Button from '@/components/ui/Button';
import Image from 'next/image';
import styles from './SecondViewSection.module.scss';

const SecondViewSection = () => {
  return (
    <section className={styles.container}>
      <Image
        src="/img/support-test-img.png"
        alt="Важливість підтримки"
        width={549}
        height={464}
      />
      <article>
        <header className={styles.header}>Важливість підтримки</header>
        <div className={styles.content}>
          <p>
            Ознака розвиненого суспільства — благодійність приватна, локальна,
            корпоративна або на рівні держави.
          </p>
          <p>
            Постійні найменші внески гуртують спільноту, підтримують вразливі
            категорії, а також контролюють отримувачів допомоги.
          </p>
          <p>
            Прозорість, долученість, контроль — ось три стовпи сучасного
            благодійництва.
          </p>
        </div>
        <Button variant="underline" size="large" className={styles.button}>
          Допомогти Baza
        </Button>
      </article>
    </section>
  );
};

export default SecondViewSection;
