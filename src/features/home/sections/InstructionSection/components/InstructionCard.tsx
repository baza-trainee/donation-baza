import { IInstruction } from '@/features/home/types/home.types';
import Image from 'next/image';
import styles from './InstructionCard.module.scss';

const InstructionCard: React.FC<IInstruction> = ({ icon, description }) => {
  return (
    <div className={`${styles.container}  `}>
      <div className={styles.iconWrapper}>
        <div className={styles.iconWrapperSecond}>
          <Image
            src={icon}
            width={0}
            height={0}
            alt={icon}
            className={styles.icon}
          />
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default InstructionCard;
