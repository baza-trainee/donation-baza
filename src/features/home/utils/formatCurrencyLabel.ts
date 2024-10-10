import { useTranslations } from 'next-intl';

export const formatCurrencyLabel = (currency: string, value: string) => {
  const translations = useTranslations('homepage.helpNowSection');

  if (value === translations('custom_sum')) return value;
  switch (currency) {
    case 'eur':
      return `${value} ${translations('payment_sum_label.eur')}`;
    case 'zloty':
      return `${value} ${translations('payment_sum_label.zl')}`;
    case 'uah':
      return `${value} ${translations('payment_sum_label.uah')}`;
    default:
      return `${value}`;
  }
};
