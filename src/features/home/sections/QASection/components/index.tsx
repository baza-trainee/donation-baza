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
    <div className={styles.containerAccordion}>
      <div className={styles.headerAccordion}>
        <span className={styles.questionNumberAccordion}>{questionNumber}</span>
        <span className={styles.titleAccordion}>{title}</span>
        <AccordionIcon
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          className={
            isAccordionOpen
              ? styles.iconRotateAccordion
              : styles.iconDefaultAccordion
          }
        />
      </div>
      <div
        className={`${styles.childrenAccordion} ${isAccordionOpen ? styles.childrenOpen : styles.childrenClosed}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
