/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from '@/components/ui/Button';
import { IPaymentButton } from '@/features/home/types/payments.types';
import React from 'react';
import styles from './HelpNowForm.module.scss';

const HelpNowFormFieldset: React.FC<{
  id: string;
  buttonsData: IPaymentButton[];
}> = ({ id, buttonsData }) => {
  const renderButton = (item: IPaymentButton, idx: number) => {
    const { isCustomAmountBtn, inputOnChange, ...buttonProps } = item;
    return item.icon ? (
      <Button key={idx} {...buttonProps} />
    ) : (
      <Button key={idx} {...buttonProps}>
        {item.label}
      </Button>
    );
  };

  return (
    <fieldset id={id} name={id} className={styles.fieldset}>
      {buttonsData.map((item, idx) => {
        const { isCustomAmountBtn, inputOnChange, ...buttonProps } = item;
        return (
          <label key={idx}>
            {isCustomAmountBtn ? (
              <Button {...buttonProps}>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[1-9][0-9]*"
                  name={id}
                  value={item.value}
                  placeholder={item.label}
                  onChange={inputOnChange}
                  className={styles.input}
                  minLength={1}
                  maxLength={8}
                />
              </Button>
            ) : (
              <>
                <input
                  type="radio"
                  name={id}
                  value={item.value}
                  defaultChecked={item.isActive}
                  className={styles.input}
                />
                {renderButton(item, idx)}
              </>
            )}
          </label>
        );
      })}
    </fieldset>
  );
};

export default HelpNowFormFieldset;
