'use client';

import { useEffect, useRef, useState } from 'react';
import InstructionCard from './components/InstructionCard';
import styles from './InstructionSection.module.scss';
import { useInstructionsData } from './hooks/useInstructionData';

export default function InstructionSection() {
  const { header, instructions } = useInstructionsData();
  const [isObserverTriggered, setIsObserverTriggered] = useState(false);
  const sectionRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (isObserverTriggered) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setIsObserverTriggered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isObserverTriggered]);

  return (
    <section ref={sectionRef} className={styles.layout}>
      <h2>{header}</h2>
      <article className={isObserverTriggered ? styles.animate : ''}>
        {instructions.map((instruction, index) => (
          <InstructionCard
            key={index}
            icon={instruction.icon}
            description={instruction.description}
          />
        ))}
      </article>
    </section>
  );
}
