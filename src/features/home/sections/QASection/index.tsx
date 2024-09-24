import Accordion from './components';
import Image from 'next/image';
import styles from './QASection.module.scss';

const QASection: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/faq-test-img.png" alt="faq" width={478} height={592} />
      <div className={styles.textWrapper}>
        <h2 className={styles.header}>FAQ</h2>
        <Accordion
          questionNumber="(01)"
          title="Які існують типи запитів про допомогу?"
        >
          Персональні - від конкретної людини, локальні - від місцевої
          спільноти, тематичні - про постійну підтримку арт-проєкту, наприклад,
          або державні. Ви можете визначити рівень проєкту, побачивши партнерів
          проєкту.
        </Accordion>
      </div>
    </div>
  );
};

export default QASection;
