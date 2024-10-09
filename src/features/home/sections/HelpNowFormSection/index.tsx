'use client';

import Button from '@/components/ui/Button';
import { IPayment } from '../../types/payments.types';
import styles from './HelpNowFormSection.module.scss';
import { useState } from 'react';

const DEFAULT_CURRENCY = 'uah';
const DEFAULT_TYPE = 'Одноразовий платіж';
const DEFAULT_SUM_UAH = '20';
const DEFAULT_SUM_EUR = '5';
const DEFAULT_SUM_ZLOTY = '10';

const HelpNowSection = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(DEFAULT_CURRENCY);
  const [selectedType, setSelectedType] = useState(DEFAULT_TYPE);
  const [selectedSum, setSelectedSum] = useState(DEFAULT_SUM_UAH);

  const CURRENCY_VALUES: IPayment[] = [
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

  const DONATE_SUM: IPayment[] = [
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
      value: 'інша сума',
    },
  ];

  const DONATE_TYPE: IPayment[] = [
    {
      variant: 'pay',
      size: 'medium',
      value: 'Щомісячна підписка',
    },
    {
      variant: 'pay',
      size: 'medium',
      value: 'Одноразовий платіж',
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

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  const formatCurrencyLabel = (value: string) => {
    if (value === 'інша сума') return value;
    switch (selectedCurrency) {
      case 'eur':
        return `${value} euro`;
      case 'zloty':
        return `${value} zł`;
      default:
        return `${value} грн`;
    }
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Допоможи сьогодні</h2>
        <h3 className={styles.subtitle}>
          Кожна гривня має значення. Долучайся до добрих справ!
        </h3>
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
              onClick={() => handleTypeChange(item.value)}
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
              {formatCurrencyLabel(item.value)}
            </Button>
          ))}
        </div>
      </div>
      <Button variant="secondary" size="medium" className={styles.button}>
        Задонатити Baza
      </Button>
    </section>
  );
};

export default HelpNowSection;
