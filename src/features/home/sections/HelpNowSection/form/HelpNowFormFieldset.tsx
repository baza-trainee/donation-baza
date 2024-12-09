import Button from '@/components/ui/Button';
import { IPaymentButton } from '@/features/home/types/payments.types';
import React from 'react';
import styles from './HelpNowForm.module.scss';

const HelpNowFormFieldset: React.FC<{
  id: string;
  buttonsData: IPaymentButton[];
  onChange?: (value: string) => void;
}> = ({ id, buttonsData, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <fieldset id={id} name={id} className={styles.fieldset}>
      {buttonsData.map((item, idx) => (
        <label key={idx}>
          <input
            type="radio"
            name={id}
            value={item.value}
            checked={item.isActive}
            onChange={handleChange}
            className={styles.input}
          />
          {item.icon ? (
            <Button key={idx} {...item} />
          ) : (
            <Button key={idx} {...item}>
              {item.label}
            </Button>
          )}
        </label>
      ))}
    </fieldset>
  );
};

export default HelpNowFormFieldset;
