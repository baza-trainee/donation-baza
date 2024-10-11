import { type CURRENCY } from '../hooks/useDonationData';
import { useTranslations } from 'next-intl';

export const formatCurrencyLabel = (currency: CURRENCY, value: string) => {
  const translations = useTranslations('homepage.helpNowSection');

  if (value === translations('custom_sum')) return value;
  switch (currency) {
    case 'EUR':
      return `${value} ${translations('payment_sum_label.eur')}`;
    case 'PLN':
      return `${value} ${translations('payment_sum_label.zl')}`;
    case 'UAH':
      return `${value} ${translations('payment_sum_label.uah')}`;
    default:
      return `${value}`;
  }
};
