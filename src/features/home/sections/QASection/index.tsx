import Accordion from './components/Accordion';
import Image from 'next/image';
import { faqContent } from './locales/constants';
import styles from './QASection.module.scss';

const QASection: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/faq-test-img.png" alt="faq" width={478} height={592} />
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
