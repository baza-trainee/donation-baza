'use client';

import { useEffect, useRef, useState } from 'react';
import InstructionCard from './components/InstructionCard';
import styles from './InstructionSection.module.scss';
import { useInstructionsData } from './hooks/useInstructionData';
import { useWindowWidth } from '../../hooks/useWindowWidth';

export default function InstructionSection() {
  const { header, instructions } = useInstructionsData();
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const width = useWindowWidth();

  useEffect(() => {
    if (width < 1024) {
      setIsCardsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsCardsVisible(true);
          }, 200);
        }
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [width]);

  return (
    <section className={styles.layout}>
      <h2 ref={headerRef}>{header}</h2>
      <article
        className={`${styles.wrapper} ${isCardsVisible ? styles.show : ''}`}
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
