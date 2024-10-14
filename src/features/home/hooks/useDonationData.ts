import { IPaymentButton } from '../types/payments.types';
import isCurrencyValue from '../utils/isCurrencyValue';
import isNumPositiveInt from '../utils/isNumPositiveInt';
import isPaymentSubscription from '../utils/isPaymentSubscription';
import { useTranslations } from 'next-intl';

export enum PAYMENT_SUBSCRIPTIONS {
  ONE_TIME = 'ONE_TIME',
  SUBSCRIPTION = 'SUBSCRIPTION',
}

export enum CURRENCY_NAMES {
  UAH = 'UAH',
  EUR = 'EUR',
  PLN = 'PLN',
}

export enum DEFAULT_SUMS {
  UAH = '20',
  EUR = '5',
  PLN = '10',
}

export const DEFAULT_CURRENCY = CURRENCY_NAMES.UAH;
export const DEFAULT_TYPE = PAYMENT_SUBSCRIPTIONS.ONE_TIME;

export const MAX_DONATION_SUM = 10000000;
export const MIN_DONATION_SUM = 1;

interface IUseDonationData {
  selectedCurrency: CURRENCY_NAMES;
  setSelectedCurrency: (currency: CURRENCY_NAMES) => void;
  setSelectedSum: (sum: string) => void;
  setSelectedType: (type: PAYMENT_SUBSCRIPTIONS) => void;
}

export const useDonationData = ({
  selectedCurrency,
  setSelectedCurrency,
  setSelectedSum,
  setSelectedType,
}: IUseDonationData) => {
  const translations = useTranslations('homepage.helpNowSection');

  const getSumValue = (
    uahValue: string,
    eurValue: string,
    plnValue: string
  ) => {
    switch (selectedCurrency) {
      case CURRENCY_NAMES.UAH:
        return uahValue;
      case CURRENCY_NAMES.EUR:
        return eurValue;
      case CURRENCY_NAMES.PLN:
        return plnValue;
      default:
        return '';
    }
  };

  const createPaymentButton = (
    value: string,
    icon?: IPaymentButton['icon']
  ): IPaymentButton => ({
    icon,
    value,
    variant: 'pay',
    size: 'medium',
  });

  const currencyButtonsData: IPaymentButton[] = [
    createPaymentButton(CURRENCY_NAMES.UAH, 'uah'),
    createPaymentButton(CURRENCY_NAMES.EUR, 'eur'),
    createPaymentButton(CURRENCY_NAMES.PLN, 'zloty'),
  ];
  const sumButtonsData: IPaymentButton[] = [
    createPaymentButton(getSumValue('20', '5', '10')),
    createPaymentButton(getSumValue('50', '10', '15')),
    createPaymentButton(getSumValue('100', '50', '80')),
    createPaymentButton(translations('custom_sum')),
  ];
  const typeButtonsData: IPaymentButton[] = [
    createPaymentButton(PAYMENT_SUBSCRIPTIONS.ONE_TIME),
    createPaymentButton(PAYMENT_SUBSCRIPTIONS.SUBSCRIPTION),
  ];

  const handleCurrencyChange = (value: string) => {
    const newCurrency = isCurrencyValue(value) ? value : DEFAULT_CURRENCY;
    setSelectedCurrency(newCurrency);
    setSelectedSum(DEFAULT_SUMS[newCurrency]);
  };

  const handleSumChange = (value: string) => {
    if (isNumPositiveInt(value)) {
      setSelectedSum(value);
    }
  };

  const handlePaymentTypeChange = (value: string) => {
    const newType = isPaymentSubscription(value) ? value : DEFAULT_TYPE;
    setSelectedType(newType);
  };

  return {
    currencyButtonsData,
    sumButtonsData,
    typeButtonsData,
    handleCurrencyChange,
    handleSumChange,
    handlePaymentTypeChange,
  };
};
