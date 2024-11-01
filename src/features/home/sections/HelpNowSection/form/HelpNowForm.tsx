import {
  CURRENCY_NAMES,
  DEFAULT_AMOUNTS,
  DEFAULT_CURRENCY,
  DEFAULT_TYPE,
  REGULAR_MODES,
  localeCurrencyMap,
} from '@/constants/payment.constant';
import React, { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import HelpNowFormFieldset from './HelpNowFormFieldset';
import { Locale } from '@/types/common.types';
import styles from './HelpNowForm.module.scss';
import { useDonationButtonsData } from '@/features/home/hooks/useDonationButtonsData';
import usePaymentHandler from '@/hooks/usePayment';

const HelpNowForm: React.FC = () => {
  const currentLocale = useLocale() as Locale;
  const [selectedCurrency, setSelectedCurrency] =
    useState<CURRENCY_NAMES>(DEFAULT_CURRENCY);
  const [selectedRegularMode, setSelectedRegularMode] =
    useState<REGULAR_MODES>(DEFAULT_TYPE);
  const [selectedAmount, setSelectedAmount] = useState<string>(
    DEFAULT_AMOUNTS.UAH
  );
  const [customAmount, setCustomAmount] = useState<string>('');

  useEffect(() => {
    const defaultCurrency =
      localeCurrencyMap[currentLocale] || DEFAULT_CURRENCY;
    setSelectedCurrency(defaultCurrency);
    const defaultAmount = DEFAULT_AMOUNTS[defaultCurrency];
    setSelectedAmount(defaultAmount);
  }, [currentLocale]);

  const { currencyButtonsData, typeButtonsData, sumButtonsData } =
    useDonationButtonsData({
      selectedCurrency,
      setSelectedCurrency,
      selectedRegularMode,
      setSelectedRegularMode,
      selectedAmount,
      setSelectedAmount,
      customAmount,
      setCustomAmount,
    });

  const translations = useTranslations('homepage.helpNowSection');

  const { handlePayment } = usePaymentHandler();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log('Payment data being sent:', {
      paymentAmount: selectedAmount,
      currency: selectedCurrency,
      type: selectedRegularMode,
      lang: currentLocale,
    });

    await handlePayment({
      paymentAmount: selectedAmount,
      currency: selectedCurrency,
      type: selectedRegularMode,
      lang: currentLocale,
    });
  };

  return (
    <form className={styles.paymentsWrapper} onSubmit={handleSubmit}>
      <HelpNowFormFieldset id="currency" buttonsData={currencyButtonsData} />
      <HelpNowFormFieldset id="regularMode" buttonsData={typeButtonsData} />
      <HelpNowFormFieldset id="amount" buttonsData={sumButtonsData} />
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
