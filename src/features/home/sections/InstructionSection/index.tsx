'use client';

import InstructionCard from './components/InstructionCard';
import styles from './InstructionSection.module.scss';
import { useInstructionsData } from './hooks/useInstructionData';
import { useState } from 'react';

export default function InstructionSection() {
  const { header, instructions } = useInstructionsData();
  const [isCardsVisible, setIsCardsVisible] = useState(false);

  const handleOnMouseEnter = () => {
    setTimeout(() => {
      setIsCardsVisible(true);
    }, 100);
  };

  return (
    <section className={styles.layout}>
      <h2>{header}</h2>
      <article
        className={`${styles.wrapper} ${isCardsVisible ? styles.show : ''}`}
        onMouseEnter={handleOnMouseEnter}
      >
        {instructions.map((instruction, index) => (
          <InstructionCard
            key={index}
            icon={instruction.icon}
            description={instruction.description}
            isVisible={isCardsVisible}
          />
        ))}
      </article>
    </section>
  );
}
