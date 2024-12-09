import {
  CURRENCY_NAMES,
  DEFAULT_AMOUNTS,
  DEFAULT_CURRENCY,
  DEFAULT_TYPE,
  REGULAR_MODES,
} from '@/constants/payment.constant';
import React, { useState } from 'react';
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

  const { currencyButtonsData, typeButtonsData, sumButtonsData } =
    useDonationButtonsData({
      selectedCurrency,
      setSelectedCurrency,
      selectedRegularMode,
      setSelectedRegularMode,
      selectedAmount,
      setSelectedAmount,
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
      type: 'none',
      lang: currentLocale,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <HelpNowFormFieldset
        id="currency"
        buttonsData={currencyButtonsData}
        onChange={(value) => setSelectedCurrency(value as CURRENCY_NAMES)}
      />
      <HelpNowFormFieldset
        id="type"
        buttonsData={typeButtonsData}
        onChange={(value) => setSelectedRegularMode(value as REGULAR_MODES)}
      />
      <HelpNowFormFieldset
        id="sum"
        buttonsData={sumButtonsData}
        onChange={setSelectedAmount}
      />
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
