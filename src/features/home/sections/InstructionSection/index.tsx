import InstructionCard from './components/InstructionCard';
import styles from './InstructionSection.module.scss';
import { useInstructionsData } from './hooks/useInstructionData';

export default function InstructionSection() {
  const { header, instructions } = useInstructionsData();
  return (
    <section className={styles.layout}>
      <h2>{header}</h2>
      <article className={styles.wrapper}>
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
