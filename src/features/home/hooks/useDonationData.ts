import { IPaymentButton } from '../types/payments.types';
// Import { REG_EXP_DONATION_NUMBER } from '@/constants/regEx';
// Import { isValideDonateSum } from './isValidDonateSum';
import { useTranslations } from 'next-intl';

export type CURRENCY = 'UAH' | 'EUR' | 'PLN';
export type PAYMENT_SUBSCRIPTION = 'ONE_TIME' | 'SUBSCRIPTION';

export const DEFAULT_CURRENCY: CURRENCY = 'UAH';
export const DEFAULT_TYPE: PAYMENT_SUBSCRIPTION = 'ONE_TIME';
export const DEFAULT_SUM_UAH = '20';
const DEFAULT_SUM_EUR = '5';
const DEFAULT_SUM_PLN = '10';

export const MAX_DONATION_SUM = 10000000;
export const MIN_DONATION_SUM = 1;

export const useDonationData = (
  selectedCurrency: CURRENCY,
  setSelectedCurrency: (currency: CURRENCY) => void,
  setSelectedSum: (sum: string) => void,
  setSelectedType: (type: PAYMENT_SUBSCRIPTION) => void
  // eslint-disable-next-line max-params
) => {
  const translations = useTranslations('homepage.helpNowSection');

  const CURRENCY_VALUES: IPaymentButton[] = [
    {
      variant: 'pay',
      size: 'medium',
      icon: 'uah',
      value: 'UAH',
    },
    {
      variant: 'pay',
      size: 'medium',
      icon: 'eur',
      value: 'EUR',
    },
    {
      variant: 'pay',
      size: 'medium',
      icon: 'zloty',
      value: 'PLN',
    },
  ];

  const DONATE_SUM: IPaymentButton[] = [
    {
      variant: 'pay',
      size: 'medium',
      value:
        selectedCurrency === DEFAULT_CURRENCY
          ? '20'
          : selectedCurrency === 'EUR'
            ? '5'
            : '10',
    },
    {
      variant: 'pay',
      size: 'medium',
      value:
        selectedCurrency === DEFAULT_CURRENCY
          ? '50'
          : selectedCurrency === 'EUR'
            ? '10'
            : '15',
    },
    {
      variant: 'pay',
      size: 'medium',
      value:
        selectedCurrency === DEFAULT_CURRENCY
          ? '100'
          : selectedCurrency === 'EUR'
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
      value: 'ONE_TIME',
    },
    {
      variant: 'pay',
      size: 'medium',
      value: 'SUBSCRIPTION',
    },
  ];
  const handleCurrencyChange = (value: CURRENCY) => {
    setSelectedCurrency(value);
    if (value === 'EUR') {
      setSelectedSum(DEFAULT_SUM_EUR);
    } else if (value === 'PLN') {
      setSelectedSum(DEFAULT_SUM_PLN);
    } else {
      setSelectedSum(DEFAULT_SUM_UAH);
    }
  };

  const handleSumChange = (value: string) => {
    setSelectedSum(value);
    // If (isValideDonateSum(value, REG_EXP_DONATION_NUMBER)) {
    //   SetSelectedSum(value);
    // } else {
    //   // eslint-disable-next-line no-console
    //   Console.error('Invalid donation amount:', value);
  };

  const handlePaymentTypeChange = (value: PAYMENT_SUBSCRIPTION) => {
    setSelectedType(value);
  };

  return {
    CURRENCY_VALUES,
    DONATE_SUM,
    DONATE_TYPE,
    handleCurrencyChange,
    handleSumChange,
    handlePaymentTypeChange,
  };
};
