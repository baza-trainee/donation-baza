import Button from '@/components/ui/Button';
import { IPaymentButton } from '@/features/home/types/payments.types';
import React from 'react';
import styles from './HelpNowForm.module.scss';

const HelpNowFormFieldset: React.FC<{
  id: string;
  buttonsData: IPaymentButton[];
}> = ({ id, buttonsData }) => {
  const renderButton = (item: IPaymentButton, idx: number) => {
    return item.icon ? (
      <Button key={idx} {...item} />
    ) : (
      <Button key={idx} {...item}>
        {item.label}
      </Button>
    );
  };

  return (
    <fieldset id={id} name={id} className={styles.fieldset}>
      {buttonsData.map((item, idx) => (
        <label key={idx}>
          <input
            type="radio"
            name={id}
            value={item.value}
            defaultChecked={item.isActive}
            className={styles.input}
          />
          {item.isCustomAmountBtn ? (
            <input
              type="text"
              name={id}
              value={item.isActive ? item.value : ''}
              placeholder="Enter amount"
              onChange={item.inputOnChange}
              className={styles.inputText}
            />
          ) : (
            renderButton(item, idx)
          )}
        </label>
      ))}
    </fieldset>
  );
};

export default HelpNowFormFieldset;
