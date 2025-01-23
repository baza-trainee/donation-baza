'use client';
// Import Image from 'next/image';
import React from 'react';
import SecurityCard from './SecurityCard/SecurityCard';
import styles from './safety.module.scss';

const SecurityPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Як відрізнити шахрая від волонтера:</h2>
        <ul>
          <SecurityCard
            icon="/svg/customer-satisfaction.svg"
            description="Використовує емоційність в описі проблематики"
          />
          <SecurityCard
            icon="/svg/tribune.svg"
            description="Використовує складні технічні чи медичні терміни при описі збору
                в надії, що того ніхто не буде перевіряти"
          />
          <SecurityCard
            icon="/svg/wanted.svg"
            description="Відсутня конкретна звітність на об'явлений збір"
          />
          <SecurityCard
            icon="/svg/notes.svg"
            description="Постійно додається детальна інформація про зміни в процесах"
          />
          <SecurityCard
            icon="/svg/document.svg"
            description="Блокує у відповідь на уточнюючі питання"
          />
          <SecurityCard
            icon="/svg/anonymous-man.svg"
            description="Не відповідає на прямі питання, що вимагають відповіді Так чи Ні"
          />
          <SecurityCard
            icon="/svg/consulting.svg"
            description="Спамить проханнями персонального характеру, не будучи знайомим
                близько"
          />
          <SecurityCard
            icon="/svg/women.svg"
            description="Не погоджується на пропозицію замість грошей надіслати конкретні
                речі"
          />
          <SecurityCard
            icon="/svg/guard.svg"
            description="В якості звітності надає не чеки, а фото заявлених предметів"
          />
          <SecurityCard
            icon="/svg/nophone.svg"
            description="Дуже наполегливий в своїй діяльності, імітує активність до останнього"
          />
        </ul>
      </div>

      <div className={styles.secondWrapper}>
        <p>
          Завжди завчасно перевіряйте волонтерів, з якими плануєте співпрацю!
        </p>
      </div>
    </div>
  );
};
export default SecurityPage;
