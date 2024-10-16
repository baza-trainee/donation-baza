import {
  CURRENCY_NAMES,
  DEFAULT_AMOUNTS,
  DEFAULT_CURRENCY,
  DEFAULT_TYPE,
  REGULAR_MODES,
} from '@/constants/payment.constant';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import HelpNowFormFieldset from './HelpNowFormFieldset';
import styles from './HelpNowForm.module.scss';
import { useDonationButtonsData } from '@/features/home/hooks/useDonationButtonsData';
import { useTranslations } from 'next-intl';

const HelpNowForm: React.FC = () => {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
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
