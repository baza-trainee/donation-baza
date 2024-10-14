import {
  CURRENCY_NAMES,
  DEFAULT_CURRENCY,
  DEFAULT_SUMS,
  DEFAULT_TYPE,
  PAYMENT_SUBSCRIPTIONS,
  useDonationData,
} from '@/features/home/hooks/useDonationData';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { formatCurrencyLabel } from '@/features/home/utils/formatCurrencyLabel';
import { getTranslatedPaymentType } from '@/features/home/utils/getTranslatedPaymentType';
import styles from './HelpNowForm.module.scss';
import { useTranslations } from 'next-intl';

const HelpNowForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  const [selectedCurrency, setSelectedCurrency] =
    useState<CURRENCY_NAMES>(DEFAULT_CURRENCY);
  const [selectedType, setSelectedType] =
    useState<PAYMENT_SUBSCRIPTIONS>(DEFAULT_TYPE);
  const [selectedSum, setSelectedSum] = useState<string>(DEFAULT_SUMS.UAH);
  const translations = useTranslations('homepage.helpNowSection');

  const {
    currencyButtonsData,
    typeButtonsData,
    sumButtonsData,
    handleCurrencyChange,
    handleSumChange,
    handlePaymentTypeChange,
  } = useDonationData({
    selectedCurrency,
    setSelectedCurrency,
    setSelectedSum,
    setSelectedType,
  });
  return (
    <form className={styles.paymentsWrapper} onSubmit={handleSubmit}>
      <fieldset id="currency" name="currency" className={styles.currency}>
        {currencyButtonsData.map((item, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name="currency"
              value={item.value}
              checked={selectedCurrency === item.value}
              className={styles.input}
            />
            <Button
              type="button"
              variant={item.variant}
              value={item.value}
              size={item.size}
              icon={item.icon}
              key={idx}
              onClick={() => handleCurrencyChange(item.value)}
              isActive={selectedCurrency === item.value}
            />
          </label>
        ))}
      </fieldset>
      <fieldset id="type" name="type" className={styles.type}>
        {typeButtonsData.map((item, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name="type"
              value={item.value}
              checked={selectedType === item.value}
              className={styles.input}
            />
            <Button
              type="button"
              variant={item.variant}
              size={item.size}
              key={idx}
              onClick={() => handlePaymentTypeChange(item.value)}
              isActive={selectedType === item.value}
            >
              {getTranslatedPaymentType(item.value)}
            </Button>
          </label>
        ))}
      </fieldset>
      <fieldset id="sum" name="sum" className={styles.sum}>
        {sumButtonsData.map((item, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name="sum"
              value={item.value}
              checked={selectedSum === item.value}
              className={styles.input}
            />
            <Button
              type="button"
              variant={item.variant}
              size={item.size}
              key={idx}
              value={item.value}
              onClick={() => handleSumChange(item.value)}
              isActive={selectedSum === item.value}
            >
              {formatCurrencyLabel(selectedCurrency, item.value)}
            </Button>
          </label>
        ))}
      </fieldset>
      <Button
        variant="secondary"
        size="medium"
        className={styles.button}
        type="submit"
      >
        {translations('donate_btn')}
      </Button>
    </form>
  );
};

export default HelpNowForm;
