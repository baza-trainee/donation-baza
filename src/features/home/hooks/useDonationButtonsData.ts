import {
  CURRENCY_NAMES,
  DEFAULT_AMOUNTS,
  DEFAULT_CURRENCY,
  DEFAULT_TYPE,
  DONATION_AMOUNTS,
  REGULAR_MODES,
} from '@/constants/payment.constant';
import { IPaymentButton } from '../types/payments.types';
import { formatCurrencyLabel } from '@/features/home/utils/formatCurrencyLabel';
import getDonateAmountValue from '@/features/home/utils/getDonateAmountValue';
import { getTranslatedPaymentType } from '@/features/home/utils/getTranslatedPaymentType';
import isCurrencyValue from '../utils/isCurrencyValue';
import isNumPositiveInt from '@/features/home/utils/isNumPositiveInt';
import isPaymentSubscription from '../utils/isPaymentSubscription';
import { useCallback } from 'react';
import { useTranslations } from 'next-intl';

interface useDonationDataProps {
  selectedCurrency: CURRENCY_NAMES;
  setSelectedCurrency: (currency: CURRENCY_NAMES) => void;
  selectedRegularMode: REGULAR_MODES;
  setSelectedRegularMode: (type: REGULAR_MODES) => void;
  selectedAmount: string;
  setSelectedAmount: (sum: string) => void;
}

export const useDonationButtonsData = ({
  selectedCurrency,
  setSelectedCurrency,
  selectedRegularMode,
  setSelectedRegularMode,
  selectedAmount,
  setSelectedAmount,
}: useDonationDataProps) => {
  const translations = useTranslations('homepage.helpNowSection');

  const handleCurrencyChange = useCallback((value: string) => {
    const newCurrency = isCurrencyValue(value) ? value : DEFAULT_CURRENCY;
    setSelectedCurrency(newCurrency);
    setSelectedAmount(DEFAULT_AMOUNTS[newCurrency]);
  }, []);

  const handleSumChange = useCallback((value: string) => {
    if (isNumPositiveInt(value)) {
      setSelectedAmount(value);
    }
  }, []);

  const handlePaymentTypeChange = useCallback((value: string) => {
    const newType = isPaymentSubscription(value) ? value : DEFAULT_TYPE;
    setSelectedRegularMode(newType);
  }, []);

  const createPaymentButton = ({
    value,
    label,
    icon,
    onClick,
    isActive,
  }: Omit<IPaymentButton, 'variant' | 'size'>): IPaymentButton => ({
    value,
    label,
    icon,
    onClick,
    isActive,
    variant: 'pay',
    size: 'medium',
    type: 'button',
  });

  const currencyButtonsData: IPaymentButton[] = Object.values(
    CURRENCY_NAMES
  ).map((currency) =>
    createPaymentButton({
      value: currency,
      label: currency,
      icon: currency.toLowerCase() as IPaymentButton['icon'],
      onClick: () => handleCurrencyChange(currency),
      isActive: selectedCurrency === currency,
    })
  );

  const sumButtonsData: IPaymentButton[] = [
    ...Object.keys(DONATION_AMOUNTS).map((amount) => {
      const sumValue = getDonateAmountValue(
        selectedCurrency,
        amount as keyof typeof DONATION_AMOUNTS
      );
      return createPaymentButton({
        label: formatCurrencyLabel(selectedCurrency, sumValue),
        value: sumValue,
        onClick: () => handleSumChange(sumValue),
        isActive: selectedAmount === sumValue,
      });
    }),
    createPaymentButton({
      label: translations('custom_sum'),
      value: '0',
      onClick: () => handleSumChange('0'),
      isActive: selectedAmount === '0',
    }),
  ];

  const typeButtonsData: IPaymentButton[] = [
    createPaymentButton({
      label: getTranslatedPaymentType(REGULAR_MODES.NONE),
      value: REGULAR_MODES.NONE,
      onClick: () => handlePaymentTypeChange(REGULAR_MODES.NONE),
      isActive: selectedRegularMode === REGULAR_MODES.NONE,
    }),
    createPaymentButton({
      label: getTranslatedPaymentType(REGULAR_MODES.MONTHLY),
      value: REGULAR_MODES.MONTHLY,
      isActive: selectedRegularMode === REGULAR_MODES.MONTHLY,
      onClick: () => handlePaymentTypeChange(REGULAR_MODES.MONTHLY),
    }),
  ];

  return {
    currencyButtonsData,
    sumButtonsData,
    typeButtonsData,
  };
};
