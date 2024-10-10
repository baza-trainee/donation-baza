'use client';

import Button from '@/components/ui/Button';
import { IPaymentButton } from '../../types/payments.types';
import { formatCurrencyLabel } from '../../utils/formatCurrencyLabel';
import styles from './HelpNowFormSection.module.scss';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const DEFAULT_CURRENCY = 'uah';
const DEFAULT_TYPE = 'Одноразовий платіж';
const DEFAULT_SUM_UAH = '20';
const DEFAULT_SUM_EUR = '5';
const DEFAULT_SUM_ZLOTY = '10';

const HelpNowSection = () => {
  const translations = useTranslations('homepage.helpNowSection');
  const [selectedCurrency, setSelectedCurrency] = useState(DEFAULT_CURRENCY);
  const [selectedType, setSelectedType] = useState(DEFAULT_TYPE);
  const [selectedSum, setSelectedSum] = useState(DEFAULT_SUM_UAH);

  const CURRENCY_VALUES: IPaymentButton[] = [
    {
      variant: 'pay',
      size: 'medium',
      icon: 'uah',
      value: 'uah',
    },
    {
      variant: 'pay',
      size: 'medium',
      icon: 'eur',
      value: 'eur',
    },
    {
      variant: 'pay',
      size: 'medium',
      icon: 'zloty',
      value: 'zloty',
    },
  ];

  const DONATE_SUM: IPaymentButton[] = [
    {
      variant: 'pay',
      size: 'medium',
      value:
        selectedCurrency === DEFAULT_CURRENCY
          ? '20'
          : selectedCurrency === 'eur'
            ? '5'
            : '10',
    },
    {
      variant: 'pay',
      size: 'medium',
      value:
        selectedCurrency === DEFAULT_CURRENCY
          ? '50'
          : selectedCurrency === 'eur'
            ? '10'
            : '15',
    },
    {
      variant: 'pay',
      size: 'medium',
      value:
        selectedCurrency === DEFAULT_CURRENCY
          ? '100'
          : selectedCurrency === 'eur'
            ? '50'
            : '80',
    },
    {
      variant: 'pay',
      size: 'medium',
      value: translations('custom_sum'),
    },
  ];

  const DONATE_TYPE: IPaymentButton[] = [
    {
      variant: 'pay',
      size: 'medium',
      value: translations('payment_type.monthly'),
    },
    {
      variant: 'pay',
      size: 'medium',
      value: translations('payment_type.single'),
    },
  ];

  const handleCurrencyChange = (value: string) => {
    setSelectedCurrency(value);
    if (value === 'eur') {
      setSelectedSum(DEFAULT_SUM_EUR);
    } else if (value === 'zloty') {
      setSelectedSum(DEFAULT_SUM_ZLOTY);
    } else {
      setSelectedSum(DEFAULT_SUM_UAH);
    }
  };

  const handleSumChange = (value: string) => {
    setSelectedSum(value);
  };

  const handlePaymentTypeChange = (value: string) => {
    setSelectedType(value);
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>{translations('title')}</h2>
        <h3 className={styles.subtitle}>{translations('subtitle')}</h3>
      </header>
      <div className={styles.paymentsWrapper}>
        <div className={styles.currency}>
          {CURRENCY_VALUES.map((item, idx) => (
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
          {DONATE_TYPE.map((item, idx) => (
            <Button
              variant={item.variant}
              size={item.size}
              key={idx}
              onClick={() => handlePaymentTypeChange(item.value)}
              isActive={selectedType === item.value}
            >
              {item.value}
            </Button>
          ))}
        </div>
        <div className={styles.sum}>
          {DONATE_SUM.map((item, idx) => (
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
