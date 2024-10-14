'use client';

import {
  CURRENCY_NAMES,
  DEFAULT_CURRENCY,
  DEFAULT_SUMS,
  DEFAULT_TYPE,
  PAYMENT_SUBSCRIPTIONS,
  useDonationData,
} from '../../hooks/useDonationData';
import Button from '@/components/ui/Button';
import { formatCurrencyLabel } from '../../utils/formatCurrencyLabel';
import { getTranslatedPaymentType } from '../../utils/getTranslatedPaymentType';
import styles from './HelpNowFormSection.module.scss';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const HelpNowSection: React.FC = () => {
  const translations = useTranslations('homepage.helpNowSection');
  const [selectedCurrency, setSelectedCurrency] =
    useState<CURRENCY_NAMES>(DEFAULT_CURRENCY);
  const [selectedType, setSelectedType] =
    useState<PAYMENT_SUBSCRIPTIONS>(DEFAULT_TYPE);
  const [selectedSum, setSelectedSum] = useState<string>(DEFAULT_SUMS.UAH);

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
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>{translations('title')}</h2>
        <h3 className={styles.subtitle}>{translations('subtitle')}</h3>
      </header>
      {/* <form className={styles.paymentsWrapper} onSubmit={handleSubmit}> */}
      <form className={styles.paymentsWrapper}>
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
    </section>
  );
};

export default HelpNowSection;
