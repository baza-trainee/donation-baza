import Accordion from './components';
import Image from 'next/image';
import styles from './QASection.module.scss';

const QASection: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/faq-test-img.png" alt="faq" width={478} height={592} />
      <div className={styles.textWrapper}>
        <h2 className={styles.header}>FAQ</h2>
        <Accordion questionNumber="(01)" title="Питання">
          Lorem ipsum dolor sit amet consectetur. Vulputate consectetur
          habitasse feugiat magna a sit quam odio fermentum. Nec tempus enim
          semper vestibulum viverra tempor velit blandit. Mollis eleifend
          scelerisque elit cursus turpis lorem morbi egestas quis.
        </Accordion>
      </div>
    </div>
  );
};

export default QASection;
