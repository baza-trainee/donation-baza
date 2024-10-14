'use client';

import {
  type CURRENCY,
  DEFAULT_CURRENCY,
  DEFAULT_SUM_UAH,
  DEFAULT_TYPE,
  type PAYMENT_SUBSCRIPTION,
  useDonationData,
} from '../../hooks/useDonationData';
import Button from '@/components/ui/Button';
import { formatCurrencyLabel } from '../../utils/formatCurrencyLabel';
import { getTranslatedPaymentType } from '../../utils/getTranslatedPaymentType';
import styles from './HelpNowFormSection.module.scss';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
// Import usePaymentHandler from '@/hooks/usePayment';

const HelpNowSection = () => {
  // Const locale = useLocale();
  // Const { handlePayment } = usePaymentHandler();
  const translations = useTranslations('homepage.helpNowSection');
  const [selectedCurrency, setSelectedCurrency] =
    useState<CURRENCY>(DEFAULT_CURRENCY);
  const [selectedType, setSelectedType] =
    useState<PAYMENT_SUBSCRIPTION>(DEFAULT_TYPE);
  const [selectedSum, setSelectedSum] = useState(DEFAULT_SUM_UAH);

  const {
    CURRENCY_VALUES,
    DONATE_SUM,
    DONATE_TYPE,
    handleCurrencyChange,
    handleSumChange,
    handlePaymentTypeChange,
  } = useDonationData(
    selectedCurrency,
    setSelectedCurrency,
    setSelectedSum,
    setSelectedType
  );

  // Const handleSubmit = async (event: React.FormEvent) => {
  //   Event.preventDefault();

  //   // eslint-disable-next-line no-console
  //   Console.log('Submitting payment:', {
  //     PaymentAmount: selectedSum,
  //     Currency: selectedCurrency,
  //     Type: selectedType,
  //     Lang: locale,
  //   });

  //   Await handlePayment({
  //     PaymentAmount: selectedSum,
  //     Currency: selectedCurrency,
  //     Type: selectedType,
  //     Lang: locale,
  //   });
  // };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>{translations('title')}</h2>
        <h3 className={styles.subtitle}>{translations('subtitle')}</h3>
      </header>
      {/* <form className={styles.paymentsWrapper} onSubmit={handleSubmit}> */}
      <form className={styles.paymentsWrapper}>
        <div className={styles.currency}>
          {CURRENCY_VALUES.map((item, idx) => (
            <Button
              variant={item.variant}
              value={item.value}
              size={item.size}
              icon={item.icon}
              key={idx}
              onClick={() => handleCurrencyChange(item.value as CURRENCY)}
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
              onClick={() =>
                handlePaymentTypeChange(item.value as PAYMENT_SUBSCRIPTION)
              }
              isActive={selectedType === item.value}
            >
              {getTranslatedPaymentType(item.value as PAYMENT_SUBSCRIPTION)}
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
