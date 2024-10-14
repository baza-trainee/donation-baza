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

const HelpNowSection = () => {
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
      <div className={styles.paymentsWrapper}>
        <div className={styles.currency}>
          {currencyButtonsData.map((item, idx) => (
            <Button
              variant={item.variant}
              value={item.value}
              size={item.size}
              icon={item.icon}
              key={idx}
              onClick={() => handleCurrencyChange(item.value)}
              isActive={selectedCurrency === item.value}
            />
          ))}
        </div>
        <div className={styles.type}>
          {typeButtonsData.map((item, idx) => (
            <Button
              variant={item.variant}
              size={item.size}
              key={idx}
              onClick={() => handlePaymentTypeChange(item.value)}
              isActive={selectedType === item.value}
            >
              {getTranslatedPaymentType(item.value)}
            </Button>
          ))}
        </div>
        <div className={styles.sum}>
          {sumButtonsData.map((item, idx) => (
            <Button
              variant={item.variant}
              size={item.size}
              key={idx}
              value={item.value}
              onClick={() => handleSumChange(item.value)}
              isActive={selectedSum === item.value}
            >
              {formatCurrencyLabel(selectedCurrency, item.value)}
            </Button>
          ))}
        </div>
      </div>
      <Button variant="secondary" size="medium" className={styles.button}>
        {translations('donate_btn')}
      </Button>
    </section>
  );
};

export default HelpNowSection;
