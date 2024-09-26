import Accordion from './components';
import Image from 'next/image';
import { faqContent } from './locales/constants';
import styles from './QASection.module.scss';

const QASection: React.FC = () => {
  return (
    <div className={styles.containerQA}>
      <Image src="/img/faq-test-img.png" alt="faq" width={486} height={630} />
      <div className={styles.textWrapperQA}>
        <h2 className={styles.headerQA}>FAQ</h2>
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
