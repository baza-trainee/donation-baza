import Accordion from './components/Accordion';
import Image from 'next/image';
import { faqContent } from './locales/constants';
import styles from './QASection.module.scss';

const QASection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image
          src="/img/faq-section.webp"
          alt="faq"
          width={1702}
          height={2560}
          className={styles.img}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <span className={styles.author}>©Анастасія Сусло, 2024</span>
      </div>

      <div className={styles.textWrapper}>
        <h2 className={styles.header}>FAQ</h2>
        {faqContent.map((question, index) => (
          <Accordion
            key={index}
            questionNumber={question.questionNumber}
            title={question.title}
          >
            {question.children}
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default QASection;
