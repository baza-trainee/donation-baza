'use client';

import { AccordionIcon } from '@/components/common/icons/AccordionIcon';
import styles from './Accordion.module.scss';
import { useState } from 'react';

interface IAccordion {
  title: string;
  questionNumber: string;
}

const Accordion = ({
  children,
  title,
  questionNumber,
}: React.PropsWithChildren<IAccordion>) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.questionNumber}>{questionNumber}</span>
        <span className={styles.title}>{title}</span>
        <AccordionIcon
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          className={isAccordionOpen ? styles.iconRotate : styles.iconDefault}
        />
      </div>
      <div
        className={`${styles.children} ${isAccordionOpen ? styles.childrenOpen : styles.childrenClosed}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
