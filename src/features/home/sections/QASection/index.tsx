import Accordion from './components/Accordion';
import Image from 'next/image';
import styles from './QASection.module.scss';
import { useQaData } from './hooks/useQaData';

const QASection: React.FC = () => {
  const { header, imageAlt, imgAuthor, questions } = useQaData();

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image
          src="/img/faq-section.jpg"
          alt={imageAlt}
          width={972}
          height={1230}
          className={styles.img}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <span className={styles.author}>{imgAuthor}</span>
      </div>

      <div className={styles.textWrapper}>
        <h2 className={styles.header}>{header}</h2>
        {questions.map((question, index) => (
          <Accordion
            key={index}
            questionNumber={question.questionNumber}
            title={question.title}
          >
            {question.answer}
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default QASection;
