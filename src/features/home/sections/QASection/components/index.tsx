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
        <div>
          <span className={styles.questionNumber}>{questionNumber}</span>
          <span className={styles.title}>{title}</span>
        </div>
        <div
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          className={isAccordionOpen ? styles.iconRotate : styles.iconDefault}
        >
          <AccordionIcon />
        </div>
      </div>
      {isAccordionOpen && (
        <div className={styles.accordionChildren}>{children}</div>
      )}
    </div>
  );
};

export default Accordion;
