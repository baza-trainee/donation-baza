import Button from '@/components/ui/Button';
import Image from 'next/image';
import styles from './SecondViewSection.module.scss';

const SecondViewSection = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/img/support-test-img.png"
        alt="Важливість підтримки"
        width={549}
        height={464}
      />
      <div className={styles.textWrapper}>
        <h2 className={styles.header}>Важливість підтримки</h2>
        <div className={styles.content}>
          <span>
            Ознака розвиненого суспільства - благодійність приватна, локальна,
            корпоративна або на рівні держави.
          </span>
          <span className={styles.content}>
            Постійні найменші внески гуртують спільноту, підтримують вразливі
            категорії, а також контролюють отримувачів допомоги.
          </span>
          <span className={styles.content}>
            Прозорість, долученість, контроль - ось три стовпи сучасного
            благодійництва.
          </span>
        </div>
        <Button variant="underline" size="large" className={styles.button}>
          Допомогти Baza
        </Button>
      </div>
    </div>
  );
};

export default SecondViewSection;
